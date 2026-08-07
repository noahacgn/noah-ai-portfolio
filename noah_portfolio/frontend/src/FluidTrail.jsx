import { FluidSimulation } from "react-webgl-fluid";
import { useEffect, useRef, useState } from "react";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const COLOR_REFRESH_MS = 100;
const SPLAT_FORCE = 6000;
const WARMUP_MS = 260;

const TARGET_CONFIG = {
  SIM_RESOLUTION: 128,
  DENSITY_DISSIPATION: 0.5,
  VELOCITY_DISSIPATION: 3,
  PRESSURE: 0.1,
  PRESSURE_ITERATIONS: 20,
  CURL: 3,
  SPLAT_RADIUS: 0.2,
  SPLAT_FORCE,
  SHADING: true,
  COLORFUL: true,
  COLOR_UPDATE_SPEED: 10,
  BLOOM: false,
  SUNRAYS: false,
  TRANSPARENT: false,
  BACK_COLOR: { r: 255, g: 255, b: 255 },
  PAUSED: true,
};

function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
  );

  useEffect(() => {
    const media = window.matchMedia(REDUCED_MOTION_QUERY);
    const syncPreference = () => setReducedMotion(media.matches);
    media.addEventListener("change", syncPreference);
    return () => media.removeEventListener("change", syncPreference);
  }, []);

  return reducedMotion;
}

function randomDyeColor(intensity = 0.15) {
  const hue = Math.random() * 6;
  const segment = Math.floor(hue);
  const offset = hue - segment;
  const rising = offset * intensity;
  const falling = (1 - offset) * intensity;

  switch (segment % 6) {
    case 0:
      return { r: intensity, g: rising, b: 0 };
    case 1:
      return { r: falling, g: intensity, b: 0 };
    case 2:
      return { r: 0, g: intensity, b: rising };
    case 3:
      return { r: 0, g: falling, b: intensity };
    case 4:
      return { r: rising, g: 0, b: intensity };
    default:
      return { r: intensity, g: 0, b: falling };
  }
}

function normalizedPoint(event) {
  const width = Math.max(window.innerWidth, 1);
  const height = Math.max(window.innerHeight, 1);
  return {
    x: event.clientX / width,
    y: 1 - event.clientY / height,
    aspect: width / height,
  };
}

function correctedDelta(current, previous) {
  let dx = current.x - previous.x;
  let dy = current.y - previous.y;
  if (current.aspect < 1) dx *= current.aspect;
  if (current.aspect > 1) dy /= current.aspect;
  return { dx, dy };
}

function finishWarmup(canvas, simulation) {
  simulation.stop();
  simulation.pause();
  simulation.updateConfig({
    DENSITY_DISSIPATION: TARGET_CONFIG.DENSITY_DISSIPATION,
    VELOCITY_DISSIPATION: TARGET_CONFIG.VELOCITY_DISSIPATION,
    CURL: TARGET_CONFIG.CURL,
    PAUSED: true,
  });
  const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
  if (!gl) return;
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
  gl.clearColor(1, 1, 1, 1);
  gl.clear(gl.COLOR_BUFFER_BIT);
}

export function FluidTrail() {
  const canvasRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reducedMotion) return undefined;

    let disposed = false;
    let simulation = null;
    let initializeFrame = 0;
    let pointerFrame = 0;
    let warmupTimer = 0;
    let started = false;
    const pointers = new Map();
    const pendingMoves = new Map();

    function startSimulation() {
      if (!simulation || started) return;
      started = true;
      simulation.resume();
      simulation.start();
      canvas.dataset.fluidState = "active";
    }

    function updatePointer(pointerId, point, pointerType, timestamp) {
      let pointer = pointers.get(pointerId);
      if (!pointer) {
        pointer = {
          x: pointerType === "touch" ? point.x : 0,
          y: pointerType === "touch" ? point.y : 0,
          color: randomDyeColor(),
          colorUpdatedAt: timestamp,
        };
      }
      if (timestamp - pointer.colorUpdatedAt >= COLOR_REFRESH_MS) {
        pointer.color = randomDyeColor();
        pointer.colorUpdatedAt = timestamp;
      }

      const delta = correctedDelta(point, pointer);
      simulation.splat(
        point.x,
        point.y,
        delta.dx * SPLAT_FORCE,
        delta.dy * SPLAT_FORCE,
        pointer.color,
      );
      pointers.set(pointerId, { ...pointer, x: point.x, y: point.y });
    }

    function flushPointerMoves(timestamp) {
      pointerFrame = 0;
      if (!simulation || disposed) return;
      for (const [pointerId, move] of pendingMoves) {
        updatePointer(pointerId, move.point, move.pointerType, timestamp);
      }
      pendingMoves.clear();
    }

    function handlePointerMove(event) {
      if (!simulation) return;
      startSimulation();
      pendingMoves.set(event.pointerId, {
        point: normalizedPoint(event),
        pointerType: event.pointerType,
      });
      if (!pointerFrame) pointerFrame = window.requestAnimationFrame(flushPointerMoves);
    }

    function handlePointerDown(event) {
      if (!simulation) return;
      startSimulation();
      const point = normalizedPoint(event);
      const color = randomDyeColor();
      pointers.set(event.pointerId, {
        x: point.x,
        y: point.y,
        color,
        colorUpdatedAt: performance.now(),
      });
      if (event.pointerType !== "mouse") return;
      const burst = randomDyeColor(1.5);
      simulation.splat(
        point.x,
        point.y,
        10 * (Math.random() - 0.5),
        30 * (Math.random() - 0.5),
        burst,
      );
    }

    function handlePointerEnd(event) {
      pendingMoves.delete(event.pointerId);
      if (event.pointerType !== "mouse") pointers.delete(event.pointerId);
    }

    function handleVisibilityChange() {
      if (!simulation || !started) return;
      if (document.hidden) simulation.stop();
      else simulation.start();
    }

    initializeFrame = window.requestAnimationFrame(() => {
      if (disposed) return;
      try {
        const dyeResolution = window.matchMedia("(pointer: coarse)").matches ? 512 : 1440;
        simulation = new FluidSimulation(canvas, {
          ...TARGET_CONFIG,
          DYE_RESOLUTION: dyeResolution,
          DENSITY_DISSIPATION: 160,
          VELOCITY_DISSIPATION: 160,
          CURL: 0,
          PAUSED: false,
        });
        warmupTimer = window.setTimeout(() => {
          if (disposed || !simulation) return;
          finishWarmup(canvas, simulation);
          canvas.dataset.fluidState = "idle";
          window.addEventListener("pointermove", handlePointerMove, { passive: true });
          window.addEventListener("pointerdown", handlePointerDown, { passive: true });
          window.addEventListener("pointerup", handlePointerEnd, { passive: true });
          window.addEventListener("pointercancel", handlePointerEnd, { passive: true });
          document.addEventListener("visibilitychange", handleVisibilityChange);
        }, WARMUP_MS);
      } catch {
        canvas.dataset.fluidState = "unsupported";
        canvas.hidden = true;
      }
    });

    return () => {
      disposed = true;
      window.cancelAnimationFrame(initializeFrame);
      window.cancelAnimationFrame(pointerFrame);
      window.clearTimeout(warmupTimer);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerEnd);
      window.removeEventListener("pointercancel", handlePointerEnd);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      simulation?.stop();
      const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
      gl?.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fluid-trail"
      data-fluid-state="loading"
      data-fluid-trail
      aria-hidden="true"
    />
  );
}

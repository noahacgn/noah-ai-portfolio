import {
  ArrowLeft,
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  ChevronDown,
  ChevronRight,
  Code2,
  Github,
  Globe2,
  Layers3,
  Mail,
  Menu,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { FluidTrail } from "./FluidTrail.jsx";

function assetUrl(assetBase, fileName) {
  return new URL(fileName, assetBase.endsWith("/") ? assetBase : `${assetBase}/`).toString();
}

const QUICK_ACTIONS = [
  { id: "me", label: "Me", icon: Sparkles },
  { id: "projects", label: "Projects", icon: Layers3 },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "experience", label: "Experience", icon: BriefcaseBusiness },
  { id: "contact", label: "Contact", icon: MessageCircle },
];

const HERO_QUESTION_SUGGESTIONS = [
  "Could Noah stabilize my Spring backend?",
  "How does Noah design reliable payment flows?",
  "Can Noah integrate AI into my product?",
  "What should I share for a first milestone?",
];
const HERO_QUESTION_HOLD_MS = 5_000;
const HERO_QUESTION_FADE_MS = 180;

const EMPTY_PROFILE = {
  name: "Portfolio",
  githubHandle: "",
  upworkUrl: "#",
  githubUrl: "#",
  email: "",
  projects: [],
  skills: [],
  experience: [],
};

function firstNameOf(profile) {
  return String(profile.name || "").trim().split(/\s+/)[0] || "the portfolio owner";
}

function useHeroQuestionSuggestion(paused) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [pageVisible, setPageVisible] = useState(() => document.visibilityState === "visible");
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => setReducedMotion(motionPreference.matches);
    const syncPageVisibility = () => setPageVisible(document.visibilityState === "visible");

    motionPreference.addEventListener("change", syncMotionPreference);
    document.addEventListener("visibilitychange", syncPageVisibility);
    return () => {
      motionPreference.removeEventListener("change", syncMotionPreference);
      document.removeEventListener("visibilitychange", syncPageVisibility);
    };
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setIndex(0);
      setVisible(true);
      return undefined;
    }
    if (paused || !pageVisible) {
      setVisible(true);
      return undefined;
    }

    const fadeTimer = window.setTimeout(() => setVisible(false), HERO_QUESTION_HOLD_MS);
    const advanceTimer = window.setTimeout(() => {
      setIndex((current) => (current + 1) % HERO_QUESTION_SUGGESTIONS.length);
      setVisible(true);
    }, HERO_QUESTION_HOLD_MS + HERO_QUESTION_FADE_MS);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(advanceTimer);
    };
  }, [index, pageVisible, paused, reducedMotion]);

  return {
    suggestion: HERO_QUESTION_SUGGESTIONS[index],
    suggestionVisible: visible,
  };
}

function Icon({ icon: IconComponent, size = 18, strokeWidth = 1.8 }) {
  return <IconComponent aria-hidden="true" size={size} strokeWidth={strokeWidth} />;
}

function ExternalArrow() {
  return <Icon icon={ArrowUpRight} size={17} strokeWidth={1.7} />;
}

function renderInlineText(text) {
  return String(text)
    .split(/(\*\*[^*\n]+\*\*)/g)
    .map((part, index) => (
      part.startsWith("**") && part.endsWith("**")
        ? <strong key={`${index}-${part.slice(2, 14)}`}>{part.slice(2, -2)}</strong>
        : part
    ));
}

function MessageText({ children }) {
  return (
    <div className="message-copy">
      {String(children)
        .split("\n")
        .map((line, index) => (
          <p key={`${index}-${line.slice(0, 12)}`}>{line ? renderInlineText(line) : "\u00a0"}</p>
        ))}
    </div>
  );
}

function Avatar({ small = false, assetBase, name = "portfolio owner" }) {
  return (
    <img
      className={small ? "avatar avatar-small" : "avatar"}
      src={assetUrl(assetBase, "noah-avatar.webp")}
      alt={`3D portrait of ${name}`}
    />
  );
}

function ProjectCard({ project, assetBase }) {
  const LinkIcon = project.linkType === "source" ? Github : Globe2;
  const linkLabel = project.linkLabel || "View project";

  return (
    <a
      className="project-card"
      href={project.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${project.title}. ${linkLabel}`}
    >
      <div className="project-media">
        <img src={assetUrl(assetBase, project.visual)} alt={project.visualAlt} loading="lazy" />
        <span className="project-media-glow" aria-hidden="true" />
      </div>
      <div className="project-card-body">
        <div className="project-card-topline">
          <span className="status-pill">{project.statusLabel || "Selected Work"}</span>
          <ExternalArrow />
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <span className="project-link-label">
          <Icon icon={LinkIcon} size={16} /> {linkLabel}
        </span>
      </div>
    </a>
  );
}

function HomeView({ onAction, onAbout, onOpenChat, assetBase, profile }) {
  const [question, setQuestion] = useState("");
  const [questionFocused, setQuestionFocused] = useState(false);
  const heroRef = useRef(null);
  const interactionsRef = useRef(null);
  const projectsRef = useRef(null);
  const firstName = firstNameOf(profile);
  const { suggestion, suggestionVisible } = useHeroQuestionSuggestion(
    questionFocused || question.length > 0,
  );

  useEffect(() => {
    const hero = heroRef.current;
    const interactions = interactionsRef.current;
    if (!hero || !interactions || !("IntersectionObserver" in window)) {
      return undefined;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const initialTop = hero.getBoundingClientRect().top;
    let lastDistance = 0;

    function applyTransition(distance) {
      lastDistance = distance;
      const fadeProgress = Math.min(1, Math.max(0, (distance - 360) / 190));
      const offset = reduceMotion.matches ? 0 : Math.min(123, distance / 5.04);
      interactions.style.setProperty("--hero-exit-opacity", reduceMotion.matches ? "1" : String(1 - fadeProgress));
      interactions.style.setProperty("--hero-exit-offset", `${-offset}px`);
    }

    const observer = new window.IntersectionObserver(([entry]) => {
      applyTransition(Math.max(0, initialTop - entry.boundingClientRect.top));
    }, {
      root: null,
      threshold: Array.from({ length: 101 }, (_, index) => index / 100),
    });
    const handleMotionPreference = () => applyTransition(lastDistance);

    observer.observe(hero);
    reduceMotion.addEventListener("change", handleMotionPreference);
    return () => {
      observer.disconnect();
      reduceMotion.removeEventListener("change", handleMotionPreference);
    };
  }, []);

  useEffect(() => {
    const section = projectsRef.current;
    if (!section) {
      return undefined;
    }

    const revealItems = [...section.querySelectorAll("[data-scroll-reveal]")];
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.12,
    });

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [profile.projects.length]);

  function submit(event) {
    event.preventDefault();
    const value = question.trim();
    if (!value) {
      onOpenChat("");
      return;
    }
    onOpenChat(value);
    setQuestion("");
  }

  function exploreProjects() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    projectsRef.current?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  }

  return (
    <main className="portfolio-shell home-view">
      <header className="site-header">
        <button type="button" className="header-cta header-opportunity" onClick={() => onOpenChat(`How can ${firstName} help with my backend or AI integration?`)}>
          Need backend or AI integration help?
        </button>
        <button className="brand-button header-brand" type="button" aria-label="Portfolio home" onClick={() => onAction("home")}>
          <span className="brand-mark">NW</span>
        </button>
        <nav className="header-nav" aria-label="Portfolio navigation">
          <button type="button" className="header-link" onClick={onAbout}>
            About
          </button>
        </nav>
        <button className="mobile-menu" type="button" aria-label="Open navigation" onClick={onAbout}>
          <Icon icon={Menu} size={20} />
        </button>
      </header>

      <section ref={heroRef} className="hero-section" aria-labelledby="hero-title">
        <div className="watermark" aria-hidden="true"><span>{profile.name}</span></div>
        <p className="hero-intro">Hey, I&apos;m {profile.name} <span aria-hidden="true">👋</span></p>
        <h1 id="hero-title">Backend &amp; AI Portfolio</h1>
        <div className="hero-avatar-wrap">
          <div className="avatar-orbit orbit-one" aria-hidden="true" />
          <div className="avatar-orbit orbit-two" aria-hidden="true" />
          <Avatar assetBase={assetBase} name={profile.name} />
        </div>
        <div className="hero-interactions" ref={interactionsRef}>
          <form className="question-form hero-question" onSubmit={submit}>
            <label htmlFor="hero-question">Ask about {firstName}&apos;s work</label>
            <div className="question-input-row">
              <input
                id="hero-question"
                className={suggestionVisible ? "hero-question-input" : "hero-question-input is-suggestion-hidden"}
                value={question}
                maxLength={2000}
                onChange={(event) => setQuestion(event.target.value)}
                onFocus={() => setQuestionFocused(true)}
                onBlur={() => setQuestionFocused(false)}
                placeholder={suggestion}
                autoComplete="off"
              />
              <button type="submit" className="send-button" aria-label="Ask the Backend & AI Portfolio">
                <Icon icon={Bot} size={20} strokeWidth={1.9} />
              </button>
            </div>
            {question.length >= 1800 && <p className="input-counter">{question.length.toLocaleString()} / 2,000</p>}
            <p className="privacy-note">AI-generated · Don&apos;t share sensitive information</p>
          </form>
          <div className="quick-grid" aria-label="Quick portfolio views">
            {QUICK_ACTIONS.map(({ id, label, icon }) => (
              <button key={id} className="quick-card" type="button" onClick={() => onAction(id)}>
                <Icon icon={icon} size={19} />
                <span>{label}</span>
                <ChevronRight className="quick-arrow" aria-hidden="true" size={15} />
              </button>
            ))}
          </div>
        </div>
        <button type="button" className="explore-projects" onClick={exploreProjects}>
          <span>Explore Projects</span>
          <span className="explore-arrow"><Icon icon={ChevronDown} size={20} strokeWidth={2} /></span>
        </button>
      </section>

      <section ref={projectsRef} className="projects-section" aria-labelledby="projects-heading">
        <div className="section-heading-row scroll-reveal" data-scroll-reveal>
          <div>
            <p className="section-kicker">Selected work</p>
            <h2 id="projects-heading">Backend &amp; AI Work</h2>
          </div>
          <button type="button" className="text-action" onClick={() => onAction("projects")}>
            Ask about projects <ExternalArrow />
          </button>
        </div>
        <div className="project-grid scroll-reveal" data-scroll-reveal>
          {profile.projects.map((project) => <ProjectCard key={project.id} project={project} assetBase={assetBase} />)}
        </div>
        <button type="button" className="process-banner scroll-reveal" data-scroll-reveal onClick={() => onAction("process")}>
          <span className="process-icon"><Workflow aria-hidden="true" size={20} /></span>
          <span><strong>Ask About My Process</strong><small>From acceptance criteria and milestones to deployment and handoff</small></span>
          <ExternalArrow />
        </button>
      </section>

      <section className="contact-banner" aria-labelledby="contact-heading">
        <div>
          <p className="section-kicker">Ready when you are</p>
          <h2 id="contact-heading">Bring me the backend or AI integration blocker.</h2>
          <p>Share your goal, current stack, and main blocker. We&apos;ll find a practical first milestone.</p>
        </div>
        <a className="upwork-button" href={profile.upworkUrl} target="_blank" rel="noreferrer">
          Continue on Upwork <ExternalArrow />
        </a>
      </section>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <div className="footer-links">
          <a href={`mailto:${profile.email}`}><Mail aria-hidden="true" size={16} /> {profile.email}</a>
          <a href={profile.githubUrl} target="_blank" rel="noreferrer"><Github aria-hidden="true" size={16} /> {profile.githubHandle}</a>
        </div>
      </footer>
    </main>
  );
}

function StaticDetails({ action, profile }) {
  const firstName = firstNameOf(profile);

  if (action === "skills") {
    return (
      <section className="static-details" aria-label={`${firstName}'s grouped skills`}>
        <div className="details-heading"><Code2 aria-hidden="true" size={17} /><strong>Core skills</strong></div>
        <div className="skill-groups">
          {profile.skills.map((group) => (
            <div className="skill-group" key={group.title}>
              <h2>{group.title}</h2>
              <div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (action === "experience") {
    return (
      <section className="static-details" aria-label={`${firstName}'s public experience timeline`}>
        <div className="details-heading"><BriefcaseBusiness aria-hidden="true" size={17} /><strong>Public experience timeline</strong></div>
        <div className="experience-list">
          {profile.experience.map((entry) => (
            <article className="experience-item" key={entry.company}>
              <div><h2>{entry.company}</h2><p>{entry.note}</p></div>
              <time>{entry.dates}</time>
            </article>
          ))}
        </div>
      </section>
    );
  }

  if (action === "contact") {
    return (
      <section className="static-details contact-details" aria-label={`${firstName}'s public contact channels`}>
        <div className="details-heading"><Mail aria-hidden="true" size={17} /><strong>Public contact channels</strong></div>
        <div className="contact-detail-links">
          <a href={profile.upworkUrl} target="_blank" rel="noreferrer"><span>Upwork</span><ExternalArrow /></a>
          <a href={`mailto:${profile.email}`}><span>{profile.email}</span><ExternalArrow /></a>
          <a href={profile.githubUrl} target="_blank" rel="noreferrer"><span>GitHub · {profile.githubHandle}</span><ExternalArrow /></a>
        </div>
      </section>
    );
  }

  if (action === "projects") {
    return (
      <section className="static-details" aria-label={`${firstName}'s project links`}>
        <div className="details-heading"><Layers3 aria-hidden="true" size={17} /><strong>Explore selected work</strong></div>
        <div className="project-detail-links">
          {profile.projects.map((project) => <a key={project.id} href={project.href} target="_blank" rel="noreferrer"><span>{project.title}</span><ExternalArrow /></a>)}
        </div>
      </section>
    );
  }

  return null;
}

function ChatView({ data, onAction, onHome, onAbout, assetBase, setTriggerValue, profile }) {
  const [question, setQuestion] = useState("");
  const [localMessages, setLocalMessages] = useState([]);
  const [localNotice, setLocalNotice] = useState("");
  const [localPending, setLocalPending] = useState(false);
  const endRef = useRef(null);
  const firstName = firstNameOf(profile);
  const serverMessages = Array.isArray(data?.messages) ? data.messages : [];
  const messages = useMemo(() => [...serverMessages, ...localMessages], [serverMessages, localMessages]);
  const isBusy = Boolean(data?.pending || localPending);

  useEffect(() => {
    setLocalMessages([]);
    setLocalNotice("");
    if (!data?.pending) setLocalPending(false);
  }, [data?.messageRevision, data?.view, data?.error, data?.pending]);

  useEffect(() => {
    endRef.current?.scrollIntoView({
      behavior: "smooth",
      block: data?.staticAction ? "end" : "nearest",
    });
  }, [messages.length, data?.pending, data?.staticAction]);

  useEffect(() => {
    if (!data?.pending) return undefined;
    const timer = window.setInterval(() => {
      setTriggerValue?.("heartbeat", Date.now());
    }, 160);
    return () => window.clearInterval(timer);
  }, [data?.pending, setTriggerValue]);

  function submit(event) {
    event.preventDefault();
    if (isBusy) return;
    const value = question.trim();
    if (!value) return;
    if (value.length > 2000) {
      setLocalNotice("Please keep a question under 2,000 characters.");
      return;
    }
    setLocalNotice("");
    setLocalMessages([{ role: "user", content: value }]);
    setLocalPending(true);
    setQuestion("");
    onAction("submit", value);
  }

  return (
    <main className="portfolio-shell chat-view">
      <header className="chat-header">
        <button className="brand-button" type="button" aria-label="Portfolio home" onClick={onHome}>
          <ArrowLeft aria-hidden="true" size={18} />
          <span className="brand-mark">NW</span>
        </button>
        <div className="chat-header-center"><span className="online-dot" /> Backend &amp; AI Portfolio chat</div>
        <button className="header-link about-chat" type="button" onClick={onAbout}>About</button>
      </header>
      <section className={data?.staticAction ? "chat-content chat-content-static" : "chat-content"} aria-labelledby="chat-heading">
        <div className="chat-intro">
          <Avatar small assetBase={assetBase} name={profile.name} />
          <div><p className="eyebrow">Backend &amp; AI Portfolio</p><h1 id="chat-heading">Ask me about {firstName}&apos;s work</h1><p>I&apos;m an AI-generated portfolio, here to make the useful parts easy to explore.</p></div>
        </div>
        <div className="message-list" aria-live="polite">
          {messages.length === 0 && <div className="assistant-message"><Avatar small assetBase={assetBase} name={profile.name} /><div className="message-bubble"><MessageText>Hi — I can give you a concise tour of this portfolio&apos;s backend work, AI integrations, skills, experience, or process. What are you building?</MessageText></div></div>}
          {messages.map((message, index) => (
            <div key={`${message.role}-${index}-${message.content?.slice(0, 10)}`} className={message.role === "user" ? "user-message" : "assistant-message"}>
              {message.role !== "user" && <Avatar small assetBase={assetBase} name={profile.name} />}
              <div className="message-bubble"><MessageText>{message.content}</MessageText>{message.role !== "user" && data?.showUpwork && <a className="message-cta" href={profile.upworkUrl} target="_blank" rel="noreferrer">Continue on Upwork <ExternalArrow /></a>}</div>
            </div>
          ))}
          {data?.staticAction && <StaticDetails action={data.staticAction} profile={profile} />}
          {data?.streamingText && <div className="assistant-message"><Avatar small assetBase={assetBase} name={profile.name} /><div className="message-bubble streaming-bubble"><MessageText>{data.streamingText}</MessageText><span className="streaming-caret" aria-label="Generating" /></div></div>}
          {(data?.pending || localPending) && !data?.streamingText && <div className="assistant-message"><Avatar small assetBase={assetBase} name={profile.name} /><div className="message-bubble typing-bubble"><span className="typing-label">Preparing a response</span><span className="typing-dots" aria-label="Generating"><i /><i /><i /></span></div></div>}
          {data?.error && <div className="assistant-message"><Avatar small assetBase={assetBase} name={profile.name} /><div className="message-bubble error-bubble"><MessageText>{data.error}</MessageText><button className="inline-action" type="button" onClick={onHome}>Browse the static portfolio <ExternalArrow /></button></div></div>}
          {localNotice && <p className="input-notice" role="alert">{localNotice}</p>}
          <div ref={endRef} className="message-end" />
        </div>
      </section>
      <form className="question-form chat-question" onSubmit={submit}>
        <label htmlFor="chat-question">Ask the Backend &amp; AI Portfolio</label>
        <div className="question-input-row">
          <input id="chat-question" value={question} maxLength={2000} onChange={(event) => setQuestion(event.target.value)} placeholder={isBusy ? "Waiting for this answer…" : "Ask a follow-up…"} autoComplete="off" disabled={isBusy} />
          <button type="submit" className="send-button" aria-label="Send question" disabled={isBusy}><Icon icon={Bot} size={20} strokeWidth={1.9} /></button>
        </div>
        {question.length >= 1800 && <p className="input-counter">{question.length.toLocaleString()} / 2,000</p>}
        <p className="privacy-note">AI-generated · Don&apos;t share secrets · Final scope and terms are confirmed by {firstName} on Upwork</p>
      </form>
      <footer className="chat-footer"><a href={profile.githubUrl} target="_blank" rel="noreferrer">{profile.githubHandle} <ExternalArrow /></a><a className="chat-upwork-link" href={profile.upworkUrl} target="_blank" rel="noreferrer">Continue on Upwork <ExternalArrow /></a></footer>
    </main>
  );
}

function AboutModal({ onClose, returnFocusRef, profile }) {
  const closeRef = useRef(null);
  const firstName = firstNameOf(profile);

  useEffect(() => {
    closeRef.current?.focus();
    function handleKey(event) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
      returnFocusRef?.current?.focus?.();
    };
  }, [onClose, returnFocusRef]);

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section className="about-modal" role="dialog" aria-modal="true" aria-labelledby="about-title">
        <button ref={closeRef} className="modal-close" type="button" aria-label="Close About" onClick={onClose}><X size={20} /></button>
        <div className="modal-icon"><Sparkles size={22} /></div>
        <p className="section-kicker">About this portfolio</p>
        <h2 id="about-title">A conversational guide to {firstName}&apos;s work.</h2>
        <p>Ask about {firstName}&apos;s projects, experience, technical decisions, and approach to building backend systems and AI integrations. Answers are generated from a curated set of public information about his work.</p>
        <div className="modal-boundary"><ShieldCheck size={18} /><span>AI-generated answers may be incomplete. Confirm availability, scope, rates, and project terms directly with {firstName}.</span></div>
        <a className="upwork-button modal-action" href={profile.upworkUrl} target="_blank" rel="noreferrer">Contact {firstName} on Upwork <ExternalArrow /></a>
      </section>
    </div>
  );
}

export function App({ data = {}, setTriggerValue, assetBase = "./assets/" }) {
  const profile = data.profile || EMPTY_PROFILE;
  const [view, setView] = useState(data.view || "home");
  const [aboutOpen, setAboutOpen] = useState(false);
  const aboutReturnRef = useRef(null);
  const queryPresenceRef = useRef(new URL(window.location.href).searchParams.has("query"));

  useEffect(() => {
    setView(data.view || "home");
  }, [data.view]);

  useEffect(() => {
    function syncQueryPresence() {
      const hasQuery = new URL(window.location.href).searchParams.has("query");
      const queryWasPresent = queryPresenceRef.current;
      queryPresenceRef.current = hasQuery;
      if (queryWasPresent && !hasQuery) {
        setView("home");
        setTriggerValue?.("reset", true);
      }
    }
    window.addEventListener("popstate", syncQueryPresence);
    return () => window.removeEventListener("popstate", syncQueryPresence);
  }, [setTriggerValue]);

  function emitAction(type, value = null) {
    if (type === "home") {
      queryPresenceRef.current = false;
      setView("home");
      setTriggerValue?.("reset", true);
      return;
    }
    setView("chat");
    setTriggerValue?.("action", { type, value });
  }

  function submitQuestion(value) {
    if (value.trim()) queryPresenceRef.current = true;
    setView("chat");
    setTriggerValue?.("submit", { query: value });
  }

  function openAbout(event) {
    aboutReturnRef.current = event?.currentTarget || null;
    setAboutOpen(true);
  }

  return (
    <div className="app-root">
      <FluidTrail />
      {view === "chat" ? (
        <ChatView data={data} profile={profile} assetBase={assetBase} setTriggerValue={setTriggerValue} onAction={emitAction} onHome={() => emitAction("home")} onAbout={openAbout} />
      ) : (
        <HomeView profile={profile} assetBase={assetBase} onAction={emitAction} onAbout={openAbout} onOpenChat={submitQuestion} />
      )}
      {aboutOpen && <AboutModal profile={profile} returnFocusRef={aboutReturnRef} onClose={() => setAboutOpen(false)} />}
    </div>
  );
}

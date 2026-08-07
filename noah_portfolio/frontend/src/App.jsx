import {
  ArrowLeft,
  ArrowUpRight,
  BriefcaseBusiness,
  ChevronRight,
  Clock3,
  Code2,
  Database,
  Github,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Send,
  ShieldCheck,
  Sparkles,
  Terminal,
  Workflow,
  X,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

function assetUrl(assetBase, fileName) {
  return new URL(fileName, assetBase.endsWith("/") ? assetBase : `${assetBase}/`).toString();
}

const UPWORK_URL =
  "https://www.upwork.com/freelancers/~0119433c70074dd0d0?viewMode=1";
const PORTFOLIO_REPO = "https://github.com/noahacgn/noah-ai-portfolio";
const GITHUB_URL = "https://github.com/noahacgn";
const EMAIL = "noahacgn@gmail.com";

const QUICK_ACTIONS = [
  { id: "me", label: "Me", icon: Sparkles },
  { id: "projects", label: "Projects", icon: Layers3 },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "experience", label: "Experience", icon: BriefcaseBusiness },
  { id: "contact", label: "Contact", icon: MessageCircle },
];

const QUICK_RESPONSES = {
  me: {
    title: "A quick introduction",
    body:
      "I’m Noah Wang, a production AI systems engineer based in China (UTC+8). I build agent workflows, retrieval-backed products, and the full-stack delivery around them. I bring seven years of backend and distributed-systems experience, so the AI layer is designed to survive contact with real products—not just a demo. 👋",
  },
  projects: {
    title: "Two projects worth opening",
    body:
      "Knowledge Engine is an evidence-first enterprise RAG platform reference, with a focus on grounded answers, authorization boundaries, and reliable ingestion. Quad Agent is a full-stack LangGraph workspace spanning web search, file RAG, research, and human-in-the-loop workflows. Both cards on the home page open their GitHub repositories directly.",
  },
  skills: {
    title: "The stack I reach for",
    body:
      "My AI systems work centers on LangGraph, LangChain, RAG, hybrid retrieval, and agent workflows. Around that I use Python, FastAPI, PostgreSQL/pgvector, Elasticsearch, Redis, Neo4j, React/TypeScript, streaming/SSE, OpenTelemetry, Docker, and automated testing. The grouping is intentional: useful AI needs a dependable product boundary.",
  },
  experience: {
    title: "Seven years of engineering context",
    body:
      "My public timeline runs from Merypto (CPcash), Aug 2024–Jun 2026, through SandPay, Shanghai Jibeike, and Xiamen Ruanyun. The domains include payments, wallets, blockchain, e-commerce, and banking backends. Java, Spring, Redis, RabbitMQ, concurrency, and distributed systems are the engineering foundation behind my newer AI product work.",
  },
  contact: {
    title: "The easiest next step",
    body:
      "Upwork is the main place to discuss a project, scope, start date, and terms. Email is a useful backup, and GitHub is there when you want to inspect the work first. If you share your use case, data shape, current stack, and workflow on Upwork, I can respond with a concrete starting point.",
  },
  process: {
    title: "A five-step engagement process",
    body:
      "1. Requirements & data — clarify the user, workflow, data shape, and success signal.\n2. Architecture & risks — choose the smallest reliable design and surface unknowns early.\n3. Minimum vertical slice — ship one useful path end to end.\n4. Reliability & testing — make behavior observable, testable, and safe to change.\n5. Deployment & handoff — document the operating path and leave the team with a maintainable system.",
  },
  cta: {
    title: "How I can help with an AI project",
    body:
      "I can help turn an ambiguous AI idea into a working product slice: map the workflow, choose an agent or retrieval shape, build the backend and UI, and put reliability around it. The fastest way to make that specific is to continue on Upwork with your use case, data, existing stack, and current workflow.",
  },
};

const PROJECTS = [
  {
    id: "knowledge-engine",
    title: "Knowledge Engine — Evidence-First Enterprise RAG Platform",
    description:
      "A production-oriented, source-available reference for grounded enterprise knowledge workflows: LangGraph orchestration, hybrid retrieval, authorization boundaries, controlled queries, and reliable ingestion.",
    href: "https://github.com/noahacgn/knowledge-engine",
    visual: "knowledge-grounded.webp",
    visualAlt: "Knowledge Engine grounded answer interface",
    thumbs: ["knowledge-grounded.webp", "knowledge-trace.webp", "knowledge-ingestion.webp", "knowledge-atlas.webp"],
  },
  {
    id: "quad-agent",
    title: "Quad Agent — Full-Stack LangGraph AI Agent Workspace",
    description:
      "A full-stack workspace for practical agent workflows, including web search, file RAG, presentation building, deep research, replayable streaming events, and human-in-the-loop steps.",
    href: "https://github.com/noahacgn/quad-agent",
    visual: "quad-web-search.gif",
    visualAlt: "Quad Agent web search workspace",
    thumbs: ["quad-web-search.gif", "quad-file-rag.gif", "quad-ppt.gif", "quad-research.gif"],
  },
];

const SKILL_GROUPS = [
  {
    title: "AI Systems",
    icon: Workflow,
    items: ["LangGraph", "LangChain", "RAG", "Hybrid Retrieval", "Agent Workflows"],
  },
  {
    title: "Backend / Data",
    icon: Database,
    items: ["Python", "FastAPI", "PostgreSQL/pgvector", "Elasticsearch", "Redis", "Neo4j"],
  },
  {
    title: "Product Delivery",
    icon: Terminal,
    items: [
      "React/TypeScript",
      "Streaming/SSE",
      "OpenTelemetry",
      "Docker",
      "Automated Testing",
    ],
  },
];

const EXPERIENCE = [
  { company: "Merypto (CPcash)", dates: "Aug 2024 – Jun 2026", note: "Wallet and payment product engineering" },
  { company: "SandPay", dates: "Oct 2021 – May 2024", note: "Payment and banking backend systems" },
  { company: "Shanghai Jibeike", dates: "Oct 2020 – Aug 2021", note: "Digital goods marketplace systems" },
  { company: "Xiamen Ruanyun", dates: "May 2019 – Jul 2020", note: "Backend and distributed application delivery" },
];

function Icon({ icon: IconComponent, size = 18, strokeWidth = 1.8 }) {
  return <IconComponent aria-hidden="true" size={size} strokeWidth={strokeWidth} />;
}

function ExternalArrow() {
  return <Icon icon={ArrowUpRight} size={17} strokeWidth={1.7} />;
}

function MessageText({ children }) {
  return (
    <div className="message-copy">
      {String(children)
        .split("\n")
        .map((line, index) => (
          <p key={`${index}-${line.slice(0, 12)}`}>{line || "\u00a0"}</p>
        ))}
    </div>
  );
}

function Avatar({ small = false, assetBase }) {
  return (
    <img
      className={small ? "avatar avatar-small" : "avatar"}
      src={assetUrl(assetBase, "noah-avatar.png")}
      alt="3D portrait of Noah Wang"
    />
  );
}

function ProjectCard({ project, assetBase }) {
  return (
    <a
      className="project-card"
      href={project.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${project.title}. View on GitHub`}
    >
      <div className="project-media">
        <img src={assetUrl(assetBase, project.visual)} alt={project.visualAlt} loading="lazy" />
        <span className="project-media-glow" aria-hidden="true" />
      </div>
      <div className="project-card-body">
        <div className="project-card-topline">
          <span className="status-pill">Source Available</span>
          <ExternalArrow />
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <span className="project-link-label">
          <Github aria-hidden="true" size={16} /> View on GitHub
        </span>
      </div>
    </a>
  );
}

function HomeView({ onAction, onAbout, onOpenChat, assetBase }) {
  const [question, setQuestion] = useState("");

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

  return (
    <main className="portfolio-shell home-view">
      <div className="watermark" aria-hidden="true">Noah Wang</div>
      <header className="site-header">
        <button className="brand-button" type="button" onClick={() => onAction("home")}>
          <span className="brand-mark">NW</span>
          <span>Noah Wang</span>
        </button>
        <nav className="header-nav" aria-label="Portfolio navigation">
          <button type="button" className="header-link" onClick={onAbout}>
            About
          </button>
          <a className="header-link" href={PORTFOLIO_REPO} target="_blank" rel="noreferrer">
            Source <ExternalArrow />
          </a>
          <button type="button" className="header-cta" onClick={() => onOpenChat("How can Noah help with my AI project?")}>
            Looking for an AI engineer? <ExternalArrow />
          </button>
        </nav>
        <button className="mobile-menu" type="button" aria-label="Open navigation" onClick={onAbout}>
          <Icon icon={Menu} size={20} />
        </button>
      </header>

      <section className="hero-section" aria-labelledby="hero-name">
        <h2 className="eyebrow hero-eyebrow"><Sparkles aria-hidden="true" size={17} /> AI Portfolio</h2>
        <h1 id="hero-name">Hey, I&apos;m Noah Wang <span aria-hidden="true">👋</span></h1>
        <p className="hero-tagline">Production AI Systems Engineer — Agents, RAG, and Full-Stack Delivery</p>
        <p className="hero-supporting">
          Seven years of engineering context behind practical AI products. Based in China · UTC+8, available for 30+ hrs/week and contract-to-hire.
        </p>
        <div className="hero-avatar-wrap">
          <div className="avatar-orbit orbit-one" aria-hidden="true" />
          <div className="avatar-orbit orbit-two" aria-hidden="true" />
          <Avatar assetBase={assetBase} />
        </div>
        <form className="question-form hero-question" onSubmit={submit}>
          <label htmlFor="hero-question">Ask about Noah&apos;s work</label>
          <div className="question-input-row">
            <input
              id="hero-question"
              value={question}
              maxLength={2000}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="Ask me anything about projects, skills, or process…"
              autoComplete="off"
            />
            <button type="submit" className="send-button" aria-label="Ask the AI Portfolio">
              <Icon icon={Send} size={18} />
            </button>
          </div>
          {question.length >= 1800 && <p className="input-counter">{question.length.toLocaleString()} / 2,000</p>}
          <p className="privacy-note">AI-generated answers · Don&apos;t share secrets · Messages are sent to DeepSeek</p>
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
      </section>

      <section className="facts-strip" aria-label="Quick facts">
        <div className="fact-item"><MapPin aria-hidden="true" size={17} /><span>China · UTC+8</span></div>
        <div className="fact-item"><Clock3 aria-hidden="true" size={17} /><span>30+ hrs/week</span></div>
        <div className="fact-item"><BriefcaseBusiness aria-hidden="true" size={17} /><span>Contract-to-hire welcome</span></div>
      </section>

      <section className="projects-section" aria-labelledby="projects-heading">
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">Selected work</p>
            <h2 id="projects-heading">Projects that show the whole delivery loop</h2>
          </div>
          <button type="button" className="text-action" onClick={() => onAction("projects")}>
            Ask about the projects <ExternalArrow />
          </button>
        </div>
        <div className="project-grid">
          {PROJECTS.map((project) => <ProjectCard key={project.id} project={project} assetBase={assetBase} />)}
        </div>
        <button type="button" className="process-banner" onClick={() => onAction("process")}>
          <span className="process-icon"><Workflow aria-hidden="true" size={20} /></span>
          <span><strong>Ask About My Process</strong><small>From requirements and data to deployment and handoff</small></span>
          <ExternalArrow />
        </button>
      </section>

      <section className="contact-banner" aria-labelledby="contact-heading">
        <div>
          <p className="section-kicker">Ready when you are</p>
          <h2 id="contact-heading">Bring me the messy AI idea.</h2>
          <p>Share the use case, data shape, current stack, and workflow. We&apos;ll find the smallest useful first slice.</p>
        </div>
        <a className="upwork-button" href={UPWORK_URL} target="_blank" rel="noreferrer">
          Continue on Upwork <ExternalArrow />
        </a>
      </section>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Noah Wang</span>
        <div className="footer-links">
          <a href={`mailto:${EMAIL}`}><Mail aria-hidden="true" size={16} /> {EMAIL}</a>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer"><Github aria-hidden="true" size={16} /> @noahacgn</a>
        </div>
      </footer>
    </main>
  );
}

function ChatView({ data, onAction, onHome, onAbout, assetBase, setTriggerValue }) {
  const [question, setQuestion] = useState("");
  const [localMessages, setLocalMessages] = useState([]);
  const [localNotice, setLocalNotice] = useState("");
  const [localPending, setLocalPending] = useState(false);
  const endRef = useRef(null);
  const serverMessages = Array.isArray(data?.messages) ? data.messages : [];
  const messages = useMemo(() => [...serverMessages, ...localMessages], [serverMessages, localMessages]);

  useEffect(() => {
    setLocalMessages([]);
    setLocalNotice("");
    if (!data?.pending) setLocalPending(false);
  }, [data?.messageRevision, data?.view, data?.error, data?.pending]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [messages.length, data?.pending]);

  useEffect(() => {
    if (!data?.pending) return undefined;
    const timer = window.setInterval(() => {
      setTriggerValue?.("heartbeat", Date.now());
    }, 160);
    return () => window.clearInterval(timer);
  }, [data?.pending, setTriggerValue]);

  function submit(event) {
    event.preventDefault();
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
        <button className="brand-button" type="button" onClick={onHome}>
          <ArrowLeft aria-hidden="true" size={18} />
          <span className="brand-mark">NW</span>
          <span>Noah Wang</span>
        </button>
        <div className="chat-header-center"><span className="online-dot" /> AI Portfolio chat</div>
        <button className="header-link about-chat" type="button" onClick={onAbout}>About</button>
      </header>
      <section className="chat-content" aria-labelledby="chat-heading">
        <div className="chat-intro">
          <Avatar small assetBase={assetBase} />
          <div><p className="eyebrow">AI Portfolio</p><h1 id="chat-heading">Ask me about Noah&apos;s work</h1><p>I&apos;m an AI-generated portfolio, here to make the useful parts easy to explore.</p></div>
        </div>
        <div className="message-list" aria-live="polite">
          {messages.length === 0 && <div className="assistant-message"><Avatar small assetBase={assetBase} /><div className="message-bubble"><MessageText>Hi — I can give you a concise tour of Noah&apos;s projects, skills, experience, or process. What are you building?</MessageText></div></div>}
          {messages.map((message, index) => (
            <div key={`${message.role}-${index}-${message.content?.slice(0, 10)}`} className={message.role === "user" ? "user-message" : "assistant-message"}>
              {message.role !== "user" && <Avatar small assetBase={assetBase} />}
              <div className="message-bubble"><MessageText>{message.content}</MessageText>{message.role !== "user" && data?.showUpwork && <a className="message-cta" href={UPWORK_URL} target="_blank" rel="noreferrer">Continue on Upwork <ExternalArrow /></a>}</div>
            </div>
          ))}
          {data?.streamingText && <div className="assistant-message"><Avatar small assetBase={assetBase} /><div className="message-bubble streaming-bubble"><MessageText>{data.streamingText}</MessageText><span className="streaming-caret" aria-label="Generating" /></div></div>}
          {(data?.pending || localPending) && !data?.streamingText && <div className="assistant-message"><Avatar small assetBase={assetBase} /><div className="message-bubble typing-bubble"><span className="typing-label">Thinking with DeepSeek</span><span className="typing-dots" aria-label="Generating"><i /><i /><i /></span></div></div>}
          {data?.error && <div className="assistant-message"><Avatar small assetBase={assetBase} /><div className="message-bubble error-bubble"><MessageText>{data.error}</MessageText><button className="inline-action" type="button" onClick={onHome}>Browse the static portfolio <ExternalArrow /></button></div></div>}
          {localNotice && <p className="input-notice" role="alert">{localNotice}</p>}
          <div ref={endRef} />
        </div>
      </section>
      <form className="question-form chat-question" onSubmit={submit}>
        <label htmlFor="chat-question">Ask the AI Portfolio</label>
        <div className="question-input-row">
          <input id="chat-question" value={question} maxLength={2000} onChange={(event) => setQuestion(event.target.value)} placeholder="Ask a follow-up…" autoComplete="off" />
          <button type="submit" className="send-button" aria-label="Send question"><Icon icon={Send} size={18} /></button>
        </div>
        {question.length >= 1800 && <p className="input-counter">{question.length.toLocaleString()} / 2,000</p>}
        <p className="privacy-note">AI-generated · Don&apos;t share secrets · Final scope and terms are confirmed by Noah on Upwork</p>
      </form>
      <footer className="chat-footer"><a href={GITHUB_URL} target="_blank" rel="noreferrer">@noahacgn <ExternalArrow /></a><a className="chat-upwork-link" href={UPWORK_URL} target="_blank" rel="noreferrer">Continue on Upwork <ExternalArrow /></a></footer>
    </main>
  );
}

function AboutModal({ onClose, returnFocusRef }) {
  const closeRef = useRef(null);

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
        <p className="section-kicker">A small note on this site</p>
        <h2 id="about-title">This is an AI Portfolio, not Noah.</h2>
        <p>It uses a hand-curated set of Noah&apos;s public portfolio facts and DeepSeek to generate a conversational introduction. It does not read private resumes, browse a hidden knowledge base, or make commitments on Noah&apos;s behalf.</p>
        <div className="modal-boundary"><ShieldCheck size={18} /><span>Use it to get oriented; confirm scope, timing, rate, and terms with Noah on Upwork.</span></div>
        <a className="upwork-button modal-action" href={UPWORK_URL} target="_blank" rel="noreferrer">Open Noah&apos;s Upwork profile <ExternalArrow /></a>
      </section>
    </div>
  );
}

export function App({ data = {}, setStateValue, setTriggerValue, assetBase = "./assets/" }) {
  void setStateValue;
  const [view, setView] = useState(data.view || "home");
  const [aboutOpen, setAboutOpen] = useState(false);
  const aboutReturnRef = useRef(null);

  useEffect(() => {
    setView(data.view || "home");
  }, [data.view]);

  function emitAction(type, value = null) {
    if (type === "home") {
      setView("home");
      setTriggerValue?.("reset", true);
      return;
    }
    setView("chat");
    setTriggerValue?.("action", { type, value });
  }

  function submitQuestion(value) {
    setView("chat");
    setTriggerValue?.("submit", { query: value });
  }

  function openAbout(event) {
    aboutReturnRef.current = event?.currentTarget || null;
    setAboutOpen(true);
  }

  return (
    <div className="app-root">
      {view === "chat" ? (
        <ChatView data={data} assetBase={assetBase} setTriggerValue={setTriggerValue} onAction={emitAction} onHome={() => emitAction("home")} onAbout={openAbout} />
      ) : (
        <HomeView assetBase={assetBase} onAction={emitAction} onAbout={openAbout} onOpenChat={submitQuestion} />
      )}
      {aboutOpen && <AboutModal returnFocusRef={aboutReturnRef} onClose={() => setAboutOpen(false)} />}
    </div>
  );
}

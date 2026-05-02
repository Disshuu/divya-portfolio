"use client";
import { useEffect, useRef } from "react";

const projects = [
  {
    id: "01",
    title: "RAG-Based Document QA System",
    tagline: "Ask anything. Get answers from your own documents.",
    description:
      "Production-ready retrieval-augmented generation pipeline that ingests PDF and TXT files, embeds content using Sentence Transformers, and serves accurate, source-grounded answers via a FastAPI backend. Supports multi-document querying with sub-second response times.",
    tags: ["Python", "FastAPI", "FAISS", "Sentence Transformers", "RAG"],
    metrics: ["<1s query latency", "Multi-doc support", "REST API"],
    github: "https://github.com/Disshuu",
    period: "Jan 2026 – Mar 2026",
    featured: true,
    accent: "#00e5a0",
  },
  {
    id: "02",
    title: "SIGNOVA — Sign Language AI",
    tagline: "Breaking communication barriers with computer vision.",
    description:
      "End-to-end sign language recognition system built from scratch — including a custom dataset of 3,000+ hand gesture images across 12 classes. CNN model achieves ~86% accuracy with active research into LSTM-based sequence recognition for full-sentence translation.",
    tags: ["Deep Learning", "CNN", "LSTM", "Computer Vision", "NLP"],
    metrics: ["~86% accuracy", "12 gesture classes", "3,000+ images"],
    github: "https://github.com/Disshuu",
    period: "Jul 2025 – Oct 2025",
    featured: true,
    accent: "#00aaff",
  },
  {
    id: "03",
    title: "Image Classification API",
    tagline: "Full-stack deep learning, from model to browser.",
    description:
      "CNN-powered binary image classifier deployed as a complete web application. Flask REST API handles inference requests from a React.js frontend, delivering real-time predictions with a clean user interface — a full ML-to-production pipeline.",
    tags: ["CNN", "Flask", "React.js", "Python", "REST API"],
    metrics: ["Real-time inference", "Full-stack", "Production deploy"],
    github: "https://github.com/Disshuu",
    period: "Dec 2024 – May 2025",
    featured: false,
    accent: "#a78bfa",
  },
];

export default function Projects() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} className="py-28 px-6 bg-surface/40">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="num-badge reveal delay-100 mb-3">02 — PROJECTS</p>
          <h2 className="font-display text-4xl font-bold reveal delay-200">
            Featured Work
          </h2>
          <p className="text-muted mt-3 max-w-xl reveal delay-300">
            End-to-end AI systems — from dataset creation to deployed APIs.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className={`project-card reveal delay-${(i + 2) * 100} bg-surface border border-border rounded-2xl p-7 sm:p-8`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Left */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="font-mono text-xs font-bold px-2 py-0.5 rounded"
                      style={{
                        color: p.accent,
                        background: `${p.accent}15`,
                        border: `1px solid ${p.accent}30`,
                      }}
                    >
                      {p.id}
                    </span>
                    {p.featured && (
                      <span className="text-xs font-mono text-accent/60 border border-accent/20 px-2 py-0.5 rounded">
                        FEATURED
                      </span>
                    )}
                    <span className="text-xs text-muted ml-auto font-mono">{p.period}</span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-text mb-1">
                    {p.title}
                  </h3>
                  <p className="text-sm mb-3" style={{ color: p.accent }}>
                    {p.tagline}
                  </p>
                  <p className="text-muted text-sm leading-relaxed mb-4">
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Right: metrics + link */}
                <div className="lg:w-48 flex flex-col gap-3">
                  <div className="bg-bg/60 border border-border rounded-xl p-4 space-y-2">
                    {p.metrics.map((m) => (
                      <div key={m} className="flex items-center gap-2">
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: p.accent }}
                        />
                        <span className="text-xs text-muted font-mono">{m}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-xs justify-center"
                  >
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <p className="num-badge reveal delay-100 mb-3">01 — ABOUT</p>
            <h2 className="font-display text-4xl font-bold mb-6 reveal delay-200">
              Building at the intersection of{" "}
              <span className="text-accent">AI & engineering.</span>
            </h2>
            <div className="space-y-4 text-muted leading-relaxed reveal delay-300">
              <p>
                I'm a final-year B.Tech Data Science student at IES IPS Academy, Indore, with a track record of
                translating machine learning research into production software. My work spans deep learning model
                development, REST API design, and end-to-end AI system deployment.
              </p>
              <p>
                I've shipped projects across computer vision, natural language processing, and retrieval-augmented
                generation — always with a focus on reliability and real-world impact over academic benchmarks.
              </p>
              <p>
                Outside code, I'm passionate about making AI accessible. I believe the best models are the ones
                people can actually use.
              </p>
            </div>
            <div className="mt-8 flex gap-4 reveal delay-400">
              <a
                href="https://github.com/Disshuu"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                GitHub Profile →
              </a>
            </div>
          </div>

          {/* Right: cert / fact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 reveal delay-300">
            {[
              {
                icon: "🏅",
                title: "Oracle AI Vector Search",
                sub: "Certified Professional · 2025",
              },
              {
                icon: "🏅",
                title: "Oracle Data Science",
                sub: "Certified Professional · 2025",
              },
              {
                icon: "📊",
                title: "Tata Data Visualisation",
                sub: "Forage Job Simulation",
              },
              {
                icon: "📈",
                title: "Accenture Analytics",
                sub: "Data Analytics & Visualization",
              },
              {
                icon: "🐍",
                title: "Python Web Developer",
                sub: "Finishing School Program",
              },
              {
                icon: "🎓",
                title: "CGPA 8.70",
                sub: "B.Tech Data Science · IES IPS",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-surface border border-border rounded-xl p-4 hover:border-accent/30 transition-all duration-300 hover:bg-surface/80"
              >
                <div className="text-2xl mb-2">{card.icon}</div>
                <div className="text-sm font-medium text-text">{card.title}</div>
                <div className="text-xs text-muted mt-0.5">{card.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

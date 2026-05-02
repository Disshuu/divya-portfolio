"use client";
import { useEffect, useRef } from "react";

const experiences = [
  {
    role: "AI Intern — Green Skills Program",
    company: "Edunet Foundation (AICTE–Shell)",
    period: "Jun 2025 – Jul 2025",
    type: "Internship",
    bullets: [
      "Preprocessed and analyzed real-world datasets using Pandas and NumPy, improving data pipeline quality for downstream ML models.",
      "Implemented and benchmarked multiple Scikit-learn classifiers, selecting optimal models based on evaluation metrics.",
      "Optimized Python codebases through targeted debugging and performance tuning, reducing runtime by measurable margins.",
      "Collaborated cross-functionally in an agile team to iteratively improve ML solutions against business requirements.",
    ],
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "ML"],
    accent: "#00e5a0",
  },
  {
    role: "Data Science & ML Trainee",
    company: "YBI Foundation",
    period: "May 2024 – Jun 2024",
    type: "Training",
    bullets: [
      "Completed intensive hands-on training in supervised and unsupervised ML techniques.",
      "Built and evaluated predictive models on structured datasets, applying feature engineering and cross-validation.",
      "Developed foundational skills in data wrangling, visualization, and model deployment.",
    ],
    tags: ["Machine Learning", "Python", "Data Analysis", "Model Evaluation"],
    accent: "#00aaff",
  },
];

export default function Experience() {
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
    <section id="experience" ref={ref} className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="num-badge reveal delay-100 mb-3">03 — EXPERIENCE</p>
          <h2 className="font-display text-4xl font-bold reveal delay-200">
            Work History
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden sm:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div
                key={exp.role}
                className={`reveal delay-${(i + 2) * 100} relative sm:pl-16`}
              >
                {/* Dot */}
                <div
                  className="absolute left-4 top-1 w-4 h-4 rounded-full border-2 hidden sm:block"
                  style={{
                    borderColor: exp.accent,
                    background: "#090c10",
                    boxShadow: `0 0 12px ${exp.accent}40`,
                  }}
                />

                <div className="bg-surface border border-border rounded-2xl p-6 sm:p-8 hover:border-accent/20 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-lg text-text">{exp.role}</h3>
                      <p className="text-sm mt-0.5" style={{ color: exp.accent }}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-muted border border-border px-3 py-1 rounded-full">
                        {exp.type}
                      </span>
                      <span className="text-xs font-mono text-muted">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-muted leading-relaxed">
                        <div
                          className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                          style={{ background: exp.accent }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

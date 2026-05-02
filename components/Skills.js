"use client";
import { useEffect, useRef, useState } from "react";

const skillGroups = [
  {
    group: "AI / ML",
    color: "#00e5a0",
    skills: [
      { name: "Python", level: 95 },
      { name: "Deep Learning (CNN / LSTM)", level: 85 },
      { name: "NLP & Transformers", level: 80 },
      { name: "Machine Learning", level: 88 },
      { name: "RAG Systems", level: 82 },
      { name: "Computer Vision", level: 80 },
    ],
  },
  {
    group: "Frameworks & Libraries",
    color: "#00aaff",
    skills: [
      { name: "TensorFlow / Keras", level: 82 },
      { name: "Scikit-learn", level: 90 },
      { name: "Pandas / NumPy", level: 92 },
      { name: "FAISS", level: 78 },
      { name: "Sentence Transformers", level: 80 },
      { name: "Matplotlib", level: 85 },
    ],
  },
  {
    group: "Backend & Infra",
    color: "#a78bfa",
    skills: [
      { name: "FastAPI", level: 83 },
      { name: "Flask", level: 85 },
      { name: "REST API Design", level: 85 },
      { name: "SQL", level: 78 },
      { name: "Git", level: 88 },
      { name: "Streamlit", level: 80 },
    ],
  },
  {
    group: "Frontend",
    color: "#f59e0b",
    skills: [
      { name: "React.js", level: 72 },
      { name: "HTML / CSS", level: 80 },
    ],
  },
];

function SkillBar({ name, level, color, animate }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-muted group-hover:text-text transition-colors">{name}</span>
        <span className="text-xs font-mono" style={{ color }}>
          {level}%
        </span>
      </div>
      <div className="skill-bar-bg">
        <div
          className="skill-bar-fill"
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}99)`,
            transform: animate ? `scaleX(${level / 100})` : "scaleX(0)",
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            setAnimate(true);
          }
        });
      },
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const coreTools = [
    "Python", "TensorFlow", "PyTorch", "FastAPI", "FAISS",
    "Scikit-learn", "React", "Flask", "Pandas", "NumPy",
    "Sentence Transformers", "Streamlit", "Git", "Postman",
    "Google Colab", "SQL", "Keras", "Matplotlib",
  ];

  return (
    <section id="skills" ref={ref} className="py-28 px-6 bg-surface/40">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="num-badge reveal delay-100 mb-3">04 — SKILLS</p>
          <h2 className="font-display text-4xl font-bold reveal delay-200">
            Technical Arsenal
          </h2>
          <p className="text-muted mt-3 max-w-xl reveal delay-300">
            Hands-on proficiency across the full ML lifecycle — from raw data to deployed inference.
          </p>
        </div>

        {/* Skill bars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {skillGroups.map((group, gi) => (
            <div key={group.group} className={`reveal delay-${(gi + 2) * 100}`}>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-2 rounded-full" style={{ background: group.color }} />
                <h3 className="text-sm font-mono font-medium tracking-wider text-muted uppercase">
                  {group.group}
                </h3>
              </div>
              <div className="space-y-4">
                {group.skills.map((s) => (
                  <SkillBar
                    key={s.name}
                    name={s.name}
                    level={s.level}
                    color={group.color}
                    animate={animate}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tag cloud */}
        <div className="reveal delay-200">
          <p className="text-xs font-mono text-muted mb-4 uppercase tracking-wider">All Tools & Technologies</p>
          <div className="flex flex-wrap gap-2">
            {coreTools.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display font-bold text-text">
          DR<span className="text-accent">.</span>
        </span>
        <p className="text-xs text-muted font-mono">
          © 2026 Divya Ramnani — Built with Next.js & Tailwind CSS
        </p>
        <p className="text-xs text-muted font-mono">
          Indore, Madhya Pradesh, India
        </p>
      </div>
    </footer>
  );
}

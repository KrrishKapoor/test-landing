import { ArrowUpRight } from 'lucide-react';

export function Nav() {
  return (
    <nav className="nav" aria-label="Primary">
      <div className="shell nav-inner">
        <a className="nav-logo" href="#top" aria-label="Krrish Kapoor home">
          <span className="mark" aria-hidden="true">
            K
          </span>
          <span>Krrish Kapoor</span>
        </a>
        <div className="nav-links" role="list">
          <a href="#roles">Roles</a>
          <a href="#architecture">Architecture</a>
          <a href="#work">Work</a>
          <a href="#stack">Stack</a>
          <a href="#process">Process</a>
        </div>
        <a className="nav-cta" href="#contact">
          Get in touch
          <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
        </a>
      </div>
    </nav>
  );
}

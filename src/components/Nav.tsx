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
          <a href="#roles">01 · Roles</a>
          <a href="#architecture">02 · Systems</a>
          <a href="#work">03 · Work</a>
          <a href="#stack">04 · Stack</a>
          <a href="#process">05 · Process</a>
        </div>
        <a className="nav-cta" href="#contact">
          Get in touch
          <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
        </a>
      </div>
    </nav>
  );
}

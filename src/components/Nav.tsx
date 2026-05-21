import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

type Item = { num: string; href: string; label: string };

const items: Item[] = [
  { num: '00', href: '#top', label: 'Overview' },
  { num: '01', href: '#capabilities', label: 'Capabilities' },
  { num: '02', href: '#architecture', label: 'Architecture' },
  { num: '03', href: '#work', label: 'Selected work' },
  { num: '04', href: '#stack', label: 'Toolchain' },
  { num: '05', href: '#process', label: 'Process' },
  { num: '06', href: '#contact', label: 'Contact' },
];

export function Nav() {
  const [active, setActive] = useState<string>('top');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const ids = items.map((i) => i.href.slice(1));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (els.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <aside className="rail" aria-label="Primary navigation">
      <div className="rail-id">
        <div className="avatar" aria-hidden="true">K</div>
        <div>
          <div className="name">Krrish Kapoor</div>
          <div className="role">Data · AI · Agents</div>
        </div>
      </div>

      <div>
        <div className="rail-section">Index</div>
        <div className="rail-list" role="list">
          {items.map((it) => {
            const id = it.href.slice(1);
            const isActive = id === active;
            return (
              <a
                key={it.href}
                href={it.href}
                className={isActive ? 'is-active' : ''}
                aria-current={isActive ? 'true' : undefined}
              >
                <span className="num">{it.num}</span>
                <span>{it.label}</span>
              </a>
            );
          })}
        </div>
      </div>

      <a className="rail-cta" href="#contact">
        <span>Start a project</span>
        <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
      </a>

      <div className="rail-meta" aria-label="Status">
        <div className="row">
          <span>status</span>
          <span className="v">available</span>
        </div>
        <div className="row">
          <span>base</span>
          <span className="v">Toronto / EDT</span>
        </div>
        <div className="row">
          <span>focus</span>
          <span className="v">agents · evals</span>
        </div>
      </div>
    </aside>
  );
}

type Stat = { l: string; v: string };

type Project = {
  badge: string;
  year: string;
  title: string;
  desc: string;
  stats: Stat[];
  visual: 'bars' | 'lines' | 'flow';
};

const projects: Project[] = [
  {
    badge: 'Fintech · Agents',
    year: '2025',
    title: 'Underwriting copilot for a Toronto lender',
    desc:
      'A supervised multi-agent assistant that pulls bureau data, runs scenario analysis, and drafts memos with citations — slotted into an existing credit workflow without re-platforming.',
    stats: [
      { l: 'Time saved', v: '4.2h/file' },
      { l: 'Cite accuracy', v: '98%' },
      { l: 'Rollout', v: '7 weeks' },
    ],
    visual: 'flow',
  },
  {
    badge: 'Data Platform',
    year: '2024',
    title: 'Event-driven warehouse rebuild',
    desc:
      'Replaced a brittle nightly ETL with a Kafka → dbt → Snowflake pipeline. Lineage, tests, and SLAs baked in from day one — analysts trusted the numbers again.',
    stats: [
      { l: 'Freshness', v: '60s' },
      { l: 'Cost', v: '−47%' },
      { l: 'Models', v: '184' },
    ],
    visual: 'bars',
  },
  {
    badge: 'AI Infra · RAG',
    year: '2025',
    title: 'Retrieval evals as a first-class service',
    desc:
      'Built an eval harness that scores retrieval, grounding, and answer quality on every PR. Regressions get caught before they ship, not after a user reports them.',
    stats: [
      { l: 'Eval runs', v: '12k+' },
      { l: 'p95', v: '1.4s' },
      { l: 'CI gates', v: '6' },
    ],
    visual: 'lines',
  },
];

function Bars() {
  const heights = [42, 78, 55, 90, 64, 82, 48, 70, 95];
  return (
    <div className="viz-bars" aria-hidden="true">
      {heights.map((h, i) => (
        <span
          key={i}
          style={{ height: `${h}%`, animationDelay: `${i * 0.12}s` }}
        />
      ))}
    </div>
  );
}

function Lines() {
  return (
    <div className="viz-lines" aria-hidden="true">
      <svg viewBox="0 0 240 140" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(34,211,238,0.6)" />
            <stop offset="100%" stopColor="rgba(34,211,238,0)" />
          </linearGradient>
        </defs>
        <path
          d="M0 110 L30 92 L60 100 L90 70 L120 80 L150 50 L180 60 L210 30 L240 38 L240 140 L0 140 Z"
          fill="url(#lineGrad)"
        />
        <path
          d="M0 110 L30 92 L60 100 L90 70 L120 80 L150 50 L180 60 L210 30 L240 38"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="1.6"
        />
        <path
          d="M0 124 L30 118 L60 108 L90 112 L120 96 L150 92 L180 82 L210 78 L240 68"
          fill="none"
          stroke="#a3e635"
          strokeWidth="1.4"
          strokeDasharray="3 4"
          opacity="0.7"
        />
      </svg>
    </div>
  );
}

function FlowViz() {
  return (
    <div className="viz-flow" aria-hidden="true">
      <svg viewBox="0 0 240 140">
        <g
          stroke="rgba(255,255,255,0.16)"
          strokeDasharray="3 4"
          strokeWidth="1"
          fill="none"
        >
          <path d="M40 70 C 80 70, 100 30, 140 30" />
          <path d="M40 70 C 80 70, 100 70, 140 70" />
          <path d="M40 70 C 80 70, 100 110, 140 110" />
          <path d="M140 30 C 170 30, 180 70, 210 70" />
          <path d="M140 70 L 210 70" />
          <path d="M140 110 C 170 110, 180 70, 210 70" />
        </g>
        <g fill="rgba(15,18,25,0.95)" stroke="rgba(255,255,255,0.18)">
          <rect x="20" y="58" width="40" height="24" rx="5" />
          <rect x="120" y="18" width="40" height="24" rx="5" />
          <rect x="120" y="58" width="40" height="24" rx="5" />
          <rect x="120" y="98" width="40" height="24" rx="5" />
          <rect x="190" y="58" width="40" height="24" rx="5" />
        </g>
        <g fill="#22d3ee">
          <circle r="2.5">
            <animateMotion
              dur="3s"
              repeatCount="indefinite"
              path="M40 70 C 80 70, 100 30, 140 30 C 170 30, 180 70, 210 70"
            />
          </circle>
          <circle r="2.5">
            <animateMotion
              dur="2.6s"
              repeatCount="indefinite"
              begin="0.5s"
              path="M40 70 C 80 70, 100 110, 140 110 C 170 110, 180 70, 210 70"
            />
          </circle>
        </g>
      </svg>
    </div>
  );
}

function visualFor(v: Project['visual']) {
  if (v === 'bars') return <Bars />;
  if (v === 'lines') return <Lines />;
  return <FlowViz />;
}

export function Projects() {
  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="shell">
        <div className="section-head">
          <span className="eyebrow">03 — Selected work</span>
          <h2 id="work-title">Proof, not pitch decks.</h2>
          <p>
            A few engagements that capture the way I work — outcomes you can
            measure and systems other engineers can keep running after I leave.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="project-card"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="project-card-top">
                <span className="badge">{p.badge}</span>
                <span className="yr">{p.year}</span>
              </div>
              <div className="project-visual">{visualFor(p.visual)}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="project-stats" aria-label="Key results">
                {p.stats.map((s) => (
                  <div key={s.l}>
                    <span className="pl">{s.l}</span>
                    <span className="pv">{s.v}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

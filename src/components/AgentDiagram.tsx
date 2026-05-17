import { motion } from 'framer-motion';

type Node = {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  sub: string;
};

const nodes: Node[] = [
  { id: 'in', x: 30, y: 200, w: 150, h: 64, label: 'User Intent', sub: 'NL · API · Event' },
  { id: 'router', x: 240, y: 200, w: 170, h: 64, label: 'Supervisor', sub: 'Plan · Route · Cite' },
  { id: 'tool-sql', x: 470, y: 60, w: 150, h: 56, label: 'SQL Tool', sub: 'Warehouse' },
  { id: 'tool-vec', x: 470, y: 150, w: 150, h: 56, label: 'Retrieval', sub: 'Vectors · BM25' },
  { id: 'tool-web', x: 470, y: 240, w: 150, h: 56, label: 'Web · API', sub: 'Live data' },
  { id: 'tool-code', x: 470, y: 330, w: 150, h: 56, label: 'Code Runtime', sub: 'Sandbox' },
  { id: 'agent-a', x: 680, y: 110, w: 160, h: 56, label: 'Analyst Agent', sub: 'Insights' },
  { id: 'agent-b', x: 680, y: 200, w: 160, h: 56, label: 'Eng Agent', sub: 'Pipelines' },
  { id: 'agent-c', x: 680, y: 290, w: 160, h: 56, label: 'Ops Agent', sub: 'Actions' },
  { id: 'obs', x: 900, y: 200, w: 150, h: 64, label: 'Output', sub: 'Trace · Eval · Cite' },
];

const center = (n: Node) => ({ x: n.x + n.w / 2, y: n.y + n.h / 2 });
const right = (n: Node) => ({ x: n.x + n.w, y: n.y + n.h / 2 });
const left = (n: Node) => ({ x: n.x, y: n.y + n.h / 2 });

const N = Object.fromEntries(nodes.map((n) => [n.id, n])) as Record<string, Node>;

function curve(a: { x: number; y: number }, b: { x: number; y: number }) {
  const dx = (b.x - a.x) * 0.5;
  return `M ${a.x} ${a.y} C ${a.x + dx} ${a.y}, ${b.x - dx} ${b.y}, ${b.x} ${b.y}`;
}

const paths = [
  { id: 'p1', d: curve(right(N.in), left(N.router)) },
  { id: 'p2', d: curve(right(N.router), left(N['tool-sql'])) },
  { id: 'p3', d: curve(right(N.router), left(N['tool-vec'])) },
  { id: 'p4', d: curve(right(N.router), left(N['tool-web'])) },
  { id: 'p5', d: curve(right(N.router), left(N['tool-code'])) },
  { id: 'p6', d: curve(right(N['tool-sql']), left(N['agent-a'])) },
  { id: 'p7', d: curve(right(N['tool-vec']), left(N['agent-a'])) },
  { id: 'p8', d: curve(right(N['tool-vec']), left(N['agent-b'])) },
  { id: 'p9', d: curve(right(N['tool-web']), left(N['agent-b'])) },
  { id: 'p10', d: curve(right(N['tool-code']), left(N['agent-c'])) },
  { id: 'p11', d: curve(right(N['agent-a']), left(N.obs)) },
  { id: 'p12', d: curve(right(N['agent-b']), left(N.obs)) },
  { id: 'p13', d: curve(right(N['agent-c']), left(N.obs)) },
];

export function AgentDiagram() {
  return (
    <section
      className="section"
      id="architecture"
      aria-labelledby="arch-title"
    >
      <div className="shell">
        <div className="section-head">
          <span className="eyebrow">02 — Systems</span>
          <h2 id="arch-title">Agent architectures, designed for production.</h2>
          <p>
            A reference of how I think about multi-agent systems: a planning
            supervisor, a typed tool layer, specialist agents with bounded
            authority, and an observability spine that makes every step
            inspectable.
          </p>
        </div>

        <div className="diagram-wrap">
          <div className="diagram-grid" aria-hidden="true" />

          <motion.svg
            className="diagram-svg"
            viewBox="0 0 1080 460"
            role="img"
            aria-label="Agent architecture: user intent flows through a supervisor, into typed tools and specialist agents, then to an observed output layer."
            initial="show"
            animate="show"
          >
            <defs>
              <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(34,211,238,0.18)" />
                <stop offset="100%" stopColor="rgba(34,211,238,0)" />
              </radialGradient>
              <linearGradient id="supGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="rgba(34,211,238,0.18)" />
                <stop offset="100%" stopColor="rgba(163,230,53,0.12)" />
              </linearGradient>
            </defs>

            {paths.map((p, i) => (
              <g key={p.id}>
                <path className="diagram-path" d={p.d} />
                <circle r="3" className="diagram-flow">
                  <animateMotion
                    dur={`${2.6 + (i % 4) * 0.4}s`}
                    repeatCount="indefinite"
                    begin={`${(i * 0.18).toFixed(2)}s`}
                    path={p.d}
                  />
                </circle>
              </g>
            ))}

            {nodes.map((n) => {
              const c = center(n);
              const isSup = n.id === 'router';
              return (
                <g key={n.id}>
                  <rect
                    x={n.x}
                    y={n.y}
                    width={n.w}
                    height={n.h}
                    rx="10"
                    className={isSup ? 'diagram-node diagram-node--sup' : 'diagram-node'}
                    fill={isSup ? 'url(#supGrad)' : undefined}
                  />
                  <text
                    className="diagram-node-label"
                    x={c.x}
                    y={c.y - 4}
                    textAnchor="middle"
                  >
                    {n.label}
                  </text>
                  <text
                    className="diagram-node-sub"
                    x={c.x}
                    y={c.y + 13}
                    textAnchor="middle"
                  >
                    {n.sub}
                  </text>
                </g>
              );
            })}
          </motion.svg>

          <div className="diagram-legend" aria-hidden="true">
            <span>
              <i style={{ background: '#22d3ee' }} /> Data flow
            </span>
            <span>
              <i
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(34,211,238,0.55)',
                }}
              />{' '}
              Supervisor
            </span>
            <span>
              <i style={{ background: 'rgba(255,255,255,0.12)' }} /> Tool / Agent
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

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
  { id: 'in', x: 30, y: 210, w: 150, h: 64, label: 'User Intent', sub: 'NL · API · Event' },
  { id: 'router', x: 240, y: 210, w: 170, h: 64, label: 'Supervisor', sub: 'Plan · Route · Cite' },
  { id: 'tool-sql', x: 470, y: 70, w: 150, h: 56, label: 'SQL Tool', sub: 'Warehouse' },
  { id: 'tool-vec', x: 470, y: 160, w: 150, h: 56, label: 'Retrieval', sub: 'Vectors · BM25' },
  { id: 'tool-web', x: 470, y: 250, w: 150, h: 56, label: 'Web · API', sub: 'Live data' },
  { id: 'tool-code', x: 470, y: 340, w: 150, h: 56, label: 'Code Runtime', sub: 'Sandbox' },
  { id: 'agent-a', x: 680, y: 120, w: 160, h: 56, label: 'Analyst Agent', sub: 'Insights' },
  { id: 'agent-b', x: 680, y: 210, w: 160, h: 56, label: 'Eng Agent', sub: 'Pipelines' },
  { id: 'agent-c', x: 680, y: 300, w: 160, h: 56, label: 'Ops Agent', sub: 'Actions' },
  { id: 'obs', x: 900, y: 210, w: 150, h: 64, label: 'Output', sub: 'Trace · Eval · Cite' },
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

const bands = [
  { label: 'Inputs', desc: 'NL · API · event, schema-validated before it routes.' },
  { label: 'Supervisor', desc: 'Plans, routes, retries. Owns the policy and budget.' },
  { label: 'Tools', desc: 'Typed contracts — SQL, retrieval, web, code.' },
  { label: 'Agents', desc: 'Specialists with bounded authority and memory scopes.' },
  { label: 'Output', desc: 'Cited, traced, evaluated. Every step inspectable.' },
];

export function AgentDiagram() {
  return (
    <section
      className="section section--flush"
      id="architecture"
      aria-labelledby="arch-title"
    >
      <div className="arch">
        <div className="arch-grid" aria-hidden="true" />

        <div className="sec-meta">
          <span className="num">02</span>
          <span>Architecture canvas</span>
          <span className="tag">/ reference shape · runtime path reads left → right</span>
        </div>

        <h2 id="arch-title" className="sec-title">
          A supervisor, a typed tool layer, agents with{' '}
          <em>bounded authority</em>, and an observability spine.
        </h2>
        <p className="sec-lede">
          The reference of how I think about multi-agent systems. Every node
          earns its place — the moving parts stay small, the boundaries stay
          explicit.
        </p>

        <div className="arch-bands" aria-label="Architecture bands" style={{ marginTop: 28 }}>
          {bands.map((b) => (
            <div className="arch-band" key={b.label}>
              <div className="lbl">{b.label}</div>
              <div className="body">{b.desc}</div>
            </div>
          ))}
        </div>

        <div className="arch-canvas">
          <motion.svg
            className="diagram-svg"
            viewBox="0 0 1080 480"
            role="img"
            aria-label="Agent architecture: user intent enters a supervisor, which routes to typed tools (SQL, retrieval, web, code), feeding specialist agents (analyst, engineering, ops), returning to a traced, evaluated, cited output."
            initial="show"
            animate="show"
          >
            <defs>
              <linearGradient id="supGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="rgba(251,146,60,0.18)" />
                <stop offset="100%" stopColor="rgba(34,211,238,0.12)" />
              </linearGradient>
            </defs>

            <text className="diagram-band" x="105" y="36" textAnchor="middle">
              Inputs
            </text>
            <text className="diagram-band" x="325" y="36" textAnchor="middle">
              Supervisor
            </text>
            <text className="diagram-band" x="545" y="36" textAnchor="middle">
              Tools
            </text>
            <text className="diagram-band" x="760" y="36" textAnchor="middle">
              Agents
            </text>
            <text className="diagram-band" x="975" y="36" textAnchor="middle">
              Output
            </text>

            {paths.map((p, i) => (
              <g key={p.id}>
                <path className="diagram-path" d={p.d} />
                <circle r="3" className="diagram-flow">
                  <animateMotion
                    dur={`${2.8 + (i % 4) * 0.4}s`}
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
                    y={c.y + 14}
                    textAnchor="middle"
                  >
                    {n.sub}
                  </text>
                </g>
              );
            })}
          </motion.svg>

          <div className="arch-legend" aria-hidden="true">
            <span>
              <i style={{ background: '#22d3ee' }} /> Data flow
            </span>
            <span>
              <i
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(251,146,60,0.55)',
                }}
              />{' '}
              Supervisor
            </span>
            <span>
              <i style={{ background: 'rgba(255,255,255,0.16)' }} /> Tool / agent
            </span>
          </div>
        </div>

        <p className="arch-caption">
          The supervisor is the only stateful planner — every other node is a
          typed, replaceable contract.
        </p>
      </div>
    </section>
  );
}

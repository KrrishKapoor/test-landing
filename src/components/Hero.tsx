import { motion } from 'framer-motion';
import { ArrowDownRight, Mail } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.2, 0.8, 0.2, 1] as const,
      delay: i * 0.06,
    },
  }),
};

const proof = [
  { lbl: 'Pipelines / month', val: '184', sub: 'dbt models live in production with tests & lineage.' },
  { lbl: 'p95 agent latency', val: '412ms', sub: 'across supervised LangGraph workflows on the edge.' },
  { lbl: 'Eval pass rate', val: <>94<em>/</em>96</>, sub: 'nightly retrieval + grounding regression suite.' },
  { lbl: 'Cost per 1k', val: '$0.18', sub: 'unit economics that survive a board review.' },
  { lbl: 'Years shipping', val: '6+', sub: 'data → AI → agents in fintech, ops, public sector.' },
];

const logLines: { ts: string; lvl: 'i' | 'w' | 'ok'; text: string }[] = [
  { ts: '14:02:11', lvl: 'i', text: 'supervisor.route → analyst_agent (sql, retrieval)' },
  { ts: '14:02:12', lvl: 'ok', text: 'tool.sql ok · 312ms · rows=4,218' },
  { ts: '14:02:13', lvl: 'ok', text: 'eval.grounding pass · score=0.94' },
  { ts: '14:02:13', lvl: 'w', text: 'cost.budget warn · 71% of daily cap' },
  { ts: '14:02:14', lvl: 'ok', text: 'trace.flushed → otel/langsmith' },
];

export function Hero() {
  return (
    <header className="hero" id="top">
      <motion.div
        className="hero-eyebrow"
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0}
      >
        <span className="seg">
          <span className="live-dot" aria-hidden="true" />
          Available · May 2026
        </span>
        <span className="seg">Toronto / remote</span>
        <span className="seg">Fractional · contract · full-time</span>
      </motion.div>

      <motion.h1
        className="hero-title"
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={1}
      >
        Production
        <em> systems </em>
        <span className="br" />
        for data, AI &amp;
        <em> agents.</em>
      </motion.h1>

      <div className="hero-split">
        <div className="hero-left">
          <motion.p
            className="hero-lede"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
          >
            I&rsquo;m Krrish — a data &amp; AI engineer in Toronto.{' '}
            <span className="dim">
              I build the durable infrastructure behind modern AI products:
              warehouse pipelines, retrieval and evals, multi-agent
              orchestration with tracing, recovery, and unit economics that
              hold up in production.
            </span>
          </motion.p>

          <motion.div
            className="hero-roles"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            aria-label="Roles"
          >
            <span className="role-chip">Data Analyst</span>
            <span className="role-chip">Data Engineer</span>
            <span className="role-chip">AI Engineer</span>
            <span className="role-chip">Agents Architect</span>
          </motion.div>

          <motion.div
            className="hero-actions"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
          >
            <a className="btn btn--primary" href="#work">
              See selected work
              <ArrowDownRight size={16} strokeWidth={2.2} aria-hidden="true" />
            </a>
            <a
              className="btn"
              href="mailto:krrishkapoor003@gmail.com"
              aria-label="Email Krrish"
            >
              <Mail size={16} strokeWidth={2} aria-hidden="true" />
              Email
            </a>
            <a
              className="btn"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
          </motion.div>
        </div>

        <motion.aside
          className="ops-panel"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.25,
            ease: [0.2, 0.8, 0.2, 1] as const,
          }}
          aria-label="Live operator console snapshot"
        >
          <div className="ops-head">
            <span className="left">
              <span className="dot-row" aria-hidden="true">
                <i style={{ background: '#f87171' }} />
                <i style={{ background: '#fbbf24' }} />
                <i style={{ background: '#a3e635' }} />
              </span>
              <span>agent_console &middot; prod</span>
            </span>
            <span className="right">
              <i aria-hidden="true" />
              streaming
            </span>
          </div>

          <div className="ops-body">
            <div>
              <span className="c">$</span> <span className="v">agent.status</span>{' '}
              <span className="c">--watch</span>
            </div>
            <div>
              <span className="k">orchestrator</span>={' '}
              <span className="v">"langgraph-supervisor-v3"</span>
            </div>
            <div>
              <span className="k">tools</span>={' '}
              <span className="v">[sql, vector, web, retrieval, code]</span>
            </div>
            <div>
              <span className="k">routing</span>={' '}
              <span className="a">deterministic + policy</span>
            </div>
            <div>
              <span className="k">trace</span>={' '}
              <span className="l">otel</span>{' '}
              <span className="c">// langsmith + grafana</span>
            </div>
          </div>

          <div className="ops-metrics">
            <div className="m">
              <div className="label">p95 latency</div>
              <div className="value">412ms</div>
              <div className="delta">↓ 38%</div>
            </div>
            <div className="m">
              <div className="label">grounded</div>
              <div className="value">92.7%</div>
              <div className="delta">↑ 4.1</div>
            </div>
            <div className="m">
              <div className="label">cost / 1k</div>
              <div className="value">$0.18</div>
              <div className="delta">↓ 55%</div>
            </div>
          </div>

          <div className="ops-log" aria-hidden="true">
            {logLines.map((l, i) => (
              <div key={i}>
                <span className="ts">{l.ts}</span>{' '}
                <span className={`lvl-${l.lvl}`}>
                  {l.lvl === 'i' ? 'info' : l.lvl === 'w' ? 'warn' : 'ok'}
                </span>{' '}
                {l.text}
              </div>
            ))}
          </div>
        </motion.aside>
      </div>

      {/* numeric proof strip */}
      <div className="proof-strip" aria-label="Track record">
        {proof.map((p) => (
          <div className="proof-cell" key={p.lbl}>
            <span className="lbl">{p.lbl}</span>
            <span className="val">{p.val}</span>
            <span className="sub">{p.sub}</span>
          </div>
        ))}
      </div>
    </header>
  );
}

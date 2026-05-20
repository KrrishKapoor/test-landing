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

const trustmarks = [
  'Fintech',
  'Operations',
  'Public sector',
  'AI platform',
  'Retail data',
  'Healthcare',
];

export function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="shell">
        <div className="hero-layout">
          <div>
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
              <span className="status-pill">
                <span className="status-dot" aria-hidden="true" />
                Available · Toronto / remote · May 2026
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}>
              Data, AI, and{' '}
              <span className="accent">agent architectures</span>
              <br />
              shipped to production.
            </motion.h1>

            <motion.p
              className="hero-sub"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
            >
              I&rsquo;m Krrish &mdash; a data and AI engineer in Toronto. I build the
              boring, durable systems behind modern AI products: warehouse
              pipelines, retrieval and evals, and multi-agent orchestration that
              survives users.
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
            className="hero-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease: [0.2, 0.8, 0.2, 1] as const,
            }}
            aria-label="Live system snapshot"
          >
            <div className="hero-card-head">
              <h3>system.snapshot</h3>
              <span className="tag">prod</span>
            </div>

            <div className="hero-card-body">
              <div>
                <span className="c">$</span> agent.status
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
                <span className="k">eval</span>={' '}
                <span className="s">passing 94/96</span>{' '}
                <span className="c">// nightly</span>
              </div>
              <div>
                <span className="k">deploy</span>={' '}
                <span className="v">cloudflare-workers</span>{' '}
                <span className="c">// edge</span>
              </div>
              <div>
                <span className="k">trace</span>={' '}
                <span className="l">otel</span>{' '}
                <span className="c">// langsmith + grafana</span>
              </div>
            </div>

            <div className="metric-row">
              <div className="metric">
                <div className="label">p95 latency</div>
                <div className="value">412 ms</div>
                <div className="delta">↓ 38%</div>
              </div>
              <div className="metric">
                <div className="label">grounded</div>
                <div className="value">92.7%</div>
                <div className="delta">↑ 4.1</div>
              </div>
              <div className="metric">
                <div className="label">cost / 1k</div>
                <div className="value">$0.18</div>
                <div className="delta">↓ 55%</div>
              </div>
            </div>
          </motion.aside>
        </div>

        <div className="trustmarks" aria-label="Industries shipped in">
          <span className="tm-label">Shipped in</span>
          <ul>
            {trustmarks.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

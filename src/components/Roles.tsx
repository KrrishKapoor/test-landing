import {
  BarChart3,
  Database,
  Sparkles,
  Network,
  type LucideIcon,
} from 'lucide-react';

type Role = {
  num: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  tags: string[];
  feat?: boolean;
};

const roles: Role[] = [
  {
    num: 'R.04',
    icon: Network,
    title: 'Agents Architect',
    desc: '',
    tags: ['LangGraph', 'MCP', 'Tool-use', 'Supervisors', 'Tracing', 'Recovery'],
    feat: true,
  },
  {
    num: 'R.01',
    icon: BarChart3,
    title: 'Data Analyst',
    desc:
      'SQL-first. Dashboards that drive action, experimentation that holds up to a second look.',
    tags: ['SQL', 'dbt', 'A/B testing'],
  },
  {
    num: 'R.02',
    icon: Database,
    title: 'Data Engineer',
    desc:
      'Production pipelines with tests, lineage, and SLAs you can call at 2am.',
    tags: ['Airflow', 'Snowflake', 'Kafka', 'Spark'],
  },
  {
    num: 'R.03',
    icon: Sparkles,
    title: 'AI Engineer',
    desc:
      'LLM features that survive real users. Retrieval, evals, guardrails, and the boring infra around them.',
    tags: ['Python', 'RAG', 'Evals', 'Vectors'],
  },
];

export function Roles() {
  return (
    <section
      className="section"
      id="capabilities"
      aria-labelledby="caps-title"
    >
      <div className="sec-meta">
        <span className="num">01</span>
        <span>Capabilities</span>
        <span className="tag">/ four roles · one feedback loop</span>
      </div>

      <h2 id="caps-title" className="sec-title">
        I move between layers <em>fluidly</em>, not into a single specialism.
      </h2>
      <p className="sec-lede">
        From the first SQL query to the last agent trace — the craft is the
        whole chain between data, models, and the systems that use them.
      </p>

      <div className="caps-bento" style={{ marginTop: 32 }}>
        {roles.map((r) => {
          const Icon = r.icon;
          return (
            <article
              className={r.feat ? 'cap cap--feat' : 'cap'}
              key={r.title}
              aria-labelledby={`cap-${r.num}`}
            >
              <div className="cap-tag">
                <span>
                  <span className="num">{r.num}</span> · {r.title.toLowerCase()}
                </span>
                {!r.feat && (
                  <span className="cap-icon" aria-hidden="true">
                    <Icon size={16} strokeWidth={1.8} />
                  </span>
                )}
              </div>
              {r.feat ? (
                <>
                  <h3 id={`cap-${r.num}`}>
                    Multi-agent systems with{' '}
                    <em>bounded authority</em>, tool-use, memory, supervisors.
                  </h3>
                  <p>
                    Deterministic where it matters, traceable end-to-end,
                    recoverable when it isn&rsquo;t.{' '}
                    <span className="dim">
                      I design the supervisor as the only stateful planner;
                      every other node is a typed, replaceable contract.
                      The result is a system other engineers can keep running
                      after I leave.
                    </span>
                  </p>
                </>
              ) : (
                <>
                  <h3 id={`cap-${r.num}`}>{r.title}</h3>
                  <p>{r.desc}</p>
                </>
              )}
              <div className="cap-tag-row" aria-label="Tools">
                {r.tags.map((t) => (
                  <span className="cap-tag-chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

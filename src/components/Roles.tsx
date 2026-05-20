import {
  BarChart3,
  Database,
  Sparkles,
  Network,
  type LucideIcon,
} from 'lucide-react';
import { useRef } from 'react';

type Role = {
  num: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  tags: string[];
};

const roles: Role[] = [
  {
    num: 'R.01',
    icon: BarChart3,
    title: 'Data Analyst',
    desc:
      'Turn messy operational data into decisions. SQL-first, dashboards that drive action, experimentation that holds up to a second look.',
    tags: ['SQL', 'dbt', 'Looker', 'A/B testing', 'Cohorts'],
  },
  {
    num: 'R.02',
    icon: Database,
    title: 'Data Engineer',
    desc:
      'Reliable ingestion, transformation, and warehouse modelling. Production pipelines with tests, lineage, and SLAs you can call at 2am.',
    tags: ['Airflow', 'Snowflake', 'BigQuery', 'Kafka', 'Spark'],
  },
  {
    num: 'R.03',
    icon: Sparkles,
    title: 'AI Engineer',
    desc:
      'LLM features that survive real users. Retrieval, evals, guardrails, and the unglamorous infrastructure that keeps unit economics sane.',
    tags: ['Python', 'PyTorch', 'RAG', 'Evals', 'Vector DBs'],
  },
  {
    num: 'R.04',
    icon: Network,
    title: 'Agents Architect',
    desc:
      'Multi-agent systems with tool-use, memory, and supervisors. Deterministic where it matters, traceable end-to-end, recoverable when it isn’t.',
    tags: ['LangGraph', 'MCP', 'Tool-use', 'Supervisors', 'Tracing'],
  },
];

function RoleCard({ role }: { role: Role }) {
  const ref = useRef<HTMLDivElement>(null);
  const Icon = role.icon;
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const mx = ((e.clientX - rect.left) / rect.width) * 100;
    const my = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty('--mx', `${mx}%`);
    el.style.setProperty('--my', `${my}%`);
  };

  return (
    <div ref={ref} className="role-card" onMouseMove={onMove}>
      <div className="role-card-num">{role.num}</div>
      <div className="role-icon" aria-hidden="true">
        <Icon size={20} strokeWidth={1.8} />
      </div>
      <h3>{role.title}</h3>
      <p>{role.desc}</p>
      <div className="role-tag-row" aria-label="Tools and skills">
        {role.tags.map((t) => (
          <span className="role-tag" key={t}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Roles() {
  return (
    <section className="section" id="roles" aria-labelledby="roles-title">
      <div className="shell">
        <div className="section-head">
          <span className="eyebrow">01 — Capabilities</span>
          <h2 id="roles-title">Four roles, one feedback loop.</h2>
          <p>
            From the first SQL query to the last agent trace — I cover the whole
            chain between data, models, and the systems that use them. The
            craft is moving fluidly between layers, not specializing into one.
          </p>
        </div>
        <div className="roles-grid">
          {roles.map((r) => (
            <RoleCard role={r} key={r.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

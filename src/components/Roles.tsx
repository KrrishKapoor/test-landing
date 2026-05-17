import { motion } from 'framer-motion';
import {
  BarChart3,
  Database,
  Sparkles,
  Network,
  type LucideIcon,
} from 'lucide-react';
import { useRef } from 'react';

type Role = {
  icon: LucideIcon;
  title: string;
  desc: string;
  tags: string[];
};

const roles: Role[] = [
  {
    icon: BarChart3,
    title: 'Data Analyst',
    desc:
      'Turn messy operational data into decisions. SQL-first, dashboards that drive action, experimentation that holds up.',
    tags: ['SQL', 'dbt', 'Looker', 'A/B testing', 'Cohorts'],
  },
  {
    icon: Database,
    title: 'Data Engineer',
    desc:
      'Reliable ingestion, transformation, and warehouse modelling. Production-grade pipelines with tests, lineage, and SLAs.',
    tags: ['Airflow', 'Snowflake', 'BigQuery', 'Kafka', 'Spark'],
  },
  {
    icon: Sparkles,
    title: 'AI Engineer',
    desc:
      'Ship LLM features that survive contact with users. Retrieval, evals, guardrails, and the unglamorous infra that keeps it cheap.',
    tags: ['Python', 'PyTorch', 'RAG', 'Evals', 'Vector DBs'],
  },
  {
    icon: Network,
    title: 'Agents Architect',
    desc:
      'Design multi-agent systems with tool-use, memory, and supervisors. Robust routing, deterministic where it matters, traceable end-to-end.',
    tags: ['LangGraph', 'MCP', 'Tool-use', 'Supervisors', 'Tracing'],
  },
];

function RoleCard({ role, i }: { role: Role; i: number }) {
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
    <motion.div
      ref={ref}
      className="role-card"
      onMouseMove={onMove}
      initial={{ y: 16 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5, delay: i * 0.06, ease: [0.2, 0.8, 0.2, 1] as const }}
    >
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
    </motion.div>
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
            craft is in moving fluidly between layers.
          </p>
        </div>
        <div className="roles-grid">
          {roles.map((r, i) => (
            <RoleCard role={r} i={i} key={r.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

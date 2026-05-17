import { motion } from 'framer-motion';

type Cat = { name: string; items: string[] };

const cats: Cat[] = [
  {
    name: 'Languages',
    items: ['Python', 'TypeScript', 'SQL', 'Go', 'Bash'],
  },
  {
    name: 'Data',
    items: ['dbt', 'Airflow', 'Kafka', 'Snowflake', 'BigQuery', 'DuckDB', 'Spark'],
  },
  {
    name: 'AI / Agents',
    items: [
      'LangGraph',
      'LangChain',
      'OpenAI',
      'Anthropic',
      'pgvector',
      'Pinecone',
      'MCP',
      'Evals',
    ],
  },
  {
    name: 'Platform',
    items: [
      'AWS',
      'GCP',
      'Cloudflare',
      'Docker',
      'Terraform',
      'GitHub Actions',
      'Postgres',
    ],
  },
];

export function Stack() {
  return (
    <section className="section" id="stack" aria-labelledby="stack-title">
      <div className="shell">
        <div className="section-head">
          <span className="eyebrow">04 — Stack</span>
          <h2 id="stack-title">The toolchain behind the work.</h2>
          <p>
            Tools are the means, not the brand. The list changes — the
            discipline doesn’t: small, well-tested pieces composed into
            systems that don’t surprise you at 2am.
          </p>
        </div>

        <div className="stack-categories">
          {cats.map((c, i) => (
            <motion.div
              className="stack-cat"
              key={c.name}
              initial={{ y: 14 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{
                duration: 0.45,
                delay: i * 0.05,
                ease: [0.2, 0.8, 0.2, 1] as const,
              }}
            >
              <div className="stack-cat-title">{c.name}</div>
              <div className="stack-chips">
                {c.items.map((t) => (
                  <span className="stack-chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

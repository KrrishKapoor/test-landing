type Tone = 'cyan' | 'signal' | 'lavender';
type Cat = { name: string; tone: Tone; items: string[] };

const cats: Cat[] = [
  {
    name: 'Languages',
    tone: 'cyan',
    items: ['Python', 'TypeScript', 'SQL', 'Go', 'Bash'],
  },
  {
    name: 'Data',
    tone: 'signal',
    items: ['dbt', 'Airflow', 'Kafka', 'Snowflake', 'BigQuery', 'DuckDB', 'Spark'],
  },
  {
    name: 'AI / Agents',
    tone: 'lavender',
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
    tone: 'cyan',
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
            discipline doesn’t: small, well-tested pieces composed into systems
            that don’t surprise you at 2am.
          </p>
        </div>

        <div className="toolchain">
          {cats.map((c, i) => (
            <div
              className="toolchain-row"
              data-tone={c.tone === 'cyan' ? undefined : c.tone}
              key={c.name}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="cat">{c.name}</div>
              <div className="toolchain-chips">
                {c.items.map((t) => (
                  <span className="tc-chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="count">{String(c.items.length).padStart(2, '0')} tools</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

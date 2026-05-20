const steps = [
  {
    num: '01',
    tag: 'Discover',
    title: 'Map the messy reality first.',
    desc:
      'Sit with the data, the workflow, and the people. Sketch the system as it is — not as it should be — and isolate the constraint that actually matters.',
  },
  {
    num: '02',
    tag: 'Design',
    title: 'Boring building blocks, sharp interfaces.',
    desc:
      'Choose proven components. Define contracts between agents, tools, and data layers. Keep the moving parts small and the boundaries explicit.',
  },
  {
    num: '03',
    tag: 'Build',
    title: 'Ship in vertical slices.',
    desc:
      'A skeleton that runs end-to-end on day one, then layered improvements — with evals, traces, and dashboards landing in the same PR as the feature.',
  },
  {
    num: '04',
    tag: 'Operate',
    title: 'Hand off something other engineers can run.',
    desc:
      'Runbooks, tracing, dashboards, and tests that catch regressions before users do. The system has to outlive the engagement.',
  },
];

export function Process() {
  return (
    <section className="section" id="process" aria-labelledby="process-title">
      <div className="shell">
        <div className="section-head">
          <span className="eyebrow">05 — Process</span>
          <h2 id="process-title">How an engagement runs.</h2>
          <p>
            A repeatable shape, never a templated playbook — every system has
            its own pressure points and the work is to find them quickly.
          </p>
        </div>

        <ol className="timeline" aria-label="Process steps">
          {steps.map((s, i) => (
            <li
              key={s.num}
              className="timeline-item"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <span className="ti-num">{s.num}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
              <span className="ti-tag">{s.tag}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function TopBar() {
  return (
    <div className="topbar" role="banner" aria-label="System status">
      <div className="topbar-inner">
        <div className="topbar-brand">
          <span className="dot" aria-hidden="true" />
          <span>krrish.systems</span>
          <span style={{ color: 'var(--text-mute)', marginLeft: 6 }}>
            / v2.6
          </span>
        </div>
        <div className="topbar-center">
          <span>node · yyz-01 · cloudflare</span>
          <span>build · 2026.05.21</span>
          <span>eval · 94/96 passing</span>
        </div>
        <div className="topbar-right">
          <span>UTC−4</span>
          <span className="live">
            <i aria-hidden="true" />
            live
          </span>
        </div>
      </div>
    </div>
  );
}

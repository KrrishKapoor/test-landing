import { ArrowUpRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export function Contact() {
  return (
    <section
      className="section section--tight"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="shell">
        <div
          className="cta-palette"
        >
          <div className="cta-top">
            <span className="status-pill">
              <span className="status-dot" aria-hidden="true" />
              Open to fractional, contract, and full-time roles
            </span>
            <h2 id="contact-title">
              Have a system you want to <span>actually ship?</span>
            </h2>
            <p>
              I’m most useful where data, models, and product meet — when
              there’s a real outcome on the line and someone needs to wire it
              all together. Tell me what you’re building.
            </p>
          </div>

          <div className="palette" role="group" aria-label="Contact actions">
            <div className="palette-input">
              <span className="prompt">⌘</span>
              <span>choose_contact_action</span>
              <span className="caret" aria-hidden="true" />
              <span className="kbd-shortcut"><kbd>enter</kbd> to open</span>
            </div>
            <ul className="palette-actions">
              <li>
                <a href="mailto:krrishkapoor003@gmail.com">
                  <span className="ico"><Mail size={14} aria-hidden="true" /></span>
                  <span className="label">Start a conversation</span>
                  <span className="meta">email</span>
                </a>
              </li>
              <li>
                <a href="https://cal.com/" target="_blank" rel="noreferrer">
                  <span className="ico"><ArrowUpRight size={14} aria-hidden="true" /></span>
                  <span className="label">Book a call</span>
                  <span className="meta">calendar</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/" target="_blank" rel="noreferrer">
                  <span className="ico"><GithubIcon size={14} /></span>
                  <span className="label">GitHub proof-of-work</span>
                  <span className="meta">repo</span>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                  <span className="ico"><LinkedinIcon size={14} /></span>
                  <span className="label">LinkedIn profile</span>
                  <span className="meta">social</span>
                </a>
              </li>
            </ul>
            <div className="palette-foot">
              <span>ready_for: production AI systems</span>
              <span className="legend"><span>● available</span><span>Toronto / remote</span></span>
            </div>
          </div>
        </div>

        <footer className="footer">
          <span className="lit">
            <i aria-hidden="true" />
            Built in Toronto · {new Date().getFullYear()}
          </span>
          <span>K · Data · AI · Agents</span>
        </footer>
      </div>
    </section>
  );
}

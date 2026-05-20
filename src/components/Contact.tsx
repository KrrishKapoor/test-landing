import { motion } from 'framer-motion';
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
        <motion.div
          className="cta"
          initial={{ y: 18, opacity: 0.001 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] as const }}
        >
          <div className="cta-grid-bg" aria-hidden="true" />
          <div className="cta-inner">
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
            <div className="cta-actions">
              <a
                className="btn btn--primary"
                href="mailto:krrishkapoor003@gmail.com"
              >
                <Mail size={16} strokeWidth={2.2} aria-hidden="true" />
                Start a conversation
              </a>
              <a
                className="btn"
                href="https://cal.com/"
                target="_blank"
                rel="noreferrer"
              >
                Book a call
                <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
              </a>
            </div>

            <div className="cta-links">
              <a href="mailto:krrishkapoor003@gmail.com">
                <Mail size={14} aria-hidden="true" />
                krrishkapoor003@gmail.com
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <GithubIcon size={14} />
                github
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedinIcon size={14} />
                linkedin
              </a>
            </div>
          </div>
        </motion.div>

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

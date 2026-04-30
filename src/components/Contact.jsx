export default function Contact() {
  return (
    <section id="contact" className="contact-bg">
      <div className="section-label reveal">Let's connect</div>
      <div className="section-title reveal">
        Get in <span className="outline">touch</span>
      </div>
      <div className="contact-row reveal">
        <p className="contact-desc">
          Whether you have a project in mind, an opportunity to share, or just
          want to say hello — my inbox is always open.
        </p>
        <div className="contact-icons-row">
          <a
            className="contact-icon-btn"
            href="https://github.com/rim-sari"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="devicon-github-original"></i>
          </a>
          <a
            className="contact-icon-btn"
            href="https://www.linkedin.com/in/rim-sari"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="devicon-linkedin-plain"></i>
          </a>
          <a className="contact-icon-btn" href="mailto:sari.rim.pro@gmail.com">
            <svg className="mail-icon" viewBox="0 0 24 24">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-eyebrow">Available for internships &amp; apprenticeships</div>
      <h1 className="hero-name">
        <span className="outline">Sari</span><br/>
        <span className="accent">Rim</span><span className="outline">.</span>
      </h1>
      <p className="hero-subtitle">
        A computer science student passionate about building polished, purposeful web experiences — from clean backend logic to expressive frontends.
      </p>
      <div className="hero-cta">
        <a href="#contact" className="btn-primary">Get in touch</a>
        <a href="#skills" className="btn-outline">My skills</a>
        <a href="/Sari-Rim-CVs.pdf" className="btn-cv" download="Sari-Rim-CVs.pdf">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download CV
        </a>
      </div>
      <div className="hero-num">CS</div>
    </section>
  )
}
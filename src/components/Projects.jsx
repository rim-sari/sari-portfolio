import { projects } from '../data/content'

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-label reveal">Work</div>
      <div className="section-title reveal">My <span className="outline">projects</span></div>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div className="project-card-wrap reveal" key={i} style={{ transitionDelay: `${i * 0.12}s` }}>
            <div className="project-card">
              <div className="project-num">{p.num}</div>
              <div>
                <a href={p.href} className="project-title-link" target="_blank" rel="noopener noreferrer">
                  {p.title}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                  </svg>
                </a>
                <p className="project-desc">{p.desc}</p>
                <div className="project-chips">
                  {p.chips.map((c, j) => <span className="chip" key={j}>{c}</span>)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
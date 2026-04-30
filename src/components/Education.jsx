import { useEffect } from 'react'
import { education } from '../data/content'

export default function Education() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 150)
      })
    }, { threshold: 0.1 })
    document.querySelectorAll('.edu-entry').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="education" style={{ background: 'var(--bg2)' }}>
      <div className="section-label reveal">Background</div>
      <div className="section-title reveal">My <span className="outline">education</span></div>
      <div className="edu-timeline">
        {education.map((e, i) => (
          <div className="edu-entry" key={i}>
            <div className="edu-dot"></div>
            <div className="edu-card">
              <div className="edu-top">
                <div className="edu-degree">{e.degree}</div>
                <div className="edu-dates">{e.dates}</div>
              </div>
              <div className="edu-school">{e.school}</div>
              <div className="edu-loc">{e.location}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
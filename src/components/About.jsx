import { useEffect } from 'react'

export default function About() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 80)
      })
    }, { threshold: 0.08 })
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about">
      <div className="section-label reveal">About me</div>
      <div className="section-title reveal">Who I <span className="outline">am</span></div>
      <div className="about-grid">
        <div className="about-text reveal">
          <p>I'm <strong>Sari Rim</strong>, a computer science student with a deep love for crafting software that is both technically solid and visually compelling.</p>
          <p>My stack spans the full spectrum — from <strong>Python</strong> scripts and <strong>Java</strong> backends to reactive frontends with <strong>React</strong> and <strong>Vue.js</strong>.</p>
          <p>I'm currently open to <strong>internships and apprenticeship opportunities</strong>.</p>
        </div>
        <div className="about-stats">
          {[
            { num: '3', label: 'Years of CS', color: 'var(--lime)' },
            { num: 'CS',  label: 'Degree in progress',   color: 'var(--pink)' },
            { num: 'PSC1',label: 'first aid certificate',     color: 'var(--blue)' },
            { num: '2',   label: 'Internships',      color: 'var(--orange)'},
          ].map((s, i) => (
            <div className="stat-card reveal" key={i}>
              <div className="stat-num" style={{ color: s.color }}>{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
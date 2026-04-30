import { useEffect } from 'react'
import { skillsRow1, skillsRow2 } from '../data/content'

function SkillRow({ skills, direction }) {
  const handleEnter = (e) => {
    const track = e.currentTarget.closest('.skills-loop-track')
    if (track) { track.style.animationDuration = '180s' }
  }
  const handleLeave = (e) => {
    const track = e.currentTarget.closest('.skills-loop-track')
    if (track) { track.style.animationDuration = '32s' }
  }

  const doubled = [...skills, ...skills, ...skills, ...skills]

  return (
    <div className="skills-loop-wrap">
      <div className={`skills-loop-track ${direction}`}>
        {doubled.map((s, i) => (
          <div
            className="skill-logo-item"
            key={i}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            <i className={s.icon}></i>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="skills-bg">
      <div className="section-label reveal">Technical skills</div>
      <div className="section-title reveal">What I <span className="outline">work with</span></div>
      <SkillRow skills={skillsRow1} direction="fwd" />
      <SkillRow skills={skillsRow2} direction="rev" />
    </section>
  )
}
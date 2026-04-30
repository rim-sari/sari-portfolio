import { useEffect, useRef } from 'react'

export default function Cursor() {
  const orb = useRef(null)
  const dot = useRef(null)

  useEffect(() => {
    let gx = window.innerWidth / 2, gy = window.innerHeight / 2
    let mx = gx, my = gy

    const onMove = e => {
      mx = e.clientX; my = e.clientY
      dot.current.style.left = mx + 'px'
      dot.current.style.top = my + 'px'
    }
    document.addEventListener('mousemove', onMove)

    const loop = () => {
      gx += (mx - gx) * 0.07
      gy += (my - gy) * 0.07
      orb.current.style.left = gx + 'px'
      orb.current.style.top = gy + 'px'
      requestAnimationFrame(loop)
    }
    loop()

    const addHover = () => {
      document.querySelectorAll('a,button,.stat-card,.skill-logo-item,.contact-icon-btn,.edu-card,.project-card').forEach(el => {
        el.addEventListener('mouseenter', () => dot.current?.classList.add('big'))
        el.addEventListener('mouseleave', () => dot.current?.classList.remove('big'))
      })
    }
    // slight delay so DOM is ready
    setTimeout(addHover, 500)

    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <div id="glow-orb" ref={orb} />
      <div id="dot" ref={dot} />
    </>
  )
}
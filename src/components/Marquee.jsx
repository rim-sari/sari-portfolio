import { useEffect, useRef } from 'react'

const items = ['Computer Science Student','Open to opportunities','Fast Learner','Team Player','Adaptability','Comunication']

export default function Marquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <div className="marquee-item" key={i}>
            {item}<div className="marquee-dot"></div>
          </div>
        ))}
      </div>
    </div>
  )
}
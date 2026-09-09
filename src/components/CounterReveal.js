'use client'
import { useEffect } from 'react'

function animateCounter(el, target, duration = 1600) {
  const textNode = [...el.childNodes].find(n => n.nodeType === Node.TEXT_NODE)
  if (!textNode) return

  const start = performance.now()

  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    textNode.textContent = Math.round(eased * target)
    if (progress < 1) requestAnimationFrame(tick)
  }

  requestAnimationFrame(tick)
}

export default function CounterReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.stat-num, .stat-alt .n')
    const counters = []

    els.forEach(el => {
      const textNode = [...el.childNodes].find(n => n.nodeType === Node.TEXT_NODE)
      if (!textNode) return
      const num = parseInt(textNode.textContent.trim(), 10)
      if (isNaN(num)) return
      counters.push({ el, target: num })
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return
          const found = counters.find(c => c.el === entry.target)
          if (found) animateCounter(found.el, found.target)
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.6 }
    )

    counters.forEach(c => observer.observe(c.el))
    return () => observer.disconnect()
  }, [])

  return null
}

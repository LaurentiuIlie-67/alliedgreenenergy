'use client'
import { useEffect } from 'react'

const SELECTORS = [
  '.service-card',
  '.process-step',
  '.pillar-card',
  '.equip-card',
  '.stat-alt',
  '.why-item',
  '.package-card',
  '.semafor-status',
  '.tc-node',
  '[data-reveal]',
]

export default function ScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(SELECTORS.join(','))
    els.forEach(el => el.classList.add('sr-hidden'))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting)
        visible.forEach((entry, i) => {
          setTimeout(() => {
            entry.target.classList.remove('sr-hidden')
            observer.unobserve(entry.target)
          }, i * 80)
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return null
}

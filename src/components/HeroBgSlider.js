'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const DEFAULT_IMAGES = [
  { src: '/images/slider-rezervoare-exterior.jpg', alt: 'Rezervoare industriale Allied Green Energy' },
  { src: '/images/slider-van-colectare.jpg',       alt: 'Vehicul de colectare Allied Green Energy' },
  { src: '/images/slider-rezervoare-cosuri.jpg',   alt: 'Instalație de rerafinare Allied Green Energy' },
]

export default function HeroBgSlider({ images, noOverlay = false } = {}) {
  const IMAGES = images || DEFAULT_IMAGES
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const isLast = current === IMAGES.length - 1
    const delay = isLast ? 5000 + 2000 : 5000
    const id = setTimeout(() => {
      setCurrent(i => (i + 1) % IMAGES.length)
    }, delay)
    return () => clearTimeout(id)
  }, [current])

  return (
    <div className={`hero-bg-slider${noOverlay ? ' hero-bg-slider--clean' : ''}`}>
      {IMAGES.map((img, i) => (
        <div
          key={img.src}
          className={`hero-bg-slide${i === current ? ' active' : ''}`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority={i === 0}
          />
          {img.label && (
            <div className="hero-bg-slide-label">
              <span className="slider-label">{img.label}</span>
            </div>
          )}
          {img.disclaimer && (
            <div className="hero-bg-slide-disclaimer">{img.disclaimer}</div>
          )}
        </div>
      ))}
    </div>
  )
}

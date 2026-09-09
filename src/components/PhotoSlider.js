'use client'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const SLIDES = [
  {
    src: '/images/slider-van-colectare.jpg',
    alt: 'Vehicul Allied Green Energy echipat pentru colectare ulei uzat',
    label: 'Colectare & Logistică',
    desc: 'Flotă proprie, echipată ADR: ridicăm de la tine în 48h',
  },
  {
    src: '/images/slider-rezervoare-exterior.jpg',
    alt: 'Rezervoare industriale Allied Green Energy',
    label: 'Capacitate Industrială',
    desc: 'Infrastructură de rerafinare la scară industrială',
  },
  {
    src: '/images/slider-arzator-instalat.jpg',
    alt: 'Arzător industrial Riello instalat de Allied',
    label: 'Lucrări Efectuate',
    desc: 'Combustibil Ecotherm Light 4, instalat și funcțional la clienți',
  },
  {
    src: '/images/slider-lab-balone.jpg',
    alt: 'Probe de ulei în laborator Allied, înainte și după rafinare',
    label: 'Diagnoză Moleculară',
    desc: 'Analiza uleiului uzat vs. produsul rafinat: diferența e vizibilă',
  },
  {
    src: '/images/slider-tehnicieni.jpg',
    alt: 'Tehnicieni Allied Green Energy în lucru',
    label: 'Echipă Specializată',
    desc: 'Specialiști care știu exact ce fac',
  },
  {
    src: '/images/slider-rezervoare-cosuri.jpg',
    alt: 'Instalație de rerafinare Allied Green Energy',
    label: 'Rerafinare & Energie',
    desc: 'Procese conforme BAT, standarde europene de mediu',
  },
  {
    src: '/images/slider-rezervor-industrial.jpg',
    alt: 'Rezervor industrial de inox Allied',
    label: 'Infrastructură Proprie',
    desc: 'Echipamente de rafinare deținute și operate de Allied',
  },
]

export default function PhotoSlider({
  inHero = false,
  slides: customSlides,
  tag,
  title,
  subtitle,
  tagColor = 'green',
}) {
  const slides = customSlides || SLIDES

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ])
  const [current, setCurrent] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', () => setCurrent(emblaApi.selectedScrollSnap()))
  }, [emblaApi])

  const carousel = (
    <div className={`slider-wrap${inHero ? ' slider-wrap--hero' : ''}`}>
      <div className="slider-viewport" ref={emblaRef}>
        <div className="slider-track">
          {slides.map((slide, i) => (
            <div className="slider-slide" key={i}>
              <div className="slider-img-wrap">
                {/* Blurred background — elimină barele negre la poze portrait */}
                <div className="slider-img-blur">
                  <Image
                    src={slide.src}
                    alt=""
                    fill
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                    aria-hidden
                  />
                </div>
                {/* Poza principală centrată */}
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 90vw"
                  style={{ objectFit: 'contain' }}
                  priority={i === 0}
                />
                <div className="slider-overlay">
                  <span className="slider-label">{slide.label}</span>
                  {slide.desc && <p className="slider-desc">{slide.desc}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="slider-btn slider-btn-prev" onClick={scrollPrev} aria-label="Anterior">
        <ChevronLeft size={22} />
      </button>
      <button className="slider-btn slider-btn-next" onClick={scrollNext} aria-label="Următor">
        <ChevronRight size={22} />
      </button>

      <div className="slider-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`slider-dot${i === current ? ' active' : ''}`}
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )

  if (inHero) return carousel

  return (
    <section className="slider-section">
      <div className="container">
        <div className={`section-tag ${tagColor}`}>{tag || 'Infrastructura Noastră'}</div>
        <h2>{title || 'Văzut cu ochii tăi.'}</h2>
        <p className="slider-lead">
          {subtitle || 'Echipamente reale, lucrări reale, rezultate reale.'}
        </p>
      </div>
      {carousel}
    </section>
  )
}

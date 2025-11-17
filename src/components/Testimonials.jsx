import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const items = [
  { name: 'Ava Solaris', role: 'DJ & Producer', quote: 'The ignition clicks like a downbeat. Pure rhythm, pure heat.' },
  { name: 'Milo Vance', role: 'Fashion Director', quote: 'It’s the only lighter I let on set. It photographs like jewelry.' },
  { name: 'Rei Mercer', role: 'Designer', quote: 'Form, function, and a flame with personality. Instant classic.' },
]

const Testimonials = () => {
  const trackRef = useRef(null)

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    let raf
    let x = 0
    const loop = () => {
      x -= 0.3
      el.style.transform = `translateX(${x}px)`
      if (Math.abs(x) > el.scrollWidth / 2) x = 0
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section className="relative bg-[#0b0b0f] text-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-8">Creators on Flair</h2>
        <div className="overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
          <div className="relative">
            <div className="flex whitespace-nowrap" ref={trackRef}>
              {[...items, ...items, ...items].map((t, i) => (
                <motion.div key={i} whileHover={{ scale: 1.02 }} className="m-4 inline-block w-[22rem] rounded-xl bg-white/10 p-5 align-top">
                  <p className="text-white/90">“{t.quote}”</p>
                  <div className="mt-4 text-sm text-white/60">{t.name} — {t.role}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

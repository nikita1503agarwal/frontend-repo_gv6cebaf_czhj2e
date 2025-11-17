import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const editions = [
  { key: 'classic', name: 'Flair Classic', copy: 'The essential silhouette with brushed metal poise.', accent: '#E5E7EB' },
  { key: 'edge', name: 'Flair Edge', copy: 'Razor geometry for modern tactility.', accent: '#0EA5E9' },
  { key: 'noir', name: 'Flair Noir', copy: 'Stealth matte with midnight glow.', accent: '#A78BFA' },
  { key: 'luxe', name: 'Flair Luxe', copy: 'Polished titanium opulence.', accent: '#22D3EE' },
]

const Editions = () => {
  const [active, setActive] = useState('classic')
  const item = editions.find(e => e.key === active)

  return (
    <section className="relative bg-[#0b0b0f] text-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-8">Flair Editions</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 rounded-2xl bg-white/5 ring-1 ring-white/10 p-10 overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.div key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }}>
                <div className="h-56 rounded-xl" style={{ background: `linear-gradient(135deg, ${item.accent}55, #111)` }} />
                <h3 className="mt-6 text-2xl font-bold">{item.name}</h3>
                <p className="mt-2 text-zinc-300">{item.copy}</p>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex flex-col gap-3">
            {editions.map(e => (
              <button key={e.key} onClick={()=>setActive(e.key)} className={`text-left rounded-xl px-4 py-4 ring-1 ring-white/10 hover:bg-white/10 transition ${active===e.key ? 'bg-white/10' : 'bg-white/5'}`}>
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full" style={{ backgroundColor: e.accent }} />
                  <span className="font-semibold">{e.name}</span>
                </div>
                <p className="mt-1 text-sm text-white/70">{e.copy}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Editions

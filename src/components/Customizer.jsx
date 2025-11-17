import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const metals = [
  { name: 'Titanium', color: '#8aa6b3' },
  { name: 'Onyx', color: '#0b0b0f' },
  { name: 'Gold', color: '#d4af37' },
  { name: 'Rose', color: '#f1a7a7' },
]

const flames = [
  { name: 'Azure', color: '#38bdf8' },
  { name: 'Neon', color: '#22d3ee' },
  { name: 'Amber', color: '#ff5a00' },
  { name: 'Violet', color: '#a78bfa' },
]

const Customizer = () => {
  const [metal, setMetal] = useState(metals[0])
  const [flame, setFlame] = useState(flames[0])
  const [engrave, setEngrave] = useState('FLAIR')
  const [rot, setRot] = useState(20)

  return (
    <section id="custom" className="relative bg-[#0b0b0f] text-white py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Build Yours</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* 3D-ish model */}
          <div className="relative flex items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 p-10 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,90,0,0.12),transparent)]" />
            <motion.div
              className="relative h-72 w-40 rounded-xl border border-white/20 shadow-[0_0_60px_rgba(255,90,0,0.25)]"
              style={{ background: `linear-gradient(160deg, ${metal.color}, #222)`, rotateY: rot }}
              animate={{ boxShadow: `0 0 60px ${flame.color}33` }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-x-0 top-6 mx-auto h-2 w-24 rounded bg-white/30" />
              <div className="absolute inset-x-0 top-10 mx-auto h-1 w-28 rounded bg-white/20" />
              <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30" />
              <motion.div
                className="absolute left-1/2 top-[70%] h-10 w-10 -translate-x-1/2 rounded-full"
                style={{ background: `radial-gradient(circle at 50% 50%, ${flame.color}, transparent 60%)` }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
              <motion.span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs tracking-[0.3em] text-white/80" key={engrave} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}>{engrave}</motion.span>
            </motion.div>
          </div>

          {/* Controls */}
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 backdrop-blur-xl">
            <div>
              <h3 className="text-lg font-semibold mb-3">Metals & Finishes</h3>
              <div className="flex flex-wrap gap-3">
                {metals.map((m) => (
                  <button key={m.name} onClick={() => setMetal(m)} className={`flex items-center gap-2 rounded-full px-4 py-2 ring-1 ring-white/15 ${m.name===metal.name ? 'bg-white/15' : 'bg-white/5 hover:bg-white/10'}`}>
                    <span className="h-4 w-4 rounded-full" style={{ backgroundColor: m.color }} />
                    <span className="text-sm">{m.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Flame Color</h3>
              <div className="flex flex-wrap gap-3">
                {flames.map((f) => (
                  <button key={f.name} onClick={() => setFlame(f)} className={`flex items-center gap-2 rounded-full px-4 py-2 ring-1 ring-white/15 ${f.name===flame.name ? 'bg-white/15' : 'bg-white/5 hover:bg-white/10'}`}>
                    <span className="h-4 w-4 rounded-full" style={{ backgroundColor: f.color }} />
                    <span className="text-sm">{f.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Engraving</h3>
              <input value={engrave} onChange={(e)=>setEngrave(e.target.value.toUpperCase().slice(0,12))} className="w-full rounded-xl bg-white/5 px-4 py-3 outline-none ring-1 ring-white/15 placeholder:text-white/40" placeholder="Type up to 12 chars" />
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Rotate</h3>
              <input type="range" min="-40" max="40" value={rot} onChange={(e)=>setRot(Number(e.target.value))} className="w-full" />
            </div>

            <div className="mt-8 flex items-center gap-3">
              <button className="rounded-full bg-[#ff5a00] px-6 py-3 text-sm font-semibold shadow-[0_0_30px_rgba(255,90,0,0.6)] hover:bg-[#ff6f21] transition">Add to Cart</button>
              <button className="rounded-full bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur-xl ring-1 ring-white/20 hover:bg-white/15 transition">Share Build</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Customizer

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const products = [
  {
    name: 'Flair Classic',
    desc: 'Brushed steel body with ergonomic ignition. Timeless durability.',
    colors: ['#E5E7EB', '#111827', '#D4AF37'],
    image: 'https://images.unsplash.com/photo-1762776867699-fd56ec2b3d02?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGbGFpciUyMENsYXNzaWN8ZW58MHwwfHx8MTc2MzM3MTkxOHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    name: 'Flair Edge',
    desc: 'Angular silhouette with ceramic flame port and tactile ridges.',
    colors: ['#0EA5E9', '#059669', '#F59E0B'],
    image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Flair Noir',
    desc: 'Matte-black finish with stealth geometry and soft-touch grip.',
    colors: ['#0F172A', '#64748B', '#A78BFA'],
    image: 'https://images.unsplash.com/photo-1505744386214-51dba16a26fc?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Flair Luxe',
    desc: 'Polished titanium with micro-etched pattern and jewel ignition.',
    colors: ['#38BDF8', '#F472B6', '#22D3EE'],
    image: 'https://images.unsplash.com/photo-1519558260268-cde7e03a0152?q=80&w=1600&auto=format&fit=crop',
  },
]

const ProductSlider = () => {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((i) => (i + 1) % products.length)
  const prev = () => setIndex((i) => (i - 1 + products.length) % products.length)

  const item = products[index]

  return (
    <section id="shop" className="relative w-full bg-[#0b0b0f] text-white py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Editions</h2>
          <div className="flex gap-3">
            <button onClick={prev} className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20">‹</button>
            <button onClick={next} className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20">›</button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={item.image}
                alt={item.name}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.6 }}
                className="h-full w-full object-cover"
              />
            </AnimatePresence>
            {/* Neon border */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-[#ff5a00]/40" />
          </div>

          <div>
            <motion.h3
              key={item.name}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-2xl sm:text-3xl font-bold"
            >
              {item.name}
            </motion.h3>
            <p className="mt-3 text-zinc-300">{item.desc}</p>

            <div className="mt-6 flex items-center gap-3">
              {item.colors.map((c) => (
                <span key={c} className="h-8 w-8 rounded-full ring-2 ring-white/20" style={{ backgroundColor: c }} />
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <button className="rounded-full bg-[#ff5a00] px-6 py-3 text-sm font-semibold shadow-[0_0_30px_rgba(255,90,0,0.6)] hover:bg-[#ff6f21] transition">Quick Buy</button>
              <button className="rounded-full bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur-xl ring-1 ring-white/20 hover:bg-white/15 transition">Details</button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {products.map((_, i) => (
            <span key={i} className={`h-1.5 w-8 rounded-full ${i === index ? 'bg-white' : 'bg-white/20'}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductSlider

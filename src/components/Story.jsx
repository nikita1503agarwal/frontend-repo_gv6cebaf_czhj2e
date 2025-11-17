import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Origins',
    copy: 'Born from the intersection of couture and engineering, Flair began with a single spark: elevate the ritual into art.',
  },
  {
    title: 'Craft',
    copy: 'Each piece is precision-milled, hand-finished, and assembled with micron-level tolerances.',
  },
  {
    title: 'Materials',
    copy: 'Aerospace-grade metals, ceramic nozzles, and heat-treated finishes for a lifetime of light.',
  },
  {
    title: 'Design',
    copy: 'Minimal silhouettes, dynamic geometry, and a flame that feels alive.',
  },
]

const Story = () => {
  return (
    <section className="relative bg-[#0b0b0f] text-white py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,90,0,0.08),transparent)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold mb-14">The Flame of Flair</h2>
        <div className="space-y-20">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-bold mb-2">{s.title}</h3>
              <p className="text-zinc-300">{s.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Story

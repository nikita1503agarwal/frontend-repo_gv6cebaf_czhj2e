import { motion } from 'framer-motion'

const images = [
  'https://images.unsplash.com/photo-1505744386214-51dba16a26fc?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519558260268-cde7e03a0152?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518546305927-5a555bb7020e?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop'
]

const Gallery = () => {
  return (
    <section className="relative bg-[#0b0b0f] text-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-10">Lifestyle Gallery</h2>
        <div className="columns-2 md:columns-3 gap-4 [column-fill:_balance]"><!-- eslint-disable-line react/no-unknown-property -->
          {images.map((src, i) => (
            <motion.div
              key={src}
              whileHover={{ scale: 1.02 }}
              className="mb-4 overflow-hidden rounded-xl ring-1 ring-white/10"
            >
              <img src={src} alt="Flair lifestyle" className="w-full object-cover hover:brightness-110 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery

import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-[#0b0b0f] text-white">
      {/* Glow backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,90,0,0.25),transparent_60%)] blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,200,255,0.18),transparent_60%)] blur-3xl" />
      </div>

      {/* 3D lighter */}
      <div className="absolute inset-0 opacity-80">
        {/* Public Spline scene as cinematic rotating object (placeholder lighter) */}
        <Spline scene="https://prod.spline.design/0TCC99cW4zC1WQ2p/scene.splinecode" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-5 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
        >
          Ignite Your Style.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mx-auto max-w-2xl text-lg text-zinc-300"
        >
          Premium lighters engineered with precision, finished with couture-level detail,
          and animated with a spark of the future.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-10 flex items-center gap-4"
        >
          <a href="#shop" className="rounded-full bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur-xl ring-1 ring-white/20 hover:bg-white/15 transition">Shop Editions</a>
          <a href="#custom" className="rounded-full bg-[#ff5a00] px-6 py-3 text-sm font-semibold shadow-[0_0_30px_rgba(255,90,0,0.6)] hover:bg-[#ff6f21] transition">Customize Yours</a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="h-14 w-[2px] overflow-hidden rounded-full bg-white/20">
            <motion.span
              className="block h-14 w-[2px] bg-white/80"
              animate={{ y: [ -56, 56 ] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>

      {/* Flame hover hint */}
      <div className="pointer-events-none absolute inset-0" />
    </section>
  )
}

export default Hero

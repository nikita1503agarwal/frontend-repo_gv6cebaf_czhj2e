import { Instagram, Twitter, Youtube, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#0b0b0f] text-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">Flair</h3>
            <p className="text-white/60">Join the Spark.</p>
          </div>
          <form className="flex w-full md:w-auto items-center gap-3">
            <input className="w-full md:w-80 rounded-full bg-white/5 px-4 py-3 outline-none ring-1 ring-white/15" placeholder="Enter your email" />
            <button className="rounded-full bg-[#ff5a00] px-6 py-3 text-sm font-semibold shadow-[0_0_30px_rgba(255,90,0,0.6)] hover:bg-[#ff6f21] transition">Subscribe</button>
          </form>
          <div className="flex items-center gap-4">
            {[Instagram, Twitter, Youtube, Mail].map((Icon, i) => (
              <a key={i} href="#" className="group rounded-full p-2 ring-1 ring-white/20 hover:bg-white/10">
                <Icon className="h-5 w-5 text-white group-hover:text-[#ff8a33] transition" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-white/50">© {new Date().getFullYear()} Flair. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer

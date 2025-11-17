import Hero from './components/Hero'
import ProductSlider from './components/ProductSlider'
import Story from './components/Story'
import Customizer from './components/Customizer'
import Gallery from './components/Gallery'
import Editions from './components/Editions'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#0b0b0f] text-white selection:bg-[#ff5a00]/30 selection:text-white">
      <Hero />
      <ProductSlider />
      <Story />
      <Customizer />
      <Gallery />
      <Editions />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App

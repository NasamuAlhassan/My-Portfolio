import Header from '@/components/Header'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Certifications from '@/components/sections/Certifications'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  )
}

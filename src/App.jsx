import React, { useEffect } from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import ParticlesBackground from './components/ParticlesBackground'
import MusicPlayer from './sections/MusicPlayer'
import Acerca_de_mi from './sections/Acerca_de_mi'
import Proyectos from './sections/proyectos'
import Contacto from './sections/Contacto'
const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className='max-w7xl mx-auto'>
      <ParticlesBackground/>
      <Navbar/>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Hero/>
        </div>
      </div>
      <Acerca_de_mi/>
      <Proyectos/>
      <Contacto/>
      <MusicPlayer/>
    </main>
  )
}

export default App
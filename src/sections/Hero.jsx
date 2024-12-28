import React from 'react'
import { motion } from 'framer-motion'
import ComputerCanvas from '../components/Computer'
import Button from '../components/button'

const Hero = () => {
    return (
        <section id="Inicio" className='min-h-screen w-full flex flex-col relative'>
            
            <div className='w-full mx-auto flex flex-col sm:mt-28 mt-16 c-space gap-3'>
                <div className="flex flex-col justify-center items-center gap-4 px-4">
                    <motion.h1 
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                            duration: 0.8,
                            delay: 2,
                            ease: "easeOut"
                        }}
                        className='text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent font-generalsans tracking-wider text-center'
                    >
                        Camilo Pedraza
                    </motion.h1>
                    
                    <motion.div 
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                            duration: 0.8,
                            delay: 2.3,
                            ease: "easeOut"
                        }}
                        className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center"
                    >
                        <p className='text-lg sm:text-xl md:text-2xl font-medium text-center font-generalsans bg-gradient-to-r from-slate-300 via-slate-100 to-slate-300 bg-clip-text text-transparent'>
                            Ingeniero Electronico y Desarrollador Full Stack
                        </p>
                        <span className='waving-hand'>
                            <img src="/icono/antena.png" alt="icono programador" className='w-8 h-8 sm:w-10 sm:h-10'/>
                        </span>
                    </motion.div>

                    <motion.p 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                            duration: 0.8,
                            delay: 2.6,
                            ease: "easeOut"
                        }}
                        className='text-base sm:text-lg md:text-xl font-medium text-center font-generalsans bg-gradient-to-r from-neutral-400 via-zinc-300 to-neutral-400 bg-clip-text text-transparent max-w-2xl px-4'
                    >
                        Combino la electrónica avanzada con el desarrollo de aplicaciones modernas para crear soluciones innovadoras que optimizan procesos y potencian industrias tecnológicas.
                    </motion.p>
                </div>
            </div>
            <div className='w-full h-full absolute inset-0 mt-20 flex justify-center'>
                <div className='max-w-4xl w-full h-full'>
                    <ComputerCanvas/>
                </div>
            </div>
            <div className='mt-20'>
                <Button/>
            </div>
        </section>
    )
}

export default Hero
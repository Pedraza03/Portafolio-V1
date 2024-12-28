import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { services } from '../constants/index'
import { fadeIn, textVariant } from '../utils/motion'
import Redes from '../components/Redes'

const ServiceCard = ({ index, title, icon, description, imgs }) => {
    const [isFlipped, setIsFlipped] = React.useState(false);

    return (
        <div 
            className='w-full xs:w-[250px] cursor-pointer perspective-1000'
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div className={`relative transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                {/* Frente de la tarjeta */}
                <div className='backface-hidden'>
                    <Tilt className='w-full xs:w-[250px]'>
                        <motion.div 
                            variants={fadeIn("right", "spring", 0.5 * index, 0.50)}
                            className='w-full bg-gradient-to-r from-green-300 to-pink-300 p-[1px] rounded-2xl shadow-lg'
                        >
                            <div 
                                options={{ max: 45, scale: 1, speed: 450 }} 
                                className='bg-[#151030] rounded-2xl py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center'
                            >
                                <img 
                                    src={icon} 
                                    alt={title} 
                                    className='w-16 h-16 object-contain' 
                                />
                                <div className='flex flex-wrap gap-2 justify-center'>
                                    {imgs && imgs.map((img, i) => (
                                        <img 
                                            key={i}
                                            src={img} 
                                            alt={`${title}-skill-${i}`} 
                                            className='w-8 h-8 object-contain hover:scale-50 transition-all duration-300' 
                                        />
                                    ))}
                                </div>
                                <h3 className='text-white text-xl font-bold text-center'>
                                    {title}
                                </h3>
                            </div>
                        </motion.div>
                    </Tilt>
                </div>

                {/* Reverso de la tarjeta */}
                <div className='absolute inset-0 backface-hidden rotate-y-180'>
                    <motion.div 
                        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                        className='w-full h-full bg-gradient-to-r from-green-300 to-pink-300 p-[1px] rounded-2xl shadow-lg'
                    >
                        <div className='bg-[#151030] rounded-2xl p-6 min-h-[280px] flex flex-col justify-center items-center'>
                            <p className='text-white text-center text-sm sm:text-xs md:text-base lg:text-lg'>
                                {description}. 
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
        
    )
}

const Acerca_de_mi = () => {
    return (
        <section 
            id="Acerca_de_mi"
            className='relative w-full min-h-screen mx-auto scroll-mt-16'
        >
            <div className='max-w-7xl mx-auto px-6 sm:px-16 py-10'>
                <motion.div variants={textVariant()}>
                    <p className='text-white text-[14px] sm:text-[18px] uppercase tracking-wider'>Introducción</p>
                    <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Sobre mí.</h2>
                </motion.div>

                <div className='flex flex-col md:flex-row items-center gap-4 md:gap-12'>
                    <motion.p 
                        variants={fadeIn("up", "text", 0.1, 1)}
                        className='mt-4 text-white text-[17px] max-w-3xl leading-[30px]'
                    >
                        Soy una persona curiosa y dedicada, siempre en busca de nuevos retos que me permitan crecer personal y profesionalmente. Disfruto trabajar en equipo, encontrar soluciones creativas a los problemas y mantener una actitud positiva ante cualquier desafío. Me apasiona aprender, mejorar constantemente y aportar valor a cada proyecto que emprendo.
                    </motion.p>

                    <div className='md:self-start md:-mt-16 md:ml-8'>
                        <Redes />
                    </div>
                </div>

                <div className='mt-20 flex flex-wrap gap-10'>
                    {services.map((service, index) => (
                        <ServiceCard key={service.title} index={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Acerca_de_mi
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useEffect } from 'react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination, Virtual } from "swiper/modules";
import { ServiceData } from "../constants/proyect";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Proyectos = () => {
    const swiperRef = useRef(null);

    const handleCardClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    useEffect(() => {
        let animationFrame;

        const handleMouseMove = (e) => {
            if (!swiperRef.current) return;

            const { clientX } = e;
            const { innerWidth } = window;
            const mousePosition = clientX / innerWidth;

            // Nueva zona de activación: izquierda (< 0.15) y derecha (> 0.85)
            if (mousePosition < 0.10) {
                animationFrame = requestAnimationFrame(() => {
                    swiperRef.current.swiper.slidePrev();
                });
            } else if (mousePosition > 0.90) {
                animationFrame = requestAnimationFrame(() => {
                    swiperRef.current.swiper.slideNext();
                });
            } else {
                cancelAnimationFrame(animationFrame);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            cancelAnimationFrame(animationFrame);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section 
            id="Proyectos" 
            className="max-w-7xl mx-auto px-6 sm:px-16 py-20 pt-40"
        >
            <div className="flex items-center justify-center flex-col h-full relative">
                {/* Zonas de navegación, solo visibles en la sección de proyectos */}
                <div className="absolute left-0 top-[38%] bottom-[36%] w-[8vw] sm:w-[10vw] 
                    bg-gradient-to-r from-gray-900/50 to-transparent 
                    flex items-center justify-start pl-2 z-10 hidden sm:flex"> {/* Ocultar en móviles */}
                    <IoIosArrowBack className="text-white text-2xl sm:text-4xl opacity-75 hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute right-0 top-[38%] bottom-[36%] w-[8vw] sm:w-[10vw] 
                    bg-gradient-to-l from-gray-900/50 to-transparent 
                    flex items-center justify-end pr-2 z-10 hidden sm:flex"> {/* Ocultar en móviles */}
                    <IoIosArrowForward className="text-white text-2xl sm:text-4xl opacity-75 hover:opacity-100 transition-opacity" />
                </div>

                <h2 className="text-4xl font-bold text-white mb-10">Proyectos</h2>
                <Swiper
                    ref={swiperRef}
                    breakpoints={{
                        320: {
                            slidesPerView: 1.2,
                            spaceBetween: 35,
                        },
                        480: {
                            slidesPerView: 1.5,
                            spaceBetween: 40,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 45,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination, Virtual]}
                    className="max-w-[95%] lg:max-w-[90%]"
                >
                    {ServiceData.map((item, index) => (
                        <SwiperSlide key={`slide-${item.title}-${index}`} virtualIndex={index}>
                            <div 
                                onClick={() => handleCardClick(item.link)}
                                className="group relative shadow-lg text-white rounded-xl px-2 py-3 sm:px-6 sm:py-8 
                                            h-[280px] w-[240px] 
                                            sm:h-[320px] sm:w-[280px] 
                                            lg:h-[400px] lg:w-[350px] 
                                            overflow-hidden cursor-pointer [perspective:1000px]
                                            mx-auto"
                            >
                                <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                    {/* Frente de la tarjeta */}
                                    <div className="absolute inset-0 w-full h-full">
                                        <img 
                                            src={item.backgroundImage} 
                                            alt={item.title}
                                            className="w-full h-full object-cover rounded-xl"
                                        />
                                        <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50 rounded-xl" />
                                        
                                        {/* Título en la parte superior */}
                                        <div className="absolute top-4 left-0 right-0 flex items-center justify-center">
                                            <div className="flex items-center gap-2 px-2">
                                                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-center break-words 
                                                                max-h-[60px] overflow-hidden
                                                                [text-shadow:_2px_2px_4px_rgba(0,0,0,0.7)]">
                                                    {item.title}
                                                </h1>
                                            </div>
                                        </div>

                                        {/* Cuadro interno centrado */}
                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 
                                                        w-[160px] h-[160px] 
                                                        sm:w-[180px] sm:h-[180px] 
                                                        lg:w-[200px] lg:h-[200px] 
                                                        rounded-lg overflow-hidden border-2 border-white/30
                                                        shadow-lg">
                                            <img 
                                                src={item.contentImage} 
                                                alt={`${item.title} preview`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    {/* Reverso de la tarjeta */}
                                    <div className="absolute inset-0 w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden] bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-xl p-4">
                                        <div className="flex flex-col h-full justify-center items-center text-center">
                                            <h3 className="text-sm sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">{item.title}</h3>
                                            <p className="text-sm leading-tight 
                                                                sm:text-base sm:leading-normal 
                                                                lg:text-lg lg:leading-relaxed">
                                                {item.content}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                
                {/* Contenedor personalizado para los puntos */}
                <div className="fixed bottom-2 sm:bottom-4 left-0 right-0 z-50">
                    <div className="mx-auto max-w-[150px] sm:max-w-[200px] px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-gray-800/50 backdrop-blur-sm">
                        <div className="swiper-pagination !static flex justify-center items-center gap-1 sm:gap-2"></div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                    .swiper-pagination-bullet {
                        width: 8px !important;
                        height: 8px !important;
                        background: rgba(255, 255, 255, 0.3) !important;
                        opacity: 1 !important;
                        margin: 0 3px !important;
                        transition: all 0.3s ease !important;
                    }
                    
                    @media (min-width: 640px) {
                        .swiper-pagination-bullet {
                            width: 12px !important;
                            height: 12px !important;
                            margin: 0 4px !important;
                        }
                    }
                    
                    .swiper-pagination-bullet-active {
                        background: #4F46E5 !important;
                        box-shadow: 0 0 10px rgba(79, 70, 229, 0.5) !important;
                        transform: scale(1.2) !important;
                    }
                `
            }} />
        </section>
    );
};  

export default Proyectos;

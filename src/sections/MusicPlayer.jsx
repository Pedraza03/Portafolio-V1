import React, { useState, useRef, useEffect } from 'react'
import { FaPlay, FaPause, FaForward, FaBackward } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { songs } from '../constants/songs'

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentSongIndex, setCurrentSongIndex] = useState(0)
    const audioRef = useRef(null)

    // Inicializar el audio cuando el componente se monta
    useEffect(() => {
        audioRef.current = new Audio(songs[currentSongIndex].url)
        audioRef.current.load()
    }, [])

    // Manejar la reproducción/pausa
    const togglePlay = () => {
        if (!audioRef.current.src) {
            audioRef.current.src = songs[currentSongIndex].url
        }
        
        if (isPlaying) {
            audioRef.current.pause()
        } else {
            audioRef.current.play().catch(error => {
                console.log("Error al reproducir:", error)
            })
        }
        setIsPlaying(!isPlaying)
    }

    // Agregar event listeners para el audio
    useEffect(() => {
        const audio = audioRef.current

        const handleEnded = () => {
            setIsPlaying(false)
        }

        const handleError = (e) => {
            console.log("Error de audio:", e)
            setIsPlaying(false)
        }

        audio.addEventListener('ended', handleEnded)
        audio.addEventListener('error', handleError)

        return () => {
            audio.removeEventListener('ended', handleEnded)
            audio.removeEventListener('error', handleError)
        }
    }, [currentSongIndex, songs]) // Agregamos las dependencias necesarias

    // Cambiar a la siguiente canción
    const nextSong = () => {
        const nextIndex = (currentSongIndex + 1) % songs.length
        setCurrentSongIndex(nextIndex)
        audioRef.current.src = songs[nextIndex].url
        if (isPlaying) {
            audioRef.current.play().catch(error => {
                console.log("Error al reproducir siguiente:", error)
            })
        }
    }

    // Cambiar a la canción anterior
    const prevSong = () => {
        const prevIndex = currentSongIndex === 0 ? songs.length - 1 : currentSongIndex - 1
        setCurrentSongIndex(prevIndex)
        audioRef.current.src = songs[prevIndex].url
        if (isPlaying) {
            audioRef.current.play().catch(error => {
                console.log("Error al reproducir anterior:", error)
            })
        }
    }

    // Limpiar el audio cuando el componente se desmonte
    useEffect(() => {
        return () => {
            const audio = audioRef.current
            if (audio) {
                audio.pause()
                audio.src = ''
            }
        }
    }, [])

    return (
        <motion.section 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                duration: 0.8,
                delay: 3, // Delay después de que carguen los otros elementos
                ease: "easeOut"
            }}
            className="
                absolute top-20 left-20 flex items-center justify-center animate-float
                max-md:fixed max-md:bottom-4 max-md:left-4 max-md:top-auto max-md:right-auto
            "
        >
            <div className="flex flex-col items-center">
                {/* Contenedor del vinilo */}
                <div className="relative w-10 h-10 max-md:w-8 max-md:h-8">
                    <div className={`w-10 h-10 max-md:w-8 max-md:h-8 bg-[url('/icono/vinilo.png')] bg-cover bg-center
                        ${isPlaying ? 'animate-spin' : ''}`}>
                    </div>
                </div>

                {/* Controles */}
                <div className="flex gap-3 mt-2 max-md:gap-2 max-md:mt-1">
                    <button 
                        className="text-sm max-md:text-xs hover:scale-110 transition-transform text-white"
                        onClick={prevSong}
                    >
                        <FaBackward />
                    </button>
                    <button 
                        className="text-base max-md:text-sm hover:scale-110 transition-transform text-white"
                        onClick={togglePlay}
                    >
                        {isPlaying ? <FaPause /> : <FaPlay />}
                    </button>
                    <button 
                        className="text-sm max-md:text-xs hover:scale-110 transition-transform text-white"
                        onClick={nextSong}
                    >
                        <FaForward />
                    </button>
                </div>
            </div>

            {/* Cuadro de información de la canción */}
            <div className="
                ml-4 bg-black/50 backdrop-blur-sm rounded-lg p-2 text-white text-xs
                max-md:text-[10px] max-md:p-1.5 max-md:ml-2 max-md:max-w-[120px]
            ">
                <p className="font-semibold truncate">{songs[currentSongIndex].title}</p>
                <p className="text-gray-300 text-[10px] max-md:text-[8px] truncate">
                    {songs[currentSongIndex].artist}
                </p>
            </div>
        </motion.section>
    )
}

export default MusicPlayer
import React, { useEffect } from 'react'
import me from '../../assets/me.jpeg'




const hero = () => {

    return (
        <div>
            <header className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute top-0 right-0 w-full h-full">
                    {/* <img src="./Data/backgrouondpic.png" className="w-full h-full object-cover" /> */}
                </div>

                <div className="container mx-auto px-4 z-10 relative">
                    <div className="flex flex-col-reverse lg:flex-row items-center justify-between py-20">
                        <div className="text-center md:text-left w-full lg:w-1/2 mb-10 lg:mb-0 animate-fade-in" style={{ "animation-delay": "0.2s" }}>
                            <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm <span className="gradient-text">Adhithya K</span></h1>
                            <div className="typewriter text-2xl md:text-3xl font-medium mb-6">
                                Software Developer & CS Student
                            </div>
                            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
                                Looking for opportunities to apply my skills in software development, machine learning, and web technologies. Passionate about building innovative solutions that make a difference.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href="#projects" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full font-medium transition-all duration-300 shadow-lg">
                                    View My Work
                                </a>
                                <a href="#contact" className="px-6 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 rounded-full font-medium transition-all duration-300">
                                    Contact Me
                                </a>
                            </div>
                        </div>

                        <div className="lg:w-1/2 lg:flex justify-center animate-fade-in" style={{ "animation-delay": "0.4s" }}>
                            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-indigo-400/20 shadow-xl transform rotate-6">
                                <img src={me} className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-10 left-0 right-0 text-center animate-bounce">
                    <a href="#about" className="text-white text-3xl">
                        <i className="fas fa-chevron-down"></i>
                    </a>
                </div>
            </header>
        </div>
    )
}

export default hero
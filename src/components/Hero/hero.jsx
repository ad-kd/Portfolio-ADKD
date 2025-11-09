import React from 'react'
import me from '../../assets/me.png'

const Hero = () => {
  return (
    <div>
      <header className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen flex items-center justify-center overflow-hidden" id='hero'>
        
        {/* Interactive animated gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.15),transparent_60%)] animate-pulse"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] animate-slow-pan"></div>
          {/* floating orbs for depth */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between py-20">
            
            {/* Text Section */}
            <div 
              className="text-center md:text-left w-full lg:w-1/2 mb-10 lg:mb-0 opacity-0 animate-fade-in-up" 
              style={{ animationDelay: "0.2s" }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-600 bg-clip-text text-transparent animate-gradient">
                  Adhithya K
                </span>
              </h1>

              <div className="text-2xl md:text-3xl font-medium mb-6 text-indigo-300 animate-slide-in-left">
                Software Developer & CS Student
              </div>

              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg leading-relaxed animate-fade-in" style={{ animationDelay: "0.6s" }}>
                Exploring{" "}
                <span className="text-indigo-400">software development</span>,{" "}
                <span className="text-indigo-400">machine learning</span>, and{" "}
                <span className="text-indigo-400">web technologies</span>. 
                I love building{" "}
                <span className="text-indigo-300">creative solutions</span> that make an impact.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fade-in" style={{ animationDelay: "0.8s" }}>
                <a 
                  href="#projects" 
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full font-medium transition-all duration-300 shadow-lg hover:scale-105"
                >
                  View My Work
                </a>
                <a 
                  href="#contact" 
                  className="px-6 py-3 bg-transparent border-2 border-indigo-400 hover:bg-indigo-500 hover:text-white rounded-full font-medium transition-all duration-300"
                >
                  Contact Me
                </a>
                <a 
                  href="/resume.pdf"  download="Adhithya-K-Resume.pdf" 
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-500 rounded-full font-medium transition-all duration-300 shadow-lg hover:scale-105"
                >
                  Resume
                </a>
              </div>
            </div>

            {/* Image Section */}
            <div 
              className="lg:w-1/2 lg:flex justify-center opacity-0 animate-fade-in-up" 
              style={{ animationDelay: "0.4s" }}
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl group">
                {/* Rotating gradient ring */}
                <div className="absolute inset-0 rounded-full p-[6px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 animate-spin-slow">
                  <div className="w-full h-full rounded-full bg-gray-900"></div>
                </div>
                <img src={me} className="w-full h-full rounded-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-500" alt="Profile" />
              </div>
            </div>
          </div>
        </div>

        {/* Floating scroll-down icon */}
        <div className="absolute bottom-10 left-0 right-0 text-center animate-bounce">
          <a href="#about" className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300 text-3xl">
            <i className="fas fa-chevron-down"></i>
          </a>
        </div>
      </header>
    </div>
  )
}

export default Hero

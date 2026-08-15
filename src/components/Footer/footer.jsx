import React from 'react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#05080f] text-gray-500 border-t border-slate-900 py-12 relative">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-white mb-2 tracking-wider">
              <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">A</span>K
            </div>
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Adhithya K. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-sm">
            <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About</a>
            <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-300">Skills</a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a>
          </div>

          {/* Scroll to top button */}
          <div>
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-indigo-600 border border-slate-800 hover:border-indigo-500 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 shadow-md"
              title="Scroll to Top"
              aria-label="Scroll to top"
            >
              <i className="fas fa-arrow-up text-sm"></i>
            </button>
          </div>

        </div>

        {/* Bottom Tagline */}
        <div className="border-t border-slate-900 mt-8 pt-8 text-center text-xs text-gray-600">
          <p className="flex items-center justify-center gap-1.5">
            Built with <i className="fas fa-heart text-indigo-500 animate-pulse"></i> using React & TailwindCSS by AD
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
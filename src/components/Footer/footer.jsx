import React from 'react'

const footer = () => {
  return (
    <div>
      <footer className="py-10 bg-gray-900 text-gray-400">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0">
                    <div className="text-xl font-bold text-white mb-2">
                        <span className="text-indigo-400">A</span>K
                    </div>
                    <p className="text-sm">© 2025 Adhithya K. All rights reserved.</p>
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:space-x-8 space-y-4 md:space-y-0">
                    <a href="#about" className="hover:text-white transition-colors duration-300">About</a>
                    <a href="#skills" className="hover:text-white transition-colors duration-300">Skills</a>
                    <a href="#projects" className="hover:text-white transition-colors duration-300">Projects</a>
                    <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
                </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
                <p>Built with passion and dedication to computer science.</p>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default footer
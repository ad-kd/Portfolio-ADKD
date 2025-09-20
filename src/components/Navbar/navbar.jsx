import React, { useEffect } from 'react'
import '../../index.css'

const navbar = () => {

  useEffect(() => {
  }, [])

  let MobieMenuClick = () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('hidden');
  };


    return (
        <div>
            <div className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50 py-3">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <a href='#hero' className="text-xl font-bold text-gray-800">
                        <span className="text-indigo-600">A</span>K
                    </a>
                    <nav className="hidden md:block">
                        <ul className="flex space-x-8">
                            <li><a href="#about"
                                className="text-gray-700 hover:text-indigo-600 transition-colors duration-300">About</a></li>
                            <li><a href="#skills"
                                className="text-gray-700 hover:text-indigo-600 transition-colors duration-300">Skills</a></li>
                            <li><a href="#projects"
                                className="text-gray-700 hover:text-indigo-600 transition-colors duration-300">Projects</a></li>
                            <li><a href="#contact"
                                className="text-gray-700 hover:text-indigo-600 transition-colors duration-300">Contact</a></li>
                        </ul>
                    </nav>
                    <button className="md:hidden text-gray-700" onClick={MobieMenuClick}>
                        <i className="fas fa-bars text-xl"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default navbar
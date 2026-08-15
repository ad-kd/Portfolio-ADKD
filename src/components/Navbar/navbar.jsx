import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Background styling on scroll
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section highlighting
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div>
      {/* Top Floating Glass Header */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${
          scrolled 
            ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/40 shadow-lg py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 sm:px-10 lg:px-16 flex justify-between items-center">
          {/* Logo with Glow Indicator */}
          <a href='#hero' className="text-2xl font-bold tracking-wider text-white flex items-center gap-2 group">
            <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
              A
            </span>
            <span className="text-gray-300">K</span>
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`}
                    className={`nav-link text-sm font-medium tracking-wide transition-colors duration-300 ${
                      activeSection === item.id 
                        ? 'text-indigo-400 active' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-white focus:outline-none transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-lg md:hidden overflow-y-auto overflow-x-hidden transition-all duration-300 flex flex-col justify-center items-center ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col space-y-8 text-center">
          {navItems.map((item) => (
            <li key={item.id} className="transform transition-transform duration-300 translate-y-0">
              <a 
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-semibold tracking-wider transition-colors block py-2 ${
                  activeSection === item.id 
                    ? 'text-indigo-400' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
import React, { useState, useEffect, useRef } from 'react'
import HMS from '../../assets/HMS.jpg'
import Ecommerce from '../../assets/ecommerce.jpg'
import Movie from '../../assets/movie.jpg'
import ET from '../../assets/et.png'
import AI from '../../assets/aii.png'

const Projects = () => {
  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef(null);

  const projectList = [
    {
      title: "Hospital Management System",
      description: "Web-based system for efficient hospital management, schedule automation, and secure patient record tracking using Django.",
      image: HMS,
      github: "https://github.com/ad-kd/Hospital-Management",
      demo: null,
      tags: ["Django", "Python", "SQLite", "Bootstrap"]
    },
    {
      title: "Mini Ecommerce Site",
      description: "Feature-rich mini e-commerce platform with product catalogs, dynamic details page, and fully functional persistent shopping cart.",
      image: Ecommerce,
      github: "https://github.com/ad-kd/Mini-Ecommerce-Site",
      demo: null,
      tags: ["React JS", "Node.js", "MongoDB", "Express"]
    },
    {
      title: "Movie Search Site",
      description: "Intuitive movie discovery application featuring real-time API integrations, TMDB queries, filter capabilities, and modern UI elements.",
      image: Movie,
      github: "https://github.com/ad-kd/Movie-Search-Site",
      demo: "https://movie-search-site-pi.vercel.app/",
      tags: ["React + Vite", "TMDB API", "Tailwind CSS", "Axios"]
    },
    {
      title: "Expense Tracker",
      description: "Full-stack personal finance application built on the MERN stack featuring budget tracking, categorization, and transaction charts.",
      image: ET,
      github: "https://github.com/ad-kd/Expense-Tracker",
      demo: null,
      tags: ["MongoDB", "Express", "React", "Node.js"]
    },
    {
      title: "AI Assistant",
      description: "Intelligent virtual assistant application that processes voice input, performs task automations, and provides AI-powered assistance.",
      image: AI,
      github: "https://github.com/ad-kd/AI-Assistant",
      demo: null,
      tags: ["Python", "AI", "NLP", "API Integration"]
    }
  ];

  // Close overlay when tapping outside project cards
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sectionRef.current && !e.target.closest('.project-card')) {
        setActiveCard(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleCardTap = (index) => {
    // Only toggle on mobile (md breakpoint = 768px)
    if (window.innerWidth < 768) {
      setActiveCard(activeCard === index ? null : index);
    }
  };

  return (
    <section id="projects" className="py-24 bg-[#0a0f1d] relative overflow-hidden" ref={sectionRef}>
      {/* Glow highlight */}
      <div className="absolute top-1/4 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 max-w-xl mx-auto mt-6">
            A hand-picked selection of fullstack web applications and academic engineering projects showcasing design systems, APIs, and databases.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projectList.map((project, index) => (
            <div 
              key={index}
              className="project-card glass-card rounded-2xl overflow-hidden flex flex-col h-full border border-slate-800/80 hover:border-indigo-500/30 group shadow-lg reveal-scale cursor-pointer md:cursor-default"
              onClick={() => handleCardTap(index)}
            >
              {/* Image Container with Hover/Tap Overlay */}
              <div className="relative h-52 overflow-hidden bg-slate-950">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:opacity-60 ${
                    activeCard === index ? 'scale-110 opacity-60' : 'opacity-80'
                  }`}
                />
                
                {/* Actions Overlay — hover on desktop, tap on mobile */}
                <div className={`absolute inset-0 bg-slate-950/80 flex flex-col items-center justify-center gap-4 transition-opacity duration-300 ${
                  activeCard === index ? 'opacity-100' : 'opacity-0 pointer-events-none md:pointer-events-auto md:group-hover:opacity-100'
                }`}>
                  {/* Tap hint text - mobile only */}
                  <span className={`text-xs text-gray-400 uppercase tracking-widest mb-2 md:hidden transition-opacity duration-300 ${
                    activeCard === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    Open Link
                  </span>

                  <div className="flex items-center gap-4">
                    <a 
                      href={project.github}
                      target="_blank" 
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-12 h-12 rounded-full bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-500 flex items-center justify-center text-white text-lg transition-transform duration-300 hover:scale-110 active:scale-110"
                      title="View Code on GitHub"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo}
                        target="_blank" 
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-12 h-12 rounded-full bg-cyan-500 hover:bg-cyan-400 active:bg-cyan-400 flex items-center justify-center text-white text-lg transition-transform duration-300 hover:scale-110 active:scale-110"
                        title="Live Demo"
                      >
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    )}
                  </div>

                  {/* Labels below icons - mobile only */}
                  <div className={`flex items-center gap-4 md:hidden transition-opacity duration-300 ${
                    activeCard === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <span className="text-xs text-gray-300 font-medium w-12 text-center">GitHub</span>
                    {project.demo && (
                      <span className="text-xs text-gray-300 font-medium w-12 text-center">Demo</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Text & Content Details */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-white tracking-wide group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      className="text-xs px-2.5 py-1 bg-indigo-500/10 text-indigo-300 border border-indigo-500/15 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <a 
            href="https://github.com/ad-kd?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-indigo-600 text-indigo-400 hover:text-white rounded-full hover:bg-indigo-600 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-300 font-semibold text-sm"
          >
            <span>View All Repositories</span>
            <i className="fas fa-arrow-right text-xs"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
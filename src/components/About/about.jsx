import React from 'react'
import americanclg from '../../assets/americanclg.jpg'

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#0a0f1d] relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Photo Card */}
          <div className="w-full lg:w-1/2 reveal-left">
            <div className="relative group rounded-2xl overflow-hidden glass-card p-2 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <img 
                src={americanclg}
                alt="Student working on laptop in library"
                className="w-full h-auto rounded-xl object-cover transition-transform duration-500 group-hover:scale-[1.02] shadow-inner" 
              />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md border border-slate-800/40 rounded-xl p-5 z-20">
                <h3 className="text-white text-lg font-semibold tracking-wide flex items-center gap-2">
                  <i className="fas fa-graduation-cap text-indigo-400"></i>
                  Pursuing Excellence in Computer Science
                </h3>
              </div>
            </div>
          </div>

          {/* Right Side: Education & Background */}
          <div className="w-full lg:w-1/2 reveal-right">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white tracking-wide">
              Education & Background
            </h3>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              I am currently pursuing my Master of Computer Applications (MCA) at Kamaraj College, Madurai. 
              My academic path is fueled by curiosity, a relentless work ethic, and a passion for solving complex computational problems.
            </p>
            
            <p className="text-gray-400 mb-8 leading-relaxed">
              Beyond standard university coursework, I actively engage in open-source development, coding hackathons, and designing modular game environments. My mission is to build software products that bridge complex science with elegant user solutions.
            </p>

            {/* Micro Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card p-5 rounded-xl border border-slate-800/60 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                      <i className="fas fa-university text-sm"></i>
                    </div>
                    <span className="font-semibold text-white tracking-wide text-sm">The American College</span>
                  </div>
                  <p className="text-xs text-indigo-300 font-medium uppercase tracking-wider">B.Sc Computer Science</p>
                </div>
                <span className="text-xs text-gray-500 mt-2 block">Graduated</span>
              </div>

              <div className="glass-card p-5 rounded-xl border border-slate-800/60 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                      <i className="fas fa-university text-sm"></i>
                    </div>
                    <span className="font-semibold text-white tracking-wide text-sm">Madurai Kamaraj College</span>
                  </div>
                  <p className="text-xs text-indigo-300 font-medium uppercase tracking-wider">MCA</p>
                </div>
                <span className="text-xs text-cyan-400 font-medium mt-2 block">Currently Pursuing</span>
              </div>

              <div className="glass-card p-5 rounded-xl border border-slate-800/60 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                      <i className="fas fa-code text-sm"></i>
                    </div>
                    <span className="font-semibold text-white tracking-wide text-sm">Experience</span>
                  </div>
                  <p className="text-xs text-indigo-300 font-medium uppercase tracking-wider">2+ Years programming</p>
                </div>
                <span className="text-xs text-gray-500 mt-2 block">Personal & Academic projects</span>
              </div>

              <div className="glass-card p-5 rounded-xl border border-slate-800/60 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                      <i className="fas fa-medal text-sm"></i>
                    </div>
                    <span className="font-semibold text-white tracking-wide text-sm">Projects Done</span>
                  </div>
                  <p className="text-xs text-indigo-300 font-medium uppercase tracking-wider">4+ Key Systems Completed</p>
                </div>
                <span className="text-xs text-gray-500 mt-2 block">Fullstack & ML focused</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About
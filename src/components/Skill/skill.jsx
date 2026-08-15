import React from 'react'

const Skill = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: "fas fa-code",
      color: "text-indigo-400 bg-indigo-500/10",
      skills: [
        { name: "C/C++", icon: "fas fa-terminal", iconColor: "text-blue-400" },
        { name: "Python", icon: "fab fa-python", iconColor: "text-yellow-400" },
        { name: "JavaScript", icon: "fab fa-js", iconColor: "text-yellow-300" },
        { name: "SQL", icon: "fas fa-database", iconColor: "text-indigo-300" }
      ]
    },
    {
      title: "Web Dev",
      icon: "fas fa-globe",
      color: "text-cyan-400 bg-cyan-500/10",
      skills: [
        { name: "React", icon: "fab fa-react", iconColor: "text-cyan-400 animate-spin-slow" },
        { name: "Node.js", icon: "fab fa-node-js", iconColor: "text-emerald-400" },
        { name: "MongoDB", icon: "fas fa-leaf", iconColor: "text-green-500" },
        { name: "Django", icon: "fab fa-python", iconColor: "text-emerald-600" },
        { name: "HTML & CSS", icon: "fab fa-html5", iconColor: "text-orange-500" }
      ]
    },
    {
      title: "Data Science",
      icon: "fas fa-chart-line",
      color: "text-purple-400 bg-purple-500/10",
      skills: [
        { name: "Pandas", icon: "fas fa-table", iconColor: "text-indigo-400" },
        { name: "NumPy", icon: "fas fa-calculator", iconColor: "text-purple-400" }
      ]
    },
    {
      title: "Tools",
      icon: "fas fa-cogs",
      color: "text-pink-400 bg-pink-500/10",
      skills: [
        { name: "Git", icon: "fab fa-git-alt", iconColor: "text-orange-500" },
        { name: "Linux", icon: "fab fa-linux", iconColor: "text-slate-300" },
        { name: "VS Code", icon: "fas fa-code-branch", iconColor: "text-sky-400" },
        { name: "Figma", icon: "fab fa-figma", iconColor: "text-pink-400" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-[#080d18] relative overflow-hidden">
      {/* Background glowing blob */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white tracking-tight">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 max-w-xl mx-auto mt-6">
            Here are the technologies I've worked with throughout my academic career and personal projects.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="glass-card rounded-2xl p-6 border border-slate-800/80 hover:border-indigo-500/30 shadow-lg reveal-scale flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl ${category.color} flex items-center justify-center`}>
                    <i className={`${category.icon} text-lg`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Tags List */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-900/60 border border-slate-800/80 text-gray-300 rounded-xl text-sm transition-all duration-300 hover:bg-slate-800/80 hover:text-white hover:border-slate-700/80 cursor-default"
                    >
                      <i className={`${skill.icon} ${skill.iconColor}`}></i>
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skill
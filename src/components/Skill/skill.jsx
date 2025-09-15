import React from 'react'

const skill = () => {
    return (
        <div>
            <section id="skills" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Technical <span
                            className="gradient-text">Skills</span></h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto mt-6">Here are the technologies I've worked with throughout my
                            academic career and personal projects.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 card-hover">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                                    <i className="fas fa-code text-indigo-500"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800">Programming</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">C/C++</span>
                                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Python</span>
                                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">JavaScript</span>
                                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">SQL</span>

                            </div>
                        </div>

                        
                        <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 card-hover">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                                    <i className="fas fa-globe text-indigo-500"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800">Web Dev</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">React</span>
                                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Node.js</span>
                                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">MongoDB</span>
                            </div>
                        </div>

                       
                        <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 card-hover">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                                    <i className="fas fa-chart-line text-indigo-500"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800">Data Science</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Pandas</span>
                                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">NumPy</span>
                            </div>
                        </div>

                        
                        <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 card-hover">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                                    <i className="fas fa-cogs text-indigo-500"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800">Tools</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Git</span>
                                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Linux</span>
                                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">VS Code</span>
                                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Figma</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default skill
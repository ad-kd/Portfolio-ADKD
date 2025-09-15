import React from 'react'
import americanclg from '../../assets/americanclg.jpg'

const about = () => {
    return (
        <div>
            <section id="about" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">About <span
                            className="gradient-text">Me</span></h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto"></div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2">
                            <div className="relative rounded-xl overflow-hidden shadow-xl">
                                <img src={americanclg}
                                    alt="Student working on laptop in a modern university library with open textbooks and notebooks"
                                    className="w-full h-auto" />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                    <h3 className="text-white text-xl font-medium">Pursuing Excellence in Computer Science</h3>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2">
                            <h3 className="text-2xl font-bold mb-6 text-gray-800">Education & Background</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                I'm currently pursuing my MCA at Kamaraj College, Madurai. My academic journey has been driven
                                by curiosity and a passion for solving complex problems through technology.
                            </p>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Outside of academics, I actively participate in coding competitions, Game Development and
                                open-source projects. My goal is to bridge the gap between theoretical computer science concepts
                                and practical applications that can improve people's lives.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <div className="flex items-center mb-2">
                                        <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mr-2">
                                            <i className="fas fa-university text-indigo-500 text-xs"></i>
                                        </div>
                                        <span className="font-medium">The American College</span>
                                    </div>
                                    <p className="text-sm text-gray-500">B.Sc Computer Science</p>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <div className="flex items-center mb-2">
                                        <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mr-2">
                                            <i className="fas fa-university text-indigo-500 text-xs"></i>
                                        </div>
                                        <span className="font-medium">Madurai Kamaraj College</span>
                                    </div>
                                    <p className="text-sm text-gray-500">MCA</p>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <div className="flex items-center mb-2">
                                        <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mr-2">
                                            <i className="fas fa-code text-indigo-500 text-xs"></i>
                                        </div>
                                        <span className="font-medium">2+ Years</span>
                                    </div>
                                    <p className="text-sm text-gray-500">Programming Experience</p>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <div className="flex items-center mb-2">
                                        <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mr-2">
                                            <i className="fas fa-medal text-indigo-500 text-xs"></i>
                                        </div>
                                        <span className="font-medium">4 Projects</span>
                                    </div>
                                    <p className="text-sm text-gray-500">Completed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default about
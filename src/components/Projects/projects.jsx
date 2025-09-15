import React from 'react'
import HMS from '../../assets/HMS.jpg'
import Ecommerce from '../../assets/ecommerce.jpg'
import Movie from '../../assets/movie.jpg'

const projects = () => {
    return (
        <div>
            <section id="projects" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Featured <span
                            className="gradient-text">Projects</span></h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto mt-6">Here are some of my academic and personal projects that
                            showcase my technical abilities.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        <div
                            className="project-card bg-gray-50 rounded-xl overflow-hidden shadow-lg transition-all duration-300 card-hover">
                            <div className="relative h-48 overflow-hidden">
                                <img src={HMS} className="w-full h-full object-cover" />
                                <div
                                    className="project-overlay absolute inset-0 bg-indigo-600/90 flex items-center justify-center opacity-0 transition-opacity duration-300">
                                    <a href="https://github.com/ad-kd/Hospital-Management"
                                        className="text-white px-4 py-2 border-2 border-white rounded-full hover:bg-white hover:text-indigo-600 transition-all duration-300">View
                                        Details</a>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-gray-800">Hospital Management System</h3>
                                <p className="text-gray-600 mb-4">Web-based system for efficient hospital management and patient
                                    record tracking using modern technologies.</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-800 rounded">Django</span>
                                    <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-800 rounded">Python</span>
                                    <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-800 rounded">SQLite</span>
                                </div>
                            </div>
                        </div>

                        <div
                            className="project-card bg-gray-50 rounded-xl overflow-hidden shadow-lg transition-all duration-300 card-hover">
                            <div className="relative h-48 overflow-hidden">
                                <img src={Ecommerce} className="w-full h-full object-cover" />
                                <div
                                    className="project-overlay absolute inset-0 bg-indigo-600/90 flex items-center justify-center opacity-0 transition-opacity duration-300">
                                    <a href="https://github.com/ad-kd/Mini-Ecommerce-Site"
                                        className="text-white px-4 py-2 border-2 border-white rounded-full hover:bg-white hover:text-indigo-600 transition-all duration-300">View
                                        Details</a>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-gray-800">Mini Ecommerce Site</h3>
                                <p className="text-gray-600 mb-4">Feature-rich mini e-commerce platform with listing product, detail
                                    page and shopping cart functionality, using modern web technologies.</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-800 rounded">React JS</span>
                                    <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-800 rounded">Mongo DB</span>
                                </div>
                            </div>
                        </div>

                        <div
                            className="project-card bg-gray-50 rounded-xl overflow-hidden shadow-lg transition-all duration-300 card-hover">
                            <div className="relative h-48 overflow-hidden">
                                <img src={Movie} className="w-full h-full object-cover" />
                                <div
                                    className="project-overlay absolute inset-0 bg-indigo-600/90 flex items-center justify-center opacity-0 transition-opacity duration-300">
                                    <a href="https://github.com/ad-kd/Movie-Search-Site"
                                        className="text-white px-4 py-2 border-2 border-white rounded-full hover:bg-white hover:text-indigo-600 transition-all duration-300">View
                                        Details</a>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-gray-800">Movie Search Site</h3>
                                <p className="text-gray-600 mb-4">Intuitive movie search web application with real-time API
                                    integration, film info(date), and clean user interface. </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-800 rounded">React + VITE</span>
                                    <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-800 rounded">API(TMDB)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-6">
                        <a href="https://github.com/ad-kd?tab=repositories"
                            className="inline-block px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-300 font-medium">
                            View All Projects
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default projects
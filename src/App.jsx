import React, { useEffect } from 'react'
import Navbar from './components/Navbar/navbar.jsx'
import Footer from './components/Footer/footer.jsx'
import Hero from './components/Hero/hero.jsx'
import About from './components/About/about.jsx'
import Skill from './components/Skill/skill.jsx'
import Projects from './components/Projects/projects.jsx'
import Contact from './components/Contact/contact.jsx'



const App = () => {

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Animations on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(elem => {
      observer.observe(elem);
    });
    
  }, [])

  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Navbar />
      <About />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
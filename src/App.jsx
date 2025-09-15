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
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(elem => {
      observer.observe(elem);
    });

    

    // Form submission
    // const contactForm = document.querySelector('form');
    // if (contactForm) {
    //   contactForm.addEventListener('submit', (e) => {
    //     e.preventDefault();
    //     // alert('Thank you for your message! I will get back to you soon.');
    //     contactForm.reset();
    //   });
    // }
  }, [])

  return (
    <div>
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
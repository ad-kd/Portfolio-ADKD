import React, { useState, useEffect } from "react";
import me from "../../assets/me.png";

const Hero = () => {
  const words = ["Software Developer", "Full Stack Developer", "MCA Student", "Tech Enthusiast"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentWord = words[currentWordIndex];
    
    if (isDeleting) {
      // Deleting text
      timer = setTimeout(() => {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
      }, 50);
    } else {
      // Typing text
      timer = setTimeout(() => {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      }, 100);
    }

    // Switch modes
    if (!isDeleting && currentText === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), 1500); // pause at full word
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <header
      id="hero"
      className="relative min-h-screen overflow-hidden flex items-center justify-center text-white
      bg-[#090d16]"
    >
      {/* ===== Ambient Glow & Background Mesh ===== */}
      <div className="absolute inset-0 z-0">
        {/* Soft colorful radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.22),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.18),transparent_55%)]" />

        {/* High-tech grid overlay */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] 
          bg-[size:40px_40px] opacity-60" 
        />

        {/* Floating animated blobs */}
        <div className="absolute top-1/4 left-10 w-80 h-80 bg-indigo-600/15 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[120px] animate-float-delayed" />
      </div>

      {/* ===== Main Hero Layout ===== */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-16 py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* ===== Left Side Text Section ===== */}
          <div className="w-full lg:w-3/5 text-center lg:text-left animate-fade-in-up">
            {/* Intro Tag */}
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping"></span>
              Open to Opportunities
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl 2xl:text-7xl font-extrabold leading-tight mb-4">
              Hi, I’m{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400
              bg-clip-text text-transparent animate-gradient">
                Adhithya K
              </span>
            </h1>

            {/* Dynamic Typewriter Title */}
            <div className="text-xl sm:text-2xl md:text-3xl font-medium tracking-wide mb-6 h-10 flex items-center justify-center lg:justify-start">
              <span className="text-gray-400 mr-2">I am a</span>
              <span className="text-cyan-400 font-semibold border-r-2 border-cyan-400 animate-pulse pr-1">
                {currentText}
              </span>
            </div>

            <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10">
              Exploring <span className="text-indigo-400 font-medium">software development</span>,{" "}
              <span className="text-indigo-400 font-medium">machine learning</span>, and{" "}
              <span className="text-indigo-400 font-medium">web technologies</span>. I craft robust and creative digital experiences that merge academic foundation with real-world practicality.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 rounded-full font-medium transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:scale-105"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="px-8 py-3 bg-transparent border border-gray-700 hover:border-indigo-500 rounded-full font-medium transition-all duration-300 text-gray-300 hover:text-white"
              >
                Contact Me
              </a>

              <a
                href="/resume.pdf"
                download="Adhithya-K-Resume.pdf"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-full font-medium transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:scale-105"
              >
                <i className="fas fa-download mr-2 text-sm"></i> Resume
              </a>
            </div>
          </div>

          {/* ===== Right Side Avatar / Illustration ===== */}
          <div className="w-full lg:w-2/5 flex justify-center animate-fade-in-up">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] group">
              {/* Spinning Accent Border Ring */}
              <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 animate-spin-slow opacity-80">
                <div className="w-full h-full rounded-full bg-[#090d16]" />
              </div>

              {/* Glowing Ambient Outer Circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 blur-2xl opacity-25 group-hover:opacity-40 transition-opacity duration-500" />

              {/* Portrait Image Container */}
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden p-3">
                <img
                  src={me}
                  alt="Adhithya K"
                  className="w-full h-full rounded-full object-cover transition-transform duration-500 group-hover:scale-105 bg-slate-900"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ===== Scroll Down Indicator ===== */}
      <div className="absolute bottom-8 left-0 right-0 text-center hidden md:flex flex-col items-center justify-center z-10">
        <a
          href="#about"
          className="text-gray-500 hover:text-indigo-400 transition-colors duration-300 flex flex-col items-center gap-1.5"
        >
          <span className="text-xs tracking-widest uppercase">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-3 bg-indigo-400 rounded-full animate-bounce"></div>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Hero;

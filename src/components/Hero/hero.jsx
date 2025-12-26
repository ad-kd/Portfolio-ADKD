import React from "react";
import me from "../../assets/me.png";

const Hero = () => {
  return (
    <header
      id="hero"
      className="relative min-h-screen overflow-hidden flex items-center justify-center text-white
      bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    >
      {/* ===== Animated Background ===== */}
      <div className="absolute inset-0">
        {/* soft radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.18),transparent_60%)] animate-[pulse_6s_ease-in-out_infinite]" />

        {/* grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
        bg-[size:48px_48px] opacity-40" />

        {/* floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* ===== Main Content ===== */}
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-16 2xl:px-24">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between py-24 gap-16">

          {/* ===== Text Section ===== */}
          <div className="w-full lg:w-1/2 text-center lg:text-left animate-fade-in-up">

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl 2xl:text-8xl font-extrabold leading-tight mb-6">
              Hi, I’m{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-600
              bg-clip-text text-transparent animate-gradient">
                Adhithya K
              </span>
            </h1>

            <div className="text-xl sm:text-2xl md:text-3xl 2xl:text-4xl font-medium text-indigo-300 tracking-wide mb-6">
              Software Developer & CS Student
            </div>

            <p
              className="text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray-300
              max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10
              backdrop-blur-sm bg-black/20 rounded-xl p-4"
            >
              Exploring{" "}
              <span className="text-indigo-400">software development</span>,{" "}
              <span className="text-indigo-400">machine learning</span>, and{" "}
              <span className="text-indigo-400">web technologies</span>.  
              I love building{" "}
              <span className="text-indigo-300">creative solutions</span> that make an impact.
            </p>

            {/* ===== Buttons (UNCHANGED) ===== */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 2xl:gap-6">
              <a
                href="#projects"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full font-medium
                transition-all duration-300 shadow-lg hover:scale-105"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="px-6 py-3 bg-transparent border-2 border-indigo-400
                hover:bg-indigo-500 hover:text-white rounded-full font-medium
                transition-all duration-300"
              >
                Contact Me
              </a>

              <a
                href="/resume.pdf"
                download="Adhithya-K-Resume.pdf"
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600
                hover:from-indigo-600 hover:to-purple-500 rounded-full font-medium
                transition-all duration-300 shadow-lg hover:scale-105"
              >
                Resume
              </a>
            </div>
          </div>

          {/* ===== Image Section ===== */}
          <div className="w-full lg:w-1/2 flex justify-center animate-fade-in-up">
            <div
              className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80
              lg:w-96 lg:h-96 2xl:w-[420px] 2xl:h-[420px]
              rounded-full overflow-hidden group
              shadow-[0_0_80px_rgba(99,102,241,0.35)]"
            >
              {/* rotating gradient ring */}
              <div className="absolute inset-0 rounded-full p-[6px]
              bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500
              animate-spin-slow">
                <div className="w-full h-full rounded-full bg-gray-900" />
              </div>

              <img
                src={me}
                alt="Profile"
                className="relative z-10 w-full h-full rounded-full object-cover
                transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ===== Scroll Indicator ===== */}
      <div className="absolute bottom-10 left-0 right-0 text-center animate-bounce">
        <a
          href="#about"
          className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300 text-3xl"
        >
          ↓
        </a>
      </div>
    </header>
  );
};

export default Hero;

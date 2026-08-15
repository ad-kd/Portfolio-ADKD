import React, { useState } from 'react'

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending message...");
    const formData = new FormData(event.target);

    formData.append("access_key", "30392ce0-b56f-420a-9adc-bf54a3c96add");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();

      if (data.success) {
        setResult("Thank you! Your message has been sent successfully.");
        event.target.reset();
      } else {
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#080d18] relative overflow-hidden">
      {/* Background glow circle */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white tracking-tight">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="max-w-lg mx-auto mt-6 text-gray-400">
            Have a project in mind, looking for collaborations, or simply want to chat about tech? Drop a message!
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column: Contact Form */}
          <div className="w-full lg:w-3/5 reveal-left">
            <form className="space-y-6" onSubmit={onSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    className="w-full px-4 py-3.5 rounded-xl glass-input placeholder-gray-500"
                    placeholder="Your Name" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    className="w-full px-4 py-3.5 rounded-xl glass-input placeholder-gray-500"
                    placeholder="you@example.com" 
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  className="w-full px-4 py-3.5 rounded-xl glass-input placeholder-gray-500"
                  placeholder="Collaboration details" 
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  rows="6" 
                  name="message"
                  className="w-full px-4 py-3.5 rounded-xl glass-input placeholder-gray-500 resize-none"
                  placeholder="Hi Adhithya, let's build something awesome..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white rounded-full font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:scale-105 disabled:opacity-50 disabled:pointer-events-none"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {result && (
                <div className={`mt-4 p-4 rounded-xl text-sm ${
                  result.includes("successfully") 
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                    : 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/20'
                }`}>
                  {result}
                </div>
              )}
            </form>
          </div>

          {/* Right Column: Contact Details Cards */}
          <div className="w-full lg:w-2/5 reveal-right">
            <div className="glass-card rounded-2xl p-8 h-full flex flex-col justify-between border border-slate-800/80">
              <div>
                <h3 className="text-xl font-bold mb-8 text-white tracking-wide">Contact Details</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mt-1 shrink-0">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-300 text-sm mb-1">Email</h4>
                      <a href="mailto:12218adhithyaksnm@gmail.com" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                        12218adhithyaksnm@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mt-1 shrink-0">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-300 text-sm mb-1">Location</h4>
                      <p className="text-gray-400 text-sm">Madurai, Tamil Nadu, India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mt-1 shrink-0">
                      <i className="fas fa-calendar-alt"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-300 text-sm mb-1">Availability</h4>
                      <p className="text-gray-400 text-sm">Available for Summer 2027 Internships</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-12">
                <h4 className="font-semibold text-gray-300 text-sm mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  {[
                    { icon: "fab fa-linkedin-in", url: "https://www.linkedin.com/in/adhithya-k-2005ad?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
                    { icon: "fab fa-github", url: "https://github.com/ad-kd/" },
                    { icon: "fab fa-twitter", url: "https://x.com/AdhithyaK8" },
                    { icon: "fab fa-instagram", url: "https://www.instagram.com/ad_editz.01/" }
                  ].map((social, idx) => (
                    <a 
                      key={idx}
                      href={social.url} 
                      target="_blank" 
                      rel="noreferrer"
                      className="w-10 h-10 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all duration-300 text-sm"
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
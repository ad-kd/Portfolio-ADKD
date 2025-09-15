import React, { useState } from 'react'

const contact = () => {

     const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "dcacf076-fc6a-4b1c-9edd-0bc1d2975f02");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };


    return (
        <div>
            <section id="contact" className="py-20 bg-indigo-600 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="gradient-text">Touch</span></h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-white to-cyan-200 mx-auto"></div>
                        <p className="max-w-lg mx-auto mt-6 text-indigo-100">Looking for collaborations, internships, or just want
                            to chat about tech? Feel free to reach out!</p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="lg:w-1/2">
                            <form className="space-y-6" onSubmit={onSubmit}>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Your Name</label>
                                        <input type="text" id="name" name='name'
                                            className="w-full px-4 py-3 rounded-lg bg-indigo-700/50 border border-indigo-500 focus:border-indigo-300 focus:outline-none"
                                            placeholder="Your Name"/>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Your Email</label>
                                        <input type="email" id="email" name='email'
                                            className="w-full px-4 py-3 rounded-lg bg-indigo-700/50 border border-indigo-500 focus:border-indigo-300 focus:outline-none"
                                            placeholder="you@example.com"/>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Subject</label>
                                    <input type="text" id="subject" name='subject'
                                        className="w-full px-4 py-3 rounded-lg bg-indigo-700/50 border border-indigo-500 focus:border-indigo-300 focus:outline-none"
                                        placeholder="Project Inquiry"/>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Your Message</label>
                                    <textarea id="message" rows="6" name='message'
                                        className="w-full px-4 py-3 rounded-lg bg-indigo-700/50 border border-indigo-500 focus:border-indigo-300 focus:outline-none"
                                        placeholder="Hi Adhi, I'd like to discuss..."></textarea>
                                </div>
                                <button type="submit" 
                                    className="px-6 py-3 bg-white text-indigo-600 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg w-full md:w-auto">
                                    Send Message
                                </button>
                            </form>
                            <span>{result}</span>
                        </div>

                        <div className="lg:w-1/2">
                            <div className="bg-indigo-700/30 backdrop-blur-sm rounded-xl p-8 h-full border border-indigo-400/30">
                                <h3 className="text-xl font-bold mb-6">Contact Information</h3>

                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div
                                            className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center mr-4 mt-1">
                                            <i className="fas fa-envelope text-white"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-medium mb-1">Email</h4>
                                            <p className="text-indigo-100">12218adhithyaksnm@gmail.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div
                                            className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center mr-4 mt-1">
                                            <i className="fas fa-map-marker-alt text-white"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-medium mb-1">Location</h4>
                                            <p className="text-indigo-100">Madurai, Tamil Nadu</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div
                                            className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center mr-4 mt-1">
                                            <i className="fas fa-calendar-alt text-white"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-medium mb-1">Availability</h4>
                                            <p className="text-indigo-100">Available for Summer 2027 internships</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12">
                                    <h4 className="font-medium mb-4">Connect on Social Media</h4>
                                    <div className="flex space-x-4">
                                        <a href="https://www.linkedin.com/in/adhithya-k-2005ad?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                            className="w-10 h-10 rounded-full bg-indigo-700/50 border border-indigo-500 flex items-center justify-center hover:bg-indigo-500 transition-all duration-300">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                        <a href="https://github.com/ad-kd/"
                                            className="w-10 h-10 rounded-full bg-indigo-700/50 border border-indigo-500 flex items-center justify-center hover:bg-indigo-500 transition-all duration-300">
                                            <i className="fab fa-github"></i>
                                        </a>
                                        <a href="https://x.com/AdhithyaK8"
                                            className="w-10 h-10 rounded-full bg-indigo-700/50 border border-indigo-500 flex items-center justify-center hover:bg-indigo-500 transition-all duration-300">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                        <a href="https://www.instagram.com/ad_editz.01/"
                                            className="w-10 h-10 rounded-full bg-indigo-700/50 border border-indigo-500 flex items-center justify-center hover:bg-indigo-500 transition-all duration-300">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default contact
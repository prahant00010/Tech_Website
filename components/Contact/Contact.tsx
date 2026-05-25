"use client";

import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent successfully.`);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="bg-white py-16">
      <div className="w-[90%] md:w-[80%] mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="border-2 px-4 py-1 rounded-lg bg-rose-50 text-rose-500 font-bold text-sm tracking-wide uppercase">
            Contact Us
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-950 mt-4 leading-tight">
            Get in Touch with Our Team
          </h1>
          <p className="text-gray-600 mt-4 text-base">
            Have questions about pricing, integrations, or scaling your project? Drop us a line, and our startup specialists will respond shortly.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details (Left) */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-2xl font-bold text-blue-950">
              Why Contact TechDev?
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Unlock enterprise scale, seamless workflow builders, and custom solution strategies tailored specifically to your product lifecycle.
            </p>

            <div className="space-y-6">
              {/* Phone Card */}
              <div className="flex items-center space-x-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-500 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-500/10 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <FaPhoneAlt className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Call Us</h3>
                  <p className="text-lg font-bold text-blue-950 mt-1">+1 (800) 123-4567</p>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex items-center space-x-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-pink-500 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-pink-500/10 text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-all duration-300">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Email Us</h3>
                  <p className="text-lg font-bold text-blue-950 mt-1">support@techdev.com</p>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-center space-x-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-purple-500 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-purple-500/10 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                  <FaMapMarkerAlt className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Visit Us</h3>
                  <p className="text-lg font-bold text-blue-950 mt-1">San Francisco, California</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card (Right) */}
          <div className="lg:col-span-7 bg-gray-50 border border-gray-100 rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-blue-950 mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full relative inline-flex items-center justify-center px-6 py-3.5 overflow-hidden text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

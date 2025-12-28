"use client";

import { useState } from "react";
import { Mail, Send, User, MessageSquare, Loader2 } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <div className="w-[90%] max-w-6xl mx-auto my-20 text-[#B5C6E0]">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-poppins-bold mb-4">
          Get In Touch
        </h1>
        <p className="text-lg md:text-xl font-poppins-regular text-[#B5C6E0]/70">
          Let&apos;s discuss how I can help with your cloud infrastructure needs
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-[#b5c6e015] p-8 rounded-xl border border-[#b5c6e020]">
          <h2 className="text-2xl md:text-3xl font-poppins-semi-bold mb-6">
            Send a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-poppins-medium mb-2"
              >
                Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#B5C6E0]/50" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 bg-[#b5c6e010] border border-[#b5c6e020] rounded-lg focus:outline-none focus:border-[#b5c6e050] transition-all font-poppins-regular"
                  placeholder="Your name"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-poppins-medium mb-2"
              >
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#B5C6E0]/50" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 bg-[#b5c6e010] border border-[#b5c6e020] rounded-lg focus:outline-none focus:border-[#b5c6e050] transition-all font-poppins-regular"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-poppins-medium mb-2"
              >
                Message
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-[#B5C6E0]/50" />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full pl-12 pr-4 py-3 bg-[#b5c6e010] border border-[#b5c6e020] rounded-lg focus:outline-none focus:border-[#b5c6e050] transition-all font-poppins-regular resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
            </div>

            {submitStatus === "success" && (
              <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <p className="text-green-400 font-poppins-medium text-sm">
                  Message sent successfully! I&apos;ll get back to you soon.
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#B5C6E0] text-[#0a0a0a] py-3 px-6 rounded-lg font-poppins-semi-bold hover:bg-[#B5C6E0]/90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>

        {/* Contact Information & Links */}
        <div className="space-y-8">
          {/* Quick Connect */}
          <div className="bg-[#b5c6e015] p-8 rounded-xl border border-[#b5c6e020]">
            <h2 className="text-2xl md:text-3xl font-poppins-semi-bold mb-6">
              Quick Connect
            </h2>
            <div className="space-y-4">
              <a
                href="mailto:m.qasimnauman@gmail.com"
                className="flex items-center gap-4 p-4 bg-[#b5c6e010] rounded-lg hover:bg-[#b5c6e020] transition-all group"
              >
                <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-poppins-semi-bold">Email</p>
                  <p className="text-sm text-[#B5C6E0]/70 font-poppins-regular">
                    m.qasimnauman@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/mqasimnauman"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#b5c6e010] rounded-lg hover:bg-[#b5c6e020] transition-all group"
              >
                <FaLinkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-poppins-semi-bold">LinkedIn</p>
                  <p className="text-sm text-[#B5C6E0]/70 font-poppins-regular">
                    /in/mqasimnauman
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/qasimnauman"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#b5c6e010] rounded-lg hover:bg-[#b5c6e020] transition-all group"
              >
                <FaGithub className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-poppins-semi-bold">GitHub</p>
                  <p className="text-sm text-[#B5C6E0]/70 font-poppins-regular">
                    @qasimnauman
                  </p>
                </div>
              </a>

              <a
                href="https://x.com/qasim_nauman_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#b5c6e010] rounded-lg hover:bg-[#b5c6e020] transition-all group"
              >
                <FaSquareXTwitter className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-poppins-semi-bold">X (Twitter)</p>
                  <p className="text-sm text-[#B5C6E0]/70 font-poppins-regular">
                    @qasim_nauman_
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Schedule a Call */}
          <div className="bg-[#b5c6e015] p-8 rounded-xl border border-[#b5c6e020]">
            <h2 className="text-2xl md:text-3xl font-poppins-semi-bold mb-4">
              Schedule a Call
            </h2>
            <p className="text-sm text-[#B5C6E0]/70 font-poppins-regular mb-6">
              Book a 30-minute consultation to discuss your project
            </p>
            <a
              href="https://cal.com/qasimnauman"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#B5C6E0] text-[#0a0a0a] py-3 px-6 rounded-lg font-poppins-semi-bold hover:bg-[#B5C6E0]/90 transition-all duration-300 text-center"
            >
              Book on Cal.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
<section
  id="contact"
  className="pt-20 pb-8 px-6"
>
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-blue-500 font-semibold tracking-[0.3em]">
            CONTACT US
          </span>

          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            Get In
            <span className="block text-blue-500">
              Touch Today
            </span>
          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
            Need emergency plumbing services or a free quote?
            Contact our team and we'll get back to you quickly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl">

            <h3 className="text-3xl font-bold mb-10">
              Contact Information
            </h3>

            <div className="space-y-8">

              <div className="flex items-center gap-4">
                <Phone className="text-blue-500" />
                <span>+1 (555) 123-4567</span>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-blue-500" />
                <span>safakhairkha10@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-blue-500" />
                <span>New York, USA</span>
              </div>

              <div className="flex items-center gap-4">
                <Clock className="text-blue-500" />
                <span>24/7 Emergency Service</span>
              </div>

            </div>

            <div className="mt-10 p-6 rounded-2xl bg-blue-600/10 border border-blue-500/20">
              <h4 className="font-semibold text-blue-400">
                Emergency Response
              </h4>

              <p className="text-slate-400 mt-2">
                Average response time: 25 Minutes
              </p>
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl">

            <form
              action="https://formsubmit.co/safakhairkha10@gmail.com"
              method="POST"
              className="space-y-5"
            >
              {/* Change this after deployment */}
              <input
                type="hidden"
                name="_next"
                value="http://localhost:3000/thank-you"
              />

              <input
                type="hidden"
                name="_subject"
                value="New Plumbing Website Lead"
              />

              <input
                type="hidden"
                name="_captcha"
                value="false"
              />

              <input
                type="hidden"
                name="_template"
                value="table"
              />

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full p-4 rounded-xl bg-slate-900 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full p-4 rounded-xl bg-slate-900 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full p-4 rounded-xl bg-slate-900 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition"
              />

              <textarea
                name="message"
                placeholder="How can we help?"
                rows={6}
                required
                className="w-full p-4 rounded-xl bg-slate-900 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition resize-none"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 transition-all duration-300 py-4 rounded-xl font-semibold text-lg hover:scale-[1.02]"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
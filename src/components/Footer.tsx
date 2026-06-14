"use client";

import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-12">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold">
              PLUMB<span className="text-blue-500">PRO</span>
            </h2>

            <p className="text-slate-400 mt-4 leading-relaxed">
              Premium plumbing services available
              24/7 for residential and commercial
              clients.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-xl mb-4">
              Services
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>Emergency Plumbing</li>
              <li>Pipe Repairs</li>
              <li>Leak Detection</li>
              <li>Bathroom Renovations</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-xl mb-4">
              Contact
            </h3>

            <div className="space-y-4 text-slate-400">

              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span>safakhairkha10@gmail.com</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>New York, USA</span>
              </div>

            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-xl mb-4">
              Follow Us
            </h3>

            <div className="space-y-3 text-slate-400">
              <p className="hover:text-blue-500 cursor-pointer transition">
                Facebook
              </p>

              <p className="hover:text-blue-500 cursor-pointer transition">
                Instagram
              </p>

              <p className="hover:text-blue-500 cursor-pointer transition">
                LinkedIn
              </p>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-slate-500">
          © 2026 PLUMBPRO. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}
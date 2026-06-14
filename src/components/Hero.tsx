"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16">

      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-blue-500/20 rounded-full blur-[120px] md:blur-[180px]" />

      <div className="absolute bottom-0 left-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-cyan-500/10 rounded-full blur-[100px] md:blur-[150px]" />

      <div className="absolute bottom-0 right-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-blue-600/10 rounded-full blur-[100px] md:blur-[150px]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 text-center">

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-flex mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-xs md:text-sm"
        >
          Licensed • Insured • Certified • Guaranteed
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight"
        >
          Fast Reliable

          <span className="block text-blue-500">
            Plumbing
          </span>

          Services 24/7
        </motion.h1>

        <p className="max-w-3xl mx-auto mt-6 text-base md:text-xl text-slate-300 px-2">
          Trusted by thousands of homeowners and businesses for emergency
          plumbing, repairs, installations and maintenance.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">

          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 transition-all duration-300"
          >
            Get Free Quote
          </a>

    <a
  href="#contact"
  className="
    px-8 py-4
    rounded-full
    text-white
    font-semibold
    shadow-lg
    shadow-blue-500/30
    hover:scale-105
    hover:shadow-blue-500/50
    transition-all
    duration-300
  "
  style={{
    background:
      "linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)",
  }}
>
  Get Free Quote
</a>
        </div>

      </div>
    </section>
  );
}
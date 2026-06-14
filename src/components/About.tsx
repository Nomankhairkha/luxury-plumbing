"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-500 font-semibold tracking-widest">
              ABOUT US
            </span>

            <h2 className="text-5xl md:text-6xl font-bold mt-4">
              Trusted Plumbing
              <span className="block text-blue-500">
                Experts Since 2009
              </span>
            </h2>

            <p className="mt-8 text-slate-400 text-lg leading-relaxed">
              We provide premium plumbing services for residential,
              commercial, and industrial clients with a focus on
              reliability, speed, safety, and exceptional workmanship.
            </p>

            <div className="grid grid-cols-2 gap-8 mt-12">

              <div>
                <h3 className="text-5xl font-bold text-blue-500">
                  15+
                </h3>
                <p className="mt-2 text-slate-400">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-bold text-blue-500">
                  5000+
                </h3>
                <p className="mt-2 text-slate-400">
                  Projects Completed
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-bold text-blue-500">
                  50+
                </h3>
                <p className="mt-2 text-slate-400">
                  Expert Technicians
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-bold text-blue-500">
                  99%
                </h3>
                <p className="mt-2 text-slate-400">
                  Customer Satisfaction
                </p>
              </div>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-500/20 blur-[120px]" />

            <div className="relative bg-white/5 border border-white/10 rounded-[40px] h-[500px] md:h-[600px] overflow-hidden">

              <img
                src="/images/team.jpg"
                alt="Professional Plumbing Team"
                className="w-full h-full object-cover"
              />

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
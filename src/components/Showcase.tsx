"use client";

import { motion } from "framer-motion";

export default function Showcase() {
  return (
    <section
  id="projects"
  className="pt-4 pb-24 px-6 scroll-mt-24"
>
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <span className="text-blue-500 font-semibold tracking-widest">
            OUR WORK
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mt-4">
            Before & After
            <span className="block text-blue-500">
              Transformations
            </span>
          </h2>

          <p className="text-slate-400 mt-6 max-w-3xl mx-auto">
            Explore some of our recent plumbing projects and see the
            quality difference our experts deliver.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Featured Project */}

          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            className="group relative overflow-hidden rounded-[32px]"
          >
            <img
              src="/images/project1.jpg"
              alt="Luxury Bathroom Renovation"
              className="w-full h-[500px] object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

            <div className="absolute bottom-0 p-8">
              <span className="text-blue-400 text-sm">
                Bathroom Renovation
              </span>

              <h3 className="text-3xl font-bold mt-2 text-white">
                Luxury Marble Upgrade
              </h3>

              <p className="text-slate-300 mt-2">
                Completed in 3 days
              </p>
            </div>
          </motion.div>

          {/* Project 2 */}

          <div className="group overflow-hidden rounded-[30px]">
            <img
              src="/images/project2.jpg"
              alt="Kitchen Plumbing Upgrade"
              className="w-full h-[500px] object-cover transition duration-700 group-hover:scale-110"
            />
          </div>

          {/* Project 3 */}

          <div className="group overflow-hidden rounded-[30px]">
            <img
              src="/images/project3.jpg"
              alt="Commercial Plumbing Project"
              className="w-full h-[500px] object-cover transition duration-700 group-hover:scale-110"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
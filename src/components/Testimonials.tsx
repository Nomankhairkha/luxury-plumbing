"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    review:
      "Outstanding service. Arrived within 30 minutes and solved our emergency leak immediately.",
  },
  {
    name: "Michael Brown",
    role: "Business Owner",
    review:
      "Professional team and excellent workmanship. Highly recommended.",
  },
  {
    name: "Emma Wilson",
    role: "Property Manager",
    review:
      "The best plumbing company we've ever worked with. Fast, reliable, and extremely professional.",
  },
];

export default function Testimonials() {
  return (
   <section
  id="reviews"
  className="pt-4 pb-24 px-6 scroll-mt-24"
>
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <span className="text-blue-500 font-semibold tracking-widest">
            TESTIMONIALS
          </span>

          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            What Customers
            <span className="block text-blue-500">
              Are Saying
            </span>
          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Trusted by thousands of homeowners and businesses.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((review, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8"
            >
              <div className="text-yellow-400 text-2xl mb-4">
                ★★★★★
              </div>

              <p className="text-slate-300 leading-relaxed">
                {review.review}
              </p>

              <div className="flex items-center gap-4 mt-8">

                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-bold">
                  {review.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-semibold">
                    {review.name}
                  </h4>

                  <p className="text-sm text-slate-400">
                    {review.role}
                  </p>
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
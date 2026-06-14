"use client";

import {
  Wrench,
  Droplets,
  Bath,
  Building2,
  Shield,
} from "lucide-react";

const services = [
  {
    title: "Emergency Plumbing",
    icon: Wrench,
  },
  {
    title: "Leak Detection",
    icon: Droplets,
  },
  {
    title: "Blocked Drains",
    icon: Shield,
  },
  {
    title: "Pipe Repairs",
    icon: Wrench,
  },
  {
    title: "Bathroom Renovations",
    icon: Bath,
  },
  {
    title: "Commercial Plumbing",
    icon: Building2,
  },
];

export default function Services() {
  return (
  <section
  id="services"
  className="pt-4 pb-24 px-6 scroll-mt-24"
>
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <span className="text-blue-500 font-semibold tracking-widest">
            OUR SERVICES
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mt-4">
            Premium
            <span className="block text-blue-500">
              Plumbing Services
            </span>
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mt-6">
            Professional plumbing solutions delivered by licensed experts
            with fast response times and premium workmanship.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 hover:-translate-y-2 hover:border-blue-500/30 transition-all duration-500"
              >
                <Icon
                  size={50}
                  className="text-blue-500 mb-6"
                />

                <h3 className="text-2xl font-semibold mb-4">
                  {service.title}
                </h3>

                <p className="text-slate-400">
                  Professional solutions delivered by licensed experts.
                </p>

                <button className="mt-6 text-blue-500 hover:text-blue-400 transition">
                  Learn More →
                </button>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
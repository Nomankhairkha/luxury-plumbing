"use client";

import { useState } from "react";

export default function QuoteCalculator() {
  const [service, setService] = useState("");
  const [price, setPrice] = useState(0);

  const calculateQuote = () => {
    switch (service) {
      case "emergency":
        setPrice(250);
        break;
      case "repair":
        setPrice(180);
        break;
      case "bathroom":
        setPrice(2500);
        break;
      default:
        setPrice(0);
    }
  };

  return (
    <section
      id="quote"
      className="pt-16 pb-12 px-6 scroll-mt-32"
    >
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">

          <span className="text-blue-500 font-semibold tracking-widest">
            INSTANT QUOTE
          </span>

          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            Get Your
            <span className="block text-blue-500">
              Estimate
            </span>
          </h2>

          <p className="text-slate-400 mt-4">
            Get an instant estimate for your plumbing project.
          </p>

        </div>

        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] p-6 md:p-10">

          <select
            onChange={(e) => setService(e.target.value)}
            className="w-full p-4 rounded-xl bg-slate-900 border border-white/10 mb-6"
          >
            <option value="">Select Service</option>
            <option value="emergency">Emergency Plumbing</option>
            <option value="repair">Pipe Repair</option>
            <option value="bathroom">Bathroom Renovation</option>
          </select>

          <button
            onClick={calculateQuote}
            className="bg-blue-600 hover:bg-blue-500 transition px-8 py-4 rounded-full"
          >
            Calculate Estimate
          </button>

          {price > 0 && (
            <div className="mt-8 text-center">

              <h3 className="text-4xl md:text-5xl font-bold text-blue-500">
                ${price}
              </h3>

              <p className="text-slate-300 mt-2">
                Estimated Starting Price
              </p>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
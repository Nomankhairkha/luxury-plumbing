"use client";

import { Phone } from "lucide-react";

export default function EmergencyCTA() {
  return (
    <div className="hidden lg:block fixed bottom-6 right-6 z-50">

      <div className="bg-blue-600 text-white rounded-3xl shadow-2xl p-6 w-[280px] border border-blue-400/20">

        <div className="flex items-center gap-3 mb-4">
          <Phone size={24} />
          <span className="font-bold text-xl">
            Emergency Service
          </span>
        </div>

        <p className="text-sm mb-3">
          Need a plumber right now?
        </p>

        <p className="text-sm text-blue-100 mb-5">
          Average Response: 25 Minutes
        </p>

<a
  href="tel:+15551234567"
  className="
    block
    w-full
    text-center
    text-white
    font-bold
    py-4
    rounded-xl
    transition-all
    duration-300
  "
  style={{
    background:
      "linear-gradient(135deg,#2563EB,#3B82F6)",
  }}
>
  Call Now
</a>

      </div>

    </div>
  );
}
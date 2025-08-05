// pages/hearing-aid.tsx
'use client';

import { FaEarListen, FaCalendarCheck, FaHeadphones } from 'react-icons/fa6';

export default function HearingAidPage() {
  return (
    <section className="relative bg-blue-900 text-white py-28 px-6 sm:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
          Hear Better, <span className="text-blue-300">Live Louder</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto mb-10">
          Free hearing tests, cutting-edge hearing aids, and expert support — all designed to help you reconnect with what matters most.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <a
            href="#book"
            className="bg-white text-blue-900 px-6 py-3 rounded-md font-semibold shadow-md hover:bg-blue-100 transition"
          >
            Book a Free Test
          </a>
          <a
            href="#learn"
            className="text-blue-300 hover:underline font-medium px-6 py-3"
          >
            Learn More
          </a>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-3 gap-10 text-left">
          <div className="flex items-start gap-4">
            <div className="bg-blue-800 p-3 rounded-full">
              <FaEarListen className="text-blue-300 w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-white">Pro Hearing Tests</h3>
              <p className="text-sm text-blue-100">Accurate, fast, and always free — no referral needed.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-blue-800 p-3 rounded-full">
              <FaHeadphones className="text-blue-300 w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-white">Next-Gen Aids</h3>
              <p className="text-sm text-blue-100">Sleek, comfortable devices with exceptional clarity.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-blue-800 p-3 rounded-full">
              <FaCalendarCheck className="text-blue-300 w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-white">Easy Appointments</h3>
              <p className="text-sm text-blue-100">Flexible scheduling at your convenience — online or in-person.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// components/Hero.tsx

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-blue-50 px-4 py-16 md:py-24 mt-32">
      <div className="max-w-7xl mx-auto text-center px-4">
        {/* Subheading / Brand */}
        <span className="text-lg font-semibold text-blue-700 uppercase tracking-wider">
          Beltone Hearing Aids
        </span>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 text-gray-900 leading-tight">
          Your Gateway to <span className="text-blue-700">Optimal</span> Hearing Health
        </h1>

        {/* Supporting Text */}
        <p className="mt-6 text-gray-700 max-w-2xl mx-auto text-base md:text-lg">
          Discover personalized hearing solutions with Beltone. Our expert team is dedicated to guiding you toward clearer sound, improved communication, and a better quality of life.
        </p>

        {/* Image Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-lg overflow-hidden shadow-sm">
            <Image
              src="/carousel/img1.png"
              alt="Hearing consultation"
              width={500}
              height={300}
              className="w-full h-full object-cover hidden sm:block"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-sm">
            <Image
              src="/carousel/img2.png"
              alt="Hearing test"
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-sm">
            <Image
              src="/carousel/img3.png"
              alt="Using hearing aid"
              width={500}
              height={300}
              className="w-full h-full object-cover  hidden sm:block"
            />
          </div>
        </div>

        {/* CTA Box */}
        <div className="mt-16 max-w-xl mx-auto bg-blue-700 text-white rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div>
            <p className="text-lg font-semibold">Book Your Free Hearing Test</p>
            <p className="text-sm text-blue-100">
              Expert consultation and personalized hearing aid solutions.
            </p>
          </div>
          <button className="bg-white text-blue-700 font-medium px-5 py-2 rounded-lg hover:bg-blue-100 transition">
            Book Appointment
          </button>
        </div>
      </div>
    </section>
  );
}

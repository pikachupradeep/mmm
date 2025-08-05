'use client';

import { FaHandshake, FaUsers, FaGlobe } from 'react-icons/fa6';

export default function AboutHero() {
  return (
    <section className="relative bg-blue-100 text-blue-900 py-28 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
          About <span className="text-blue-600">Us</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-blue-700 max-w-3xl mx-auto mb-16">
          We're on a mission to improve lives through better hearing. Built on trust, powered by innovation, and driven by a passion for people.
        </p>

        {/* Features */}
        <div className="grid sm:grid-cols-3 gap-8">
          <FeatureCard
            icon={<FaUsers className="w-10 h-10 text-blue-600" />}
            title="10K+ Happy Clients"
            description="Helping people hear better for over a decade."
          />
          <FeatureCard
            icon={<FaGlobe className="w-10 h-10 text-blue-600" />}
            title="Nationwide Clinics"
            description="Accessible care in cities, suburbs, and rural areas."
          />
          <FeatureCard
            icon={<FaHandshake className="w-10 h-10 text-blue-600" />}
            title="Trusted Partnerships"
            description="Backed by audiologists and health professionals."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white hover:bg-blue-50 transition-colors duration-300 p-8 rounded-2xl shadow-md flex flex-col items-center text-center">
      <div className="bg-blue-200 p-4 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-blue-900">{title}</h3>
      <p className="text-blue-700 text-sm">{description}</p>
    </div>
  );
}

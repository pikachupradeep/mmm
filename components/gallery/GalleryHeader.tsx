import { FaArrowRight, FaPhoneAlt } from 'react-icons/fa';

export default function GalleryHeader() {
  return (
    <div className="px-4 md:px-8 py-12 mx-auto min-h-screen space-y-2">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-stretch">
        {/* Left: Text Block */}
        <div className="bg-blue-50 p-8 rounded-lg flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
            Rediscover Clear Hearing
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Beltone Hearing Aids by Eric Rajapakse – Trusted hearing solutions in Sri Lanka with over a decade of experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <button className="bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition w-max">
              Book Appointment
            </button>
            <a
              href="tel:+94112345678"
              className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition w-max animate-pulse"
            >
              <FaPhoneAlt />
              Call Now
            </a>
          </div>
        </div>

        {/* Right: Image Block */}
        <div className="rounded-lg overflow-hidden">
          <img
            src="/belbg1.png"
            alt="Hearing Aid Consultation"
            className="w-full h-[30rem] object-cover"
          />
        </div>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {/* Experience Section */}
        <div className="flex flex-col gap-2">
          <img
            src="/aboutbg.png"
            alt="Hearing test session"
            className="rounded-lg w-full h-64 object-cover"
          />
          <div className="bg-blue-100 p-6 rounded-lg text-center">
            <p className="text-2xl font-bold text-blue-900">10+<br />Years Experience</p>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-blue-100 p-6 rounded-lg flex flex-col justify-between">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-blue-900">Why Beltone?</h2>
            <FaArrowRight className="w-5 h-5 text-blue-900" />
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            Trusted globally, personalized locally. Beltone offers advanced hearing aid technology, expert care, and support tailored to your hearing journey in Sri Lanka.
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-blue-700 text-white p-6 rounded-lg flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-sm text-blue-100 mb-6">
              No. 123, Colombo 03<br />
              Monday - Saturday, 9AM - 6PM
            </p>
          </div>
          <button className="bg-white text-blue-700 px-6 py-2 rounded-full hover:bg-blue-100 transition">
            Get Directions
          </button>
        </div>
      </div>
    </div>
  );
}

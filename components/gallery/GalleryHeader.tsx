
import { FaArrowRight } from 'react-icons/fa6';

export default function GalleryHeader() {
  return (
    <div className="px-4 md:px-8 py-12 mx-auto h-screen space-y-8 mt-22 min-h-screen">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Left: Text Block */}
        <div className="bg-[#FFF2D9] p-8 rounded-lg flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Elevate Your Wellness</h1>
          <p className="text-gray-700 text-lg mb-6">Discover Yoga’s Balance & Serenity</p>
          <button className="bg-black text-white px-6 py-2 rounded-full w-max">
            Explore
          </button>
        </div>

        {/* Right: Image Block */}
        <div className="rounded-lg overflow-hidden">
          <img
            src="/belbg1.png"
            alt="Yoga Group"
            className="w-full h-[30rem] object-cover"
          />
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Experience Section */}
        <div className="flex flex-col gap-4">
          <img
            src="/aboutbg.png"
            alt="Yoga Pose"
            className="rounded-lg w-full h-64 object-cover"
          />
          <div className="bg-green-100 p-6 rounded-lg text-center">
            <p className="text-2xl font-bold">10+<br />Years</p>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-indigo-100 p-6 rounded-lg flex flex-col justify-between">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">About</h2>
            <FaArrowRight className="w-5 h-5 text-black" />
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            Discover Yoga’s Balance & Serenity. Lorem ipsum dolor sit amet
            consectetur. Tortor nibh ullamcorper sed quam sed tempus
            sollicitudin.
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-black text-white p-6 rounded-lg flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p className="text-sm text-gray-300 mb-6">
              Lorem ipsum dolor sit amet consectetur
            </p>
          </div>
          <button className="bg-green-100 text-black px-6 py-2 rounded-full hover:bg-green-200 transition">
            Contact Us
          </button>
        </div>
      </div>

       
    </div>
  );
}

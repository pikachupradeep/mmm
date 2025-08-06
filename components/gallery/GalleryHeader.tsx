'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight, FaPhoneAlt } from 'react-icons/fa';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: 'easeInOut',
      delay: 0.2,
    },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: 'easeInOut',
      delay: 0.1,
    },
  },
};

export default function GalleryHeader() {
  return (
    <motion.div
      className="px-4 md:px-8 py-12 mx-auto min-h-screen space-y-2"
      initial="hidden"
      animate="show"
      variants={fadeIn}
    >
      {/* Hero Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        {/* Left: Text Block */}
        <motion.div
          className="bg-blue-50 p-8 rounded-lg flex flex-col justify-center h-full"
          variants={fadeInUp}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 text-blue-900"
            variants={fadeInUp}
          >
            Rediscover Clear Hearing
          </motion.h1>
          <motion.p className="text-gray-700 text-lg mb-6" variants={fadeInUp}>
            Beltone Hearing Aids by Eric Rajapakse – Trusted hearing solutions in Sri Lanka with over a decade of experience.
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-2" variants={fadeInUp}>
            <Link href="http://localhost:3000/contact">
            <button className="bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition w-max">
              Book Appointment
            </button>
            </Link>
            <a
              href="tel:+94761647228"
              className="flex items-center sm:hidden justify-center gap-2 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition w-max animate-pulse"
            >
              <FaPhoneAlt />
              Call Now
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Image Block */}
        <motion.div className="rounded-lg overflow-hidden" variants={fadeInUp}>
          <motion.img
            src="/belbg1.png"
            alt="Hearing Aid Consultation"
            className="w-full h-[32rem] object-cover rounded-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </motion.div>

      {/* Feature Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-2"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        {/* Experience Section */}
        <motion.div className="flex flex-col gap-2" variants={fadeInUp}>
          <motion.img
            src="/aboutbg.png"
            alt="Hearing test session"
            className="rounded-lg w-full h-64 object-cover"
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
            viewport={{ once: true }}
          />
          <motion.div
            className="bg-blue-100 p-6 rounded-lg text-center"
            variants={fadeInUp}
          >
            <p className="text-2xl font-bold text-blue-900">
              10+<br />Years Experience
            </p>
          </motion.div>
        </motion.div>

        {/* About Section */}
        <motion.div
          className="bg-blue-100 p-6 rounded-lg flex flex-col justify-center"
          variants={fadeInUp}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-blue-900">Why Beltone?</h2>
            <FaArrowRight className="w-5 h-5 text-blue-900" />
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            Trusted globally, personalized locally. Beltone offers advanced hearing aid technology, expert care, and support tailored to your hearing journey in Sri Lanka.
          </p>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          className="bg-blue-700 text-white p-6 rounded-lg flex flex-col justify-center"
          variants={fadeInUp}
        >
          <div>
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-sm text-blue-100 mb-6">
              No.341 Galle Rd, Colombo 00300.<br />
              Monday - Saturday, 9AM - 6PM
            </p>
          </div>
          <a className='' href="https://www.google.com/maps/dir//No.341+Galle+Rd,+Colombo+00300/@6.905623,79.7692842,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ae259c13488a5fd:0x3c05db91a6e4d8d!2m2!1d79.8516861!2d6.9056301?entry=ttu&g_ep=EgoyMDI1MDgwMy4wIKXMDSoASAFQAw%3D%3D">
          <button className="bg-white cursor-pointer text-blue-700 px-6 py-2 rounded-full hover:bg-blue-100 transition">
            Get Directions
          </button>
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

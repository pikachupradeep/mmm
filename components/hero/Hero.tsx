"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

// Variants with TypeScript types
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const containerStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.6,
    },
  },
};

export default function Hero() {
  return (
    <section className="bg-blue-50 px-4 py-16 md:py-24 mt-32">
      <div className="max-w-7xl mx-auto text-center px-4">
        {/* Animated container */}
        <motion.div initial="hidden" animate="visible" variants={containerStagger}>
          {/* Brand */}
          <motion.span
            variants={fadeUp}
            custom={1}
            className="text-lg font-semibold text-blue-700 uppercase tracking-wider"
          >
            Beltone Hearing Aids
          </motion.span>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            custom={2}
            className="text-3xl sm:text-4xl md:text-[6rem] font-extrabold font-sans mt-4 text-gray-900 leading-tight"
          >
            Your Gateway to <span className="text-blue-700">Optimal</span> Hearing Health
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            variants={fadeUp}
            custom={3}
            className="mt-6 text-gray-700 max-w-2xl mx-auto text-base md:text-lg"
          >
            Discover personalized hearing solutions with Beltone. Our expert team is dedicated to
            guiding you toward clearer sound, improved communication, and a better quality of life.
          </motion.p>

          {/* Image Grid */}
          <motion.div
            variants={containerStagger}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[1, 2, 3].map((index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                custom={index + 3}
                className="rounded-lg overflow-hidden shadow-sm"
              >
                <Image
                  src={`/carousel/img${index}.png`}
                  alt={`Image ${index}`}
                  width={500}
                  height={300}
                  className={`w-full h-full object-cover ${
                    index === 1 ? "" : "hidden sm:block"
                  }`}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
            className="mt-16 max-w-xl mx-auto bg-blue-700 text-white rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md"
          >
            <div>
              <p className="text-lg font-semibold">Book Your Free Hearing Test</p>
              <p className="text-sm text-blue-100">
                Expert consultation and personalized hearing aid solutions.
              </p>
            </div>
            <button className="bg-white text-blue-700 font-medium px-5 py-2 rounded-lg hover:bg-blue-100 transition">
              Book Appointment
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

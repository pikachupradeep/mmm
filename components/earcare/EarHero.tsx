'use client';

import { FaEarListen, FaCalendarCheck, FaHeadphones } from 'react-icons/fa6';
import { motion, Variants } from 'framer-motion';

// Add type annotation for variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    }
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export default function HearingAidPage() {
  return (
    <motion.section 
      className="relative bg-blue-900 text-white py-28 px-6 sm:px-12 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h1 
          className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6"
          variants={itemVariants}
        >
          Hear Better, <span className="text-blue-300">Live Louder</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto mb-10"
          variants={itemVariants}
        >
          Free hearing tests, cutting-edge hearing aids, and expert support — all designed to help you reconnect with what matters most.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
          variants={itemVariants}
        >
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
        </motion.div>

        {/* Feature Grid */}
        <motion.div 
          className="grid sm:grid-cols-3 gap-10 text-left"
          variants={itemVariants}
        >
          {[
            {
              icon: <FaEarListen className="text-blue-300 w-6 h-6" />,
              title: "Pro Hearing Tests",
              desc: "Accurate, fast, and always free — no referral needed.",
            },
            {
              icon: <FaHeadphones className="text-blue-300 w-6 h-6" />,
              title: "Next-Gen Aids",
              desc: "Sleek, comfortable devices with exceptional clarity.",
            },
            {
              icon: <FaCalendarCheck className="text-blue-300 w-6 h-6" />,
              title: "Easy Appointments",
              desc: "Flexible scheduling at your convenience — online or in-person.",
            },
          ].map(({ icon, title, desc }, idx) => (
            <motion.div
              key={idx}
              className="flex items-start gap-4"
              variants={itemVariants}
            >
              <div className="bg-blue-800 p-3 rounded-full">{icon}</div>
              <div>
                <h3 className="font-semibold text-lg text-white">{title}</h3>
                <p className="text-sm text-blue-100">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

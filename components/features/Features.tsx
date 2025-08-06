"use client";

import { motion, Variants } from "framer-motion";
import FeaBox from './FeaBox';
import { GrTechnology } from "react-icons/gr";
import { FaHandshakeSimple } from "react-icons/fa6";
import { MdOutlineHighQuality, MdOutlinePriceChange } from "react-icons/md";

// Animation variant
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Features = () => {
  const features = [
    {
      icon: <GrTechnology className="text-6xl text-blue-700" />,
      title: "Advanced Technology",
      desc: "We offer the latest hearing aid technology for clear, natural, and enhanced sound quality.",
      extraClass: "",
    },
    {
      icon: <FaHandshakeSimple className="text-6xl text-blue-700" />,
      title: "Personalized Support",
      desc: "Our expert team provides customized fitting and ongoing support to meet your unique needs.",
      extraClass: "",
    },
    {
      icon: <MdOutlineHighQuality className="text-6xl text-blue-700" />,
      title: "Trusted Quality",
      desc: "We supply certified, high-quality hearing aids trusted by thousands of satisfied customers worldwide.",
      extraClass: "",
    },
    {
      icon: <MdOutlinePriceChange className="text-6xl" />,
      title: "Affordable Prices",
      desc: "Get superior hearing solutions at competitive prices without compromising on quality or performance.",
      extraClass: "bg-blue-700 text-white hover:bg-white hover:text-black",
    },
  ];

  return (
    <div className="p-4 max-w-[1000px] m-auto mt-20">
      <motion.h4
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        variants={fadeInUp}
        className="text-center font-semibold mb-6 text-2xl"
      >
        Why Choose Us?
      </motion.h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {features.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }} // triggers on scroll up/down
          >
            <FeaBox
              title={item.title}
              desc={item.desc}
              className={`rounded-lg border border-blue-400 shadow-lg p-4 transition duration-300 hover:scale-[1.03] hover:-translate-y-2 hover:shadow-xl hover:border-blue-600 ${item.extraClass}`}
            >
              {item.icon}
            </FeaBox>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;

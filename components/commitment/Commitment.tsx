"use client";

import Image from "next/image";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import CheckBox from "../checkbox/CheckBox";

const fadeInUp: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hidden: {
    opacity: 0,
    y: 40,
    transition: { duration: 0.6, ease: "easeIn" },
  },
};

const AnimatedBlock: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Commitment: React.FC = () => {
  return (
    <div className="max-w-[1000px] m-auto p-4 flex flex-col sm:flex-row sm:items-center gap-6 mt-50">
      <div className="basis-1/2">
        <AnimatedBlock className="mb-4 font-semibold">
          <h4>Commitment to Customer Satisfaction</h4>
        </AnimatedBlock>

        <AnimatedBlock className="mb-4">
          <p>
            At Beltone Sri Lanka, our customers come first. We believe in long-term relationships, ensuring that every individual
            receives the best hearing care experience with:
          </p>
        </AnimatedBlock>

        <CheckBox desc="Easy Payment Plans & Discounts" />
        <CheckBox desc="Warranty & After-Sales Support" />
        <CheckBox desc="Friendly, Caring, and Experienced Staff" />
      </div>

      <AnimatedBlock className="basis-1/2">
        <Image className="w-full block" src="/satifaction.png" width={800} height={800} alt="satis" />
      </AnimatedBlock>
    </div>
  );
};

export default Commitment;

"use client";

import Image from "next/image";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef, ReactNode, FC } from "react";
import CheckBox from "../checkbox/CheckBox";

// Text fade + slide up animation
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

// Image scale from smaller to normal, but no opacity change on hide (always visible)
const scaleIn: Variants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hidden: {
    opacity: 1, // keep fully visible even when hidden (no fade)
    scale: 0.8,
    transition: { duration: 0.6, ease: "easeIn" },
  },
};

interface AnimatedProps {
  children: ReactNode;
  className?: string;
}

// AnimatedBlock for text (fade + slide)
const AnimatedBlock: FC<AnimatedProps> = ({ children, className = "" }) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.1 }); // Trigger animation earlier (10% visible)

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
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

// AnimatedImage for images (scale only)
const AnimatedImage: FC<AnimatedProps> = ({ children, className = "" }) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.1 }); // Trigger animation earlier (10% visible)

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={scaleIn}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Intro: FC = () => {
  return (
    <div className="p-4 mt-50 max-w-[1000px] m-auto">
      <AnimatedBlock className="text-center font-semibold mb-10">
        <h3>Why Beltone in Sri Lanka is Special?</h3>
      </AnimatedBlock>

      <div className="flex flex-col sm:flex-row gap-6 sm:items-center">
        <AnimatedImage className="mb-6 sm:mb-0 sm:basis-1/2">
          <Image src="/belcobvo.png" width={800} height={800} alt="convo" />
        </AnimatedImage>

        <div className="flex flex-col sm:basis-1/2 gap-6">
          <AnimatedBlock className="font-semibold">
            <h4>Exclusive Partner of Beltone Hearing Aids</h4>
          </AnimatedBlock>
          <AnimatedBlock>
            <p>
              We are the only authorized distributor of Beltone Hearing Aids in Sri Lanka, offering the latest digital,
              rechargeable, and AI-powered solutions. Our partnership ensures that customers receive genuine products,
              competitive prices, and exclusive warranties.
            </p>
          </AnimatedBlock>

          <AnimatedBlock className="font-semibold">
            <h4>Advanced Hearing Solutions</h4>
          </AnimatedBlock>
          <AnimatedBlock>
            <p>
              AI & Rechargeable Hearing Aids – Smart technology that adapts to different environments. Wireless Connectivity –
              Seamlessly connects to smartphones, TVs, and other devices. Tinnitus Management – Special features to relieve
              ringing in the ears.
            </p>
          </AnimatedBlock>
        </div>
      </div>

      <AnimatedBlock className="mt-50">
        <div className="flex flex-col sm:flex-row-reverse sm:items-center gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:basis-1/2">
            {["/nat1.png", "/nat2.png", "/nat3.png", "/nat4.png"].map((src, i) => (
              <AnimatedImage key={i} className="mb-6 sm:mb-0">
                <Image src={src} width={800} height={800} alt="convo" />
              </AnimatedImage>
            ))}
          </div>

          <div className="sm:basis-1/2">
            <AnimatedBlock className="font-semibold mb-4">
              <h4>Trusted by Healthcare Professionals & Organizations</h4>
            </AnimatedBlock>

            <AnimatedBlock>
              <p>
                We collaborate with ENT specialists, hospitals, and corporate clients to provide professional hearing solutions,
                including:
              </p>
            </AnimatedBlock>

            <div className="mt-4">
              <CheckBox desc="Hearing Screening for Organizations – Partnering with companies to ensure employee hearing wellness." />
              <CheckBox desc="Hospital & Clinic Collaborations – Supporting ENT specialists with diagnostic tools and hearing aids" />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-50">
          <AnimatedImage className="basis-1/2">
            <Image className="mb-6 rounded-xl sm:mb-0" src="/ear.png" width={800} height={800} alt="convo" />
          </AnimatedImage>

          <div className="basis-1/2">
            <AnimatedBlock className="font-semibold mb-2">
              <h4>Personalized & Professional Hearing Care</h4>
            </AnimatedBlock>

            <AnimatedBlock className="mb-4">
              <p>Unlike generic hearing aid providers, we offer a comprehensive hearing journey:</p>
            </AnimatedBlock>

            <CheckBox desc="Expert Hearing Assessments – Conducted by trained professionals using advanced audiometry." />
            <CheckBox desc="Customized Fittings – Tailor-made solutions to match individual needs and lifestyles." />
            <CheckBox desc="Free Hearing Aid Trials – Ensuring customers experience the best solution before purchasing." />
            <CheckBox desc="Dedicated Aftercare Services – Adjustments, cleaning, and repairs for long-term satisfaction.
             Trusted by HEALTHCARE PROFESSIONALS & ORGANIZATIONS – We collaborate with ENT specialists, hospitals, and 
             corporate clients to provide professional hearing solutions." />
          </div>
        </div>
      </AnimatedBlock>
    </div>
  );
};

export default Intro;

"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/constant";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

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

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full p-4 mt-16 max-w-3xl mx-auto">
      <AnimatedBlock className="text-center mb-6">
        <h4 className="text-3xl font-semibold">Frequently asked questions</h4>
      </AnimatedBlock>

      {faq.map((item) => (
        <AccordionItem key={item.id} value={item.value}>
          <AccordionTrigger>
            <AnimatedBlock>
              <h6 className="text-[1rem]">
                {item.id}. {item.question}
              </h6>
            </AnimatedBlock>
          </AccordionTrigger>
          <AccordionContent>
            <AnimatedBlock>
              <p>{item.answer}</p>
            </AnimatedBlock>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

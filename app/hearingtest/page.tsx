'use client'

import CheckBox from '@/components/checkbox/CheckBox'
import CheckBox2 from '@/components/checkbox/Checkbox2'
import HearingAidPage from '@/components/earcare/EarHero'
import EarcareTest from '@/components/EarcareTest'
import TestPlayer from '@/components/frequency/TestPlayer'
import { IoWarning } from 'react-icons/io5'
import { motion, type Variants } from 'framer-motion'

// Animation variants for scroll-in and scroll-out
const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const HearingTest = () => {
  return (
    <div className="min-h-screen p-4 mt-34">
      <div className="hearingaidhero">
        <HearingAidPage />
      </div>

      <div className="max-w-[1000px] m-auto mt-16">

        {/* Example: h4 */}
        <motion.h4
          className="text-center font-semibold mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={textVariants}
        >
          Hearing Aids & Test
        </motion.h4>

        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="sm:basis-1/2">

            {/* h5 */}
            <motion.h5
              className="font-semibold mb-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={textVariants}
            >
              Play with Our Frequency Test Player – Discover the Sound Spectrum!
            </motion.h5>

            {/* p */}
            <motion.p
              className="mb-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={textVariants}
            >
              Curious about how different sounds affect your hearing? Our Frequency Test Player lets
              you explore a wide range of tones — from deep bass to high-pitched frequencies — in an
              interactive and fun way!
            </motion.p>

            <motion.p
              className="mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={textVariants}
            >
              Whether you're just experimenting or checking your hearing sensitivity, this tool helps
              you understand how your ears respond to different sound frequencies.
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={textVariants}
              className="flex gap-2 items-center mb-4"
            >
              <IoWarning className="text-3xl text-yellow-700" />
              <motion.h5
                className="font-semibold"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={textVariants}
              >
                Important Safety Warning:
              </motion.h5>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={textVariants}
              className="mb-12"
            >
              <CheckBox desc="Some frequencies above 8,000Hz at high volume can be uncomfortable or even harmful to your hearing." />
              <CheckBox desc="We recommend using moderate volume and wearing headphones only if you're comfortable." />
              <CheckBox desc="If you feel any discomfort, stop immediately." />
            </motion.div>
          </div>

          <div className="sm:basis-1/2">

            <motion.h4
              className="font-semibold"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={textVariants}
            >
              Remember: Your ears are sensitive — treat them with care!
            </motion.h4>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={textVariants}
            >
              <TestPlayer />
            </motion.div>
          </div>
        </div>

        <motion.div
          className="mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={textVariants}
        >
          <motion.h4
            className="text-center font-semibold mt-16 mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={textVariants}
          >
            Take Our Free Online Hearing Test – Your First Step to Better Hearing
          </motion.h4>

          <motion.p
            className="mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={textVariants}
          >
            Not sure if you're experiencing hearing loss? Our quick and easy online hearing test is
            designed to give you a reliable overview of your current hearing ability — all from the
            comfort of your home.
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={textVariants}
          >
            This test is completely free, takes just a few minutes, and can be the first step
            towards improving your quality of life.
          </motion.p>
        </motion.div>

        <div className="flex flex-col sm:flex-row-reverse sm:items-center gap-6 mt-20">
          <div className="sm:basis-1/2">

            <motion.div
              className="mt-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={textVariants}
            >
              <motion.h4
                className="font-semibold mb-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={textVariants}
              >
                Why It's Important to Take Our Online Hearing Test:
              </motion.h4>
              <CheckBox2
                title="Early Detection Saves Time and Effort"
                desc="Hearing loss can be gradual. Catching it early can prevent further deterioration and help you adapt sooner."
              />
              <CheckBox2
                title="Awareness Leads to Action"
                desc="Most people don't even realize they have a hearing problem until it affects their daily life. This test can help you recognize the signs early."
              />
              <CheckBox2
                title="Personalized Recommendations"
                desc="Based on your results, we can guide you toward the most suitable hearing solutions — whether it's hearing aids or a professional consultation."
              />
              <CheckBox2
                title="Convenient and Confidential"
                desc="Take the test whenever you want, from wherever you are. No appointments or waiting rooms involved."
              />
              <CheckBox2
                title="Peace of Mind"
                desc="Even if your hearing is normal, having the clarity and assurance is worth a few minutes of your time."
              />
            </motion.div>
          </div>

          <div className="sm:basis-1/2">

            <motion.h4
              className="font-semibold mt-20 mb-4 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={textVariants}
            >
              Start Your Online Hearing Test Today
            </motion.h4>

            <motion.p
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={textVariants}
            >
              Your hearing matters — and we're here to help you take the first step toward better
              communication, confidence, and clarity.
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={textVariants}
            >
              <EarcareTest />
            </motion.div>
          </div>
        </div>

        <motion.div
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={textVariants}
        >
          <motion.h4
            className="font-semibold text-center mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={textVariants}
          >
            Beltone Rely
          </motion.h4>

          <motion.h5
            className="font-semibold text-center mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={textVariants}
          >
            Download Beltone Rely Hearing Aids Technical Specifications
          </motion.h5>

          <motion.p
            className="mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={textVariants}
          >
            Unlock the full potential of your hearing solution by downloading the Beltone Rely
            Hearing Aids Technical Specifications. This comprehensive document provides detailed
            information about the technology, performance, design features, and connectivity options
            of Beltone Rely devices.
          </motion.p>

          <motion.h5
            className="font-semibold"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={textVariants}
          >
            What's included in the Specifications:
          </motion.h5>

          <div className="mt-10">
            <CheckBox desc="Device models and sizes" />
            <CheckBox desc="Battery life and charging options" />
            <CheckBox desc="Wireless connectivity & Bluetooth features" />
            <CheckBox desc="Sound processing technology" />
            <CheckBox desc="Compatibility with Beltone apps and accessories" />
            <CheckBox desc="Environmental protection (IP ratings)" />
            <CheckBox desc="Technical data for audiologists and professionals" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HearingTest

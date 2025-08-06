'use client';

import { motion, Variants } from 'framer-motion';
import ContactHero from '@/components/contact/ConractHero';
import ContactForm from '@/components/contact/ContactForm';
import React from 'react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const page = () => {
  return (
    <motion.div
      className="px-6 w-full sm:px-10 md:px-20 lg:px-32 bg-white text-neutral-800 mt-39"
      initial="hidden"
      animate="show"
      variants={fadeInUp}
    >
      {/* Hero Section */}
      <motion.div
        className="mb-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <ContactHero />
      </motion.div>

      {/* Intro Text */}
      <motion.div
        className="max-w-[1000px] mx-auto text-lg leading-relaxed text-gray-600 mb-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <motion.p variants={fadeInUp}>
          Have questions, feedback, or just want to say hello? We'd love to hear from you.
          Whether you're looking for support, partnership opportunities, or more information
          about our services, our team is ready to assist. Reach out through the form below,
          and we'll get back to you as soon as possible. Your message matters to us.
        </motion.p>
      </motion.div>

      {/* Map & Contact Info Section */}
      <motion.div
        className="max-w-[1200px] mx-auto flex flex-col sm:flex-row gap-12 lg:gap-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        {/* Map */}
        <motion.div className="basis-1/2" variants={fadeInUp}>
          <div className="overflow-hidden rounded-xl shadow-lg border border-gray-200">
            <iframe
              className="w-full h-[400px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1013983.8098428447!2d78.63224029541017!3d6.90563654471907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2590dd9df6ee7%3A0x5d1ee4ec73bd01cf!2sEric%20Rajapakse%20Opticians%20-%20Kollupitiya!5e0!3m2!1sen!2slk!4v1743668719280!5m2!1sen!2slk"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Location"
            ></iframe>
          </div>
        </motion.div>

        {/* Contact Info + Form */}
        <motion.div className="basis-1/2" variants={fadeInUp}>
          <motion.div className="mb-8" variants={fadeInUp}>
            <motion.h5
              className="text-xl font-semibold text-neutral-900 mb-4 border-b pb-2 border-gray-300"
              variants={fadeInUp}
            >
              Contact Info
            </motion.h5>
            <motion.p className="mb-3" variants={fadeInUp}>
              📍 Address: #341, Galle Road, Colombo 03, Sri Lanka
            </motion.p>
            <motion.p className="mb-3" variants={fadeInUp}>
              📧 Email:{' '}
              <a href="mailto:roshan@ericrajapakse.lk" className="text-blue-600 underline">
                roshan@ericrajapakse.lk
              </a>
            </motion.p>
            <motion.p className="mb-3" variants={fadeInUp}>
              📱 Mobile:{' '}
              <a href="tel:+94761647228" className="text-blue-600 underline">
                +94 76 164 7228
              </a>
            </motion.p>
            <motion.p className="mb-6" variants={fadeInUp}>
              🌐 Website:{' '}
              <a
                href="https://www.ericrajapakse.lk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                ericrajapakse.lk
              </a>
            </motion.p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <motion.h5 className="text-lg font-medium text-neutral-900 mb-4" variants={fadeInUp}>
              Leave us a message – we’ll get back to you soon:
            </motion.h5>
            <motion.div
              className="p-6 rounded-xl shadow-md border border-gray-200"
              variants={fadeInUp}
            >
              <ContactForm />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default page;

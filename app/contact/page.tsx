import ContactHero from '@/components/contact/ConractHero';
import ContactForm from '@/components/contact/ContactForm';
import React from 'react';

const page = () => {
  return (
    <div className=" px-6 w-full sm:px-10 md:px-20 lg:px-32 bg-white text-neutral-800 mt-39">
      {/* Hero Section */}
      <div className="mb-16">
        <ContactHero />
      </div>

      {/* Intro Text */}
      <div className="max-w-[1000px] mx-auto text-lg leading-relaxed text-gray-600 mb-16">
        <p>
          Have questions, feedback, or just want to say hello? We'd love to hear from you.
          Whether you're looking for support, partnership opportunities, or more information
          about our services, our team is ready to assist. Reach out through the form below,
          and we'll get back to you as soon as possible. Your message matters to us.
        </p>
      </div>

      {/* Map & Contact Info Section */}
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row gap-12 lg:gap-20">
        {/* Map */}
        <div className="basis-1/2">
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
        </div>

        {/* Contact Info + Form */}
        <div className="basis-1/2">
          <div className="mb-8">
            <h5 className="text-xl font-semibold text-neutral-900 mb-4 border-b pb-2 border-gray-300">
              Contact Info
            </h5>
            <p className="mb-3">📍 Address: #341, Galle Road, Colombo 03, Sri Lanka</p>
            <p className="mb-3">📧 Email: <a href="mailto:roshan@ericrajapakse.lk" className="text-blue-600 underline">roshan@ericrajapakse.lk</a></p>
            <p className="mb-3">📱 Mobile: <a href="tel:+94761647228" className="text-blue-600 underline">+94 76 164 7228</a></p>
            <p className="mb-6">🌐 Website: <a href="https://www.ericrajapakse.lk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">ericrajapakse.lk</a></p>
          </div>

          <div>
            <h5 className="text-lg font-medium text-neutral-900 mb-4">
              Leave us a message – we’ll get back to you soon:
            </h5>
            <div className=" p-6 rounded-xl shadow-md border border-gray-200">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

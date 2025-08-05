// pages/contact.tsx
'use client';

export default function ContactHero() {
  return (
    <section className=" bg-blue-50 py-18 px-16 w-full">
      <div className=" text-center">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
          Get in <span className="text-blue-600">Touch</span> With Us
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-blue-700 max-w-2xl mx-auto mb-10">
          We’re here to answer your questions, help with appointments, and provide support. Reach out — we’d love to hear from you!
        </p>

        {/* CTA Button */}
        <a
          href="#contact-form"
          className="inline-block bg-blue-600 text-white font-medium py-3 px-8 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
        >
          Contact Us Now
        </a>
      </div>

      {/* Decorative Blobs (Optional) */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-300 opacity-30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-52 h-52 bg-blue-200 opacity-40 rounded-full blur-2xl -z-10"></div>
    </section>
  );
}

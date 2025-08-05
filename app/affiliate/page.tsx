'use client'
import {
  FaCheckCircle,
  FaUserPlus,
  FaLink,
  FaClipboardCheck,
  FaDollarSign,
} from "react-icons/fa";

export default function AffiliatePage() {
  return (
    <div className="font-sans text-gray-800 mt-32">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-24 px-6 text-center shadow-lg">
        <h1 className="text-5xl font-extrabold mb-4">Join Our Affiliate Program</h1>
        <p className="text-xl opacity-90 mb-6">
          Earn money by sharing our products with your audience.
        </p>
        <a
          href="#howitworks"
          className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Learn More
        </a>
      </section>

      {/* Why Join */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Why Join?</h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 text-lg">
          {[
            "Earn commissions for every referral",
            "Access exclusive discounts and promo codes",
            "Get early access to new products",
            "Custom tracking dashboard",
            "Dedicated affiliate support",
          ].map((benefit, i) => (
            <li key={i} className="flex items-start gap-4">
              <FaCheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* How It Works */}
      <section id="howitworks" className="bg-gray-50 py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10 max-w-6xl mx-auto text-center">
          {[
            { icon: <FaUserPlus />, title: "1. Sign Up", desc: "Apply to join the affiliate team" },
            { icon: <FaLink />, title: "2. Get Your Link", desc: "Receive a unique referral URL" },
            { icon: <FaClipboardCheck />, title: "3. Share It", desc: "Post on blogs, social media, or email" },
            { icon: <FaDollarSign />, title: "4. Earn Money", desc: "Earn commissions for every sale" },
          ].map(({ icon, title, desc }, idx) => (
            <div key={idx} className="transition hover:-translate-y-1 duration-300">
              <div className="w-16 h-16 mx-auto flex items-center justify-center bg-blue-100 text-blue-600 rounded-full text-2xl mb-4 shadow">
                {icon}
              </div>
              <h3 className="font-semibold text-xl mb-2">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">FAQs</h2>
        <div className="space-y-8 text-gray-700">
          <div>
            <h4 className="font-semibold text-lg mb-1">How much commission do I earn?</h4>
            <p>
              You earn a percentage of each sale made through your referral link. Rates vary by product.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-1">How do I track my referrals?</h4>
            <p>
              You’ll get access to a custom dashboard to monitor clicks, signups, and commissions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-1">When do I get paid?</h4>
            <p>
              Payouts are processed monthly via PayPal or bank transfer, once you hit the minimum threshold.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

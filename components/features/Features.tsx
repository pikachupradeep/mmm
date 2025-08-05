import FeaBox from './FeaBox';
import { GrTechnology } from "react-icons/gr";
import { FaHandshakeSimple } from "react-icons/fa6";
import { MdOutlineHighQuality, MdOutlinePriceChange } from "react-icons/md";

const Features = () => {
  return (
    <div className="p-4 max-w-[1000px] m-auto mt-20">
      <h4 className="text-center font-semibold mb-6 text-2xl">Why Choose Us?</h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <FeaBox
          title="Advanced Technology"
          desc="We offer the latest hearing aid technology for clear, natural, and enhanced sound quality."
          className="rounded-lg border border-blue-400 shadow-lg p-4 transition duration-300 hover:scale-[1.03] hover:-translate-y-2 hover:shadow-xl hover:border-blue-600"
        >
          <GrTechnology className="text-6xl text-blue-700" />
        </FeaBox>

        <FeaBox
          title="Personalized Support"
          desc="Our expert team provides customized fitting and ongoing support to meet your unique needs."
          className="rounded-lg border border-blue-400 shadow-lg p-4 transition duration-300 hover:scale-[1.03] hover:-translate-y-2 hover:shadow-xl hover:border-blue-600"
        >
          <FaHandshakeSimple className="text-6xl text-blue-700" />
        </FeaBox>

        <FeaBox
          title="Trusted Quality"
          desc="We supply certified, high-quality hearing aids trusted by thousands of satisfied customers worldwide."
          className="rounded-lg border border-blue-400 shadow-lg p-4 transition duration-300 hover:scale-[1.03] hover:-translate-y-2 hover:shadow-xl hover:border-blue-600"
        >
          <MdOutlineHighQuality className="text-6xl text-blue-700" />
        </FeaBox>

        <FeaBox
          title="Affordable Prices"
          desc="Get superior hearing solutions at competitive prices without compromising on quality or performance."
          className="rounded-lg border border-blue-400 bg-blue-700 text-white p-4 transition duration-300 hover:scale-[1.03] hover:-translate-y-2 hover:shadow-xl hover:bg-white hover:text-black hover:border-blue-600"
        >
          <MdOutlinePriceChange className="text-6xl" />
        </FeaBox>
      </div>
    </div>
  );
};

export default Features;

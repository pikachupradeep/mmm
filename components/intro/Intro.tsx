import Image from "next/image"
import { FaCheck } from "react-icons/fa"
import CheckBox from "../checkbox/CheckBox"

const Intro = () => {
  return (
    <div className="p-4 mt-50 max-w-[1000px] m-auto">
        <h4 className="text-center font-semibold mb-10">Why Beltone in Sri Lanka is Special?</h4>
        <div className="flex flex-col sm:flex-row gap-6 sm:items-center">
            <div className="mb-6 sm:mb-0 sm:basis-1/2">
            <Image className="" src="/belcobvo.png" width={800} height={800} alt="convo" />
            </div>
        
            <div className="flex flex-col sm:basis-1/2 gap-6">
                <h5 className="font-semibold">Exclusive Partner of Beltone Hearing Aids</h5>
                <p>We are the only authorized distributor of Beltone Hearing Aids in Sri Lanka, offering the latest digital, rechargeable, 
                and AI-powered solutions. Our partnership ensures that 
                customers receive genuine products, competitive prices, 
                and exclusive warranties.</p>

                <h5 className="font-semibold">Advanced Hearing Solutions</h5>
                <p>AI & Rechargeable Hearing Aids – Smart technology that 
                adapts to different environments. Wireless Connectivity – 
                Seamlessly connects to smartphones, TVs, and other 
                devices. Tinnitus Management – Special features to relieve 
                ringing in the ears.</p>
            </div>
        </div>

        <div className="mt-50">
            <div className="flex flex-col sm:flex-row-reverse sm:items-center gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:basis-1/2">
              <Image className="mb-6 sm:mb-0" src="/nat1.png" width={800} height={800} alt="convo" />
              <Image className="mb-6 sm:mb-0" src="/nat2.png" width={800} height={800} alt="convo" />
               <Image className="mb-6 sm:mb-0" src="/nat3.png" width={800} height={800} alt="convo" />
              <Image className="mb-6 sm:mb-0" src="/nat4.png" width={800} height={800} alt="convo" />
            </div>

            <div className="sm:basis-1/2">
                <h5 className="font-semibold mb-4">Trusted by Healthcare Professionals & Organizations</h5>
                <p>We collaborate with ENT specialists, hospitals, and corporate clients to provide professional hearing solutions, including:</p>

                <div className="mt-4">
                    <CheckBox
                    desc="Hearing Screening for Organizations – Partnering with companies to ensure employee hearing wellness."
                     />
                    <CheckBox
                    desc="Hospital & Clinic Collaborations – Supporting ENT specialists with diagnostic tools and hearing aids"
                     />
                </div>
            </div>
            </div>








            <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-50">
                <div className="basis-1/2">
                    <Image className="mb-6 rounded-xl sm:mb-0" src="/ear.png" width={800} height={800} alt="convo" />
                </div>

            <div className="basis-1/2">
                <h4 className="font-semibold mb-2">Personalized & Professional Hearing Care</h4>
                <p className="mb-4">Unlike generic hearing aid providers, we offer a comprehensive hearing journey:</p>

                <div className="">
                     <CheckBox
                    desc="Expert Hearing Assessments – Conducted by trained professionals using advanced audiometry."
                     />

                    <CheckBox
                    desc="Customized Fittings – Tailor-made solutions to match individual needs and lifestyles."
                     />

                      <CheckBox
                    desc="Free Hearing Aid Trials – Ensuring customers experience the best solution before purchasing."
                     />

                      <CheckBox
                    desc="Dedicated Aftercare Services – Adjustments, cleaning,and repairs for long-term satisfaction. [26/03, 17:55] 
                        Beltone: Trusted by Healthcare Professionals & Organizations We collaborate with ENT specialists, hospitals, and corporate clients to provide 
                        professional hearing solutions, including:"
                     />
                </div>
            </div>
            </div>
      
        </div>
    </div>
  )
}

export default Intro
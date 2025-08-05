import Image from "next/image"
import CheckBox from "../checkbox/CheckBox"


const Commitment = () => {
  return (
    <div className="max-w-[1000px] m-auto p-4 flex flex-col sm:flex-row sm:items-center gap-6 mt-50">
        <div className="basis-1/2">
            <h4 className="mb-4 font-semibold">Commitment to Customer Satisfaction</h4>
            <p className="mb-4">At Beltone Sri Lanka, our customers come first. We believe in long-term relationships, ensuring that every individual receives the best 
             hearing care experience with:</p>

             <CheckBox
             desc="Easy Payment Plans & Discounts"
             />
              <CheckBox
             desc="Warranty & After-Sales Support"
             />
              <CheckBox
             desc="Friendly, Caring, and Experienced Staff"
             />
        </div>
        <div className="basis-1/2">
          <Image className="w-full block" src="/satifaction.png" width={800} height={800} alt="satis"/>
        </div>
    </div>
  )
}

export default Commitment
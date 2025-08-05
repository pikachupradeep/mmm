import Image from 'next/image'
import './abhero.css'
import AboutHero from '@/components/abouthero/AboutHero'

const page = () => {
  return (
    <div className='mt-38 z-[-100]'>
    

      <div className="">
        <AboutHero />
      </div>

      <div className="mt-50 max-w-[1000px] m-auto p-4">
        <h4 className='font-semibold text-center mb-4'>Beltone by Eric Rajapaksa</h4>

        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
          <div className="basis-1/2">
            <Image src="/nat5.png" width={800} height={800} alt='nat5' />
          </div>

          <div className="basis-1/2 mt-10 sm:mt-0">
            <p>To become Sri Lanka’s leading provider of high-quality spectacles and hearing solutions, offering expert care that is both accessible 
            and innovative. We aim to ensure every Sri Lankan—regardless of age, location, or income—has access to modern eye and hearing care services delivered with compassion, precision, and 
            professionalism</p>
          </div>
          
        </div>


      <div className="mt-50 max-w-[1280px] m-auto">
        <h4 className='font-semibold text-center mb-4'>A Revamped Hearing Care Clinic</h4>

        <div className="flex flex-col sm:flex-row-reverse sm:items-center sm:gap-6">
           <div className="basis-1/2">
              <h5 className='p-5 bg-blue-700 rounded-xl text-white mb-2'>Hearing Check Point – The dedicated hearing testing room</h5>
              <Image src="/nat6.png" width={800} height={800} alt='nat5' />
           </div>

          <div className="basis-1/2 mt-10 sm:mt-0">
            <p className='mb-4'>The newly revamped Eric Rajapakse Hearing Care Clinic unveiled its cutting-edge facilities, designed to provide unparalleled service 
            to its clientele. The clinic now features a fully  equipped testing room for comprehensive hearing evaluations and two modern 
            hearing aid fitting rooms.</p>

            <p>A standout innovation of the clinic is Sri Lanka’s first-ever hearing aid experience center, aptly named “Sound Space.” This 
            groundbreaking facility allows clients to immerse themselves in real-world auditory environments, enabling them to experience the 
            benefits of hearing aids in a simulated setting before making a purchase decision. This initiative demonstrates Eric Rajapakse’s commitment to combining advanced technology with 
            customer-centric care.</p>
          </div>
        </div>
      </div>

      <div className="mt-50 max-w-[1280px] m-auto">

        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
           <div className="basis-1/2">
              <h5 className='p-5 bg-blue-700 rounded-xl text-white mb-2'>Sound Space – A sound experience center where customers can try out their 
              fixed hearing aids in a simulated living 
              environment.</h5>
              <Image src="/nat7.png" width={800} height={800} alt='nat5' />
           </div>

          <div className="basis-1/2 mt-10 sm:mt-0">

          <h4 className='font-semibold mb-4'>Sound Space – A Sound Experience Center</h4>
            <p className='mb-4'>Welcome to Sound Space, where innovation meets real-life experience. This dedicated sound environment is designed to simulate everyday living spaces, giving our customers the unique 
            opportunity to test their fixed hearing aids in conditions that closely resemble their own homes.</p>

            <p>Whether it's the subtle hum of an air conditioner, the quiet murmur of conversation, or the distant sounds of city life through a window, 
            Sound Space recreates the real acoustic scenarios people encounter daily. This hands-on experience ensures that customers don’t just receive hearing aids—they receive confidence, comfort, 
            and clarity tailored to their personal needs.</p>
          </div>
        </div>
      </div>

      </div>
    </div>
  )
}

export default page
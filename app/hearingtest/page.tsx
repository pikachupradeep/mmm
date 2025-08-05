'use client'
import CheckBox from '@/components/checkbox/CheckBox'
import CheckBox2 from '@/components/checkbox/Checkbox2'
import HearingAidPage from '@/components/earcare/EarHero'
import EarcareTest from '@/components/EarcareTest'
import TestPlayer from '@/components/frequency/TestPlayer'
import GalleryHero from '@/components/gallery/GalleryHero'
import { IoWarning } from 'react-icons/io5'

const HearingTest = () => {
  return (
    <div className="mt-28  p-4">
        <div className="hearingaidhero">
        <HearingAidPage />
        </div>

        <div className="max-w-[1000px] m-auto mt-16">
        <h4 className="text-center font-semibold mb-10">Hearing Aids & Test</h4>
        <h5 className="font-semibold mb-4">Play with Our Frequency Test Player – Discover the Sound Spectrum!</h5>
        <p className="mb-4">Curious about how different sounds affect your hearing? Our Frequency Test Player lets you explore a wide range of tones — from deep bass to high-pitched frequencies — in an interactive and fun way!</p>
        <p className="mb-16">Whether you're just experimenting or checking your hearing sensitivity, this tool helps you understand how your ears respond to different sound frequencies.</p>
        
        <div className="flex gap-2 items-center mb-4">
            <IoWarning className='text-3xl text-yellow-700' />
             <h5 className="font-semibold">Important Safety Warning:</h5>
        </div>

        <div className="mb-50">
            <CheckBox
             desc='Some frequencies above 8,000Hz at high volume can be uncomfortable or even harmful to your hearing.'
             />
              <CheckBox
             desc="We recommend using moderate volume and wearing headphones only if you're comfortable."
             />
              <CheckBox
             desc='if you feel any discomfort, stop immediately.'
             />
        </div>
            
             <h4 className='text-center font-semibold'>Remember: Your ears are sensitive — treat them with care!</h4>

             <TestPlayer />

             <div className="mt-50">
                <h4 className='text-center font-semibold mt-16 mb-10'>Take Our Free Online Hearing Test – Your First Step to Better Hearing</h4>
                <p className='mb-4'>Not sure if you're experiencing hearing loss? Our quick and easy online hearing test is designed to give you a reliable overview of your current hearing ability — all from the comfort of your home.</p>
                <p>This test is completely free, takes just a few minutes, and can be the first step towards improving your quality of life.</p>

            <div className=" mt-10">
                <h4 className=' text-center font-semibold mb-10'>Why It’s Important to Take Our Online Hearing Test:</h4>
                <CheckBox2
                title='Early Detection Saves Time and Effort'
                desc='Hearing loss can be gradual. Catching it early can prevent further deterioration and help you adapt sooner.'
                />

                    <CheckBox2
                title='Awareness Leads to Action'
                desc='Most people don’t even realize they have a hearing problem until it affects their daily life. This test can help you recognize the signs early.'
                />

                    <CheckBox2
                title='Personalized Recommendations'
                desc="Based on your results, we can guide you toward the most suitable hearing solutions — whether it's hearing aids or a professional consultation."
                />

                    <CheckBox2
                title='Convenient and Confidential'
                desc='Take the test whenever you want, from wherever you are. No appointments or waiting rooms involved.'
                />

                    <CheckBox2
                title='Peace of Mind'
                desc='Even if your hearing is normal, having the clarity and assurance is worth a few minutes of your time.'
                />
           
            </div>


            <h4 className='font-semibold mt-50 mb-4 text-center'>Start Your Online Hearing Test Today</h4>
            <p className='text-center'>Your hearing matters — and we’re here to help you take the first step toward better communication, confidence, and clarity.</p>

            <EarcareTest />


            


            <div className="mt-20">
                <h4 className='font-semibold text-center mb-4'>Beltone Rely</h4>
                <h5 className='font-semibold text-center mb-10'>Download Beltone Rely Hearing Aids Technical Specifications</h5>
                <p className='mb-10'>Unlock the full potential of your hearing solution by downloading the Beltone Rely Hearing Aids Technical Specifications. This comprehensive document provides detailed information about the technology, performance, design features, and connectivity options of Beltone Rely devices.</p>
                <h5 className='font-semibold'>What’s Included in the Specifications:</h5>

                <div className="mt-10">
                    <CheckBox
                    desc='Device models and sizes'
                    />
                    <CheckBox
                    desc="Battery life and charging options"
                    />
                    <CheckBox
                    desc='Wireless connectivity & Bluetooth features'
                    />
                    <CheckBox
                    desc='Sound processing technology'
                    />
                    <CheckBox
                    desc="Compatibility with Beltone apps and accessories"
                    />
                    <CheckBox
                    desc='Environmental protection (IP ratings)'
                    />
                    <CheckBox
                    desc='Technical data for audiologists and professionals'
                    />
                </div>
            </div>

            
             </div>
    </div>
    </div>
  )
}

export default HearingTest
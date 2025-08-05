import Image from 'next/image'
import './hero.css'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Button from '../button/ButtonBg'
import ButtonBg from '../button/ButtonBg'
import ButtonBorder from '../button/ButtonBorder'

const Hero = () => {
  return (
    <div className='hero p-4 '>
    <div className="max-w-[1280px] m-auto flex justify-between items-center min-h-[80vh] md:min-h-[100vh]">

      <div className="sm:basis-1/2 flex justify-center items-center min-h-full">
        <div className="">
          <p className='mb-2'>Beltone Hearing  Aids</p>
          <h1 className='leading-20 mb-2'>The Best <span className='text-blue-700'>Hearing Aids</span>, Personalized for you</h1>
          <p className='mb-2'>Beltone hearing aids offer clear sound, comfort, and smart features for better everyday hearing.</p>

          <div className="flex gap-4 mt-4">
           <ButtonBg>Call Us Now</ButtonBg>
           <ButtonBorder>Take hearing test</ButtonBorder>
          </div>

          <div className="mt-6">
            <p>Get In Touch with</p>
            <div className="flex gap-4">
              <FaFacebook className='text-4xl text-blue-700' />
              <FaInstagram className='text-4xl text-blue-700' />
              <FaLinkedin className='text-4xl text-blue-700' />
            </div>
          </div>
        </div>
      </div>

      <div className="sm:basis-1/2 hidden sm:flex">
      
      </div>

    </div>
    </div>
  )
}

export default Hero
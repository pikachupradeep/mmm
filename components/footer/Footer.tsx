import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Input } from '../ui/input'
import ButtonBg from '../button/ButtonBg'

const Footer = () => {
  return (
    <div className='w-full bg-gray-800 p-4 text-white'>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        <div className="">
          <h1 className="text-3xl">Logo</h1>

          <p>Beltone by Erik rajapaksha</p>
        </div>
        <div className="flex flex-col">

          <h6 className='mb-4'>Useful Links</h6>
          <Link className='mb-3 text-[1.2rem] md:text-[1.3rem]' href="/about">About</Link>
          <Link className='mb-3 text-[1.2rem] md:text-[1.3rem]' href="/affiliate">Affiliate membership</Link>
          <Link className='mb-3 text-[1.2rem] md:text-[1.3rem]' href="/gallery">Gallery</Link>
          <Link className='mb-3 text-[1.2rem] md:text-[1.3rem]' href="/contact">Contact</Link>
        </div>

        <div className="">
           <div className="">
              <p className='mb-4'>Get In Touch with</p>
              <div className="flex gap-4">
                  <FaFacebook className='text-4xl text-blue-700' />
                  <FaInstagram className='text-4xl text-blue-700' />
                  <FaLinkedin className='text-4xl text-blue-700' />
              </div>
            </div>
        </div>

        <div className="">
          <h6 className='mb-4'>Get the latest newsletters</h6>

          <form action="">
            <Input className='py-6 px-2 mb-4' name='' placeholder='john@example@gmail.com'  />
            <ButtonBg>Subscribe</ButtonBg>
          </form>
        </div>


      </div>

      <div className="">
        <p className='text-center'>Powered by Erik Rajapaksha pvt ltd.</p>
      </div>

    </div>
  )
}

export default Footer
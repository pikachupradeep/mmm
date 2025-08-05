'use client'

import Link from 'next/link'
import React from 'react'
import { ModeToggle } from '../theme/ThemeToggle'
import { SheetDemo } from './NavMobile'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import ButtonBg from '../button/ButtonBg'
import './navbar.css'

const Navbar = () => {
  const pathname = usePathname()

  const getLinkClass = (href: string) => `
    text-[1.2rem] relative font-medium transition duration-300 
    hover:text-blue-600
    before:content-[''] before:absolute before:-bottom-1 before:left-0 
    before:h-[2px] before:bg-blue-600 before:w-0 before:transition-all before:duration-300 
    hover:before:w-full 
    ${pathname === href ? 'text-blue-600 before:w-full' : 'text-gray-800 dark:text-gray-200'}
  `

  return (
    <div className='h-[6rem] w-full flex justify-between items-center shadow-xl px-4 navbar bg-white dark:bg-black
    fixed z-[100]'>
      {/* Logo */}
      <Link href="/">
        <Image
          src="/Logowhite.png"
          width={200}
          height={200}
          alt="Logo"
          className='h-14 w-auto object-cover'
        />
      </Link>

      {/* Hidden ModeToggle (if needed later) */}
      <div className="hidden">
        <ModeToggle />
      </div>

      {/* Nav Items */}
      <ul className='gap-10 hidden sm:flex'>
        <li><Link style={{fontSize: '1.4rem'}} href="/" className={getLinkClass('/')}>Home</Link></li>
        <li><Link style={{fontSize: '1.4rem'}} href="/about" className={getLinkClass('/about')}>About</Link></li>
        <li><Link style={{fontSize: '1.4rem'}} href="/affiliate" className={getLinkClass('/affiliate')}>Affiliate Membership</Link></li>
        <li><Link style={{fontSize: '1.4rem'}} href="/hearingtest" className={getLinkClass('/hearingtest')}>Hearing Test & Products</Link></li>
        <li><Link style={{fontSize: '1.4rem'}} href="/gallery" className={getLinkClass('/gallery')}>Gallery</Link></li>
        <li><Link style={{fontSize: '1.4rem'}} href="/contact" className={getLinkClass('/contact')}>Contact</Link></li>
      </ul>

      {/* Login Button */}
      <ButtonBg>Login</ButtonBg>

      {/* Mobile Nav */}
      <div className="sm:hidden">
        <SheetDemo />
      </div>
    </div>
  )
}

export default Navbar

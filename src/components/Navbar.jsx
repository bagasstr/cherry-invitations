'use client'
import Image from 'next/image'
import logo from '../assets/logo.png'
import React, { useState } from 'react'
import { TbMenu, TbX } from 'react-icons/tb'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  return (
    <header className='fixed w-full top-0 bg-bg shadow-sm'>
      <div className='max-w-5xl mx-auto mobile:py-2 tablet:py-2 py-4 px-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <Image
              src={logo}
              width={0}
              priority={logo}
              height={0}
              alt='logo'
              className='w-14 mobile:w-12 tablet:w-12 mr-4'
            />
            <h1 className='desktop:text-xl mobile:text-lg mobile:font-medium tablet:font-medium text-text mobile:leading-4 desktop:leading-5 desktop:font-semibold'>
              CITRA
              <span className='font-light text-accent'>
                <br />
                invitations
              </span>
            </h1>
          </div>
          <div className=''>
            <div
              className='desktop:hidden'
              onClick={() => setMenu((prv) => !prv)}
            >
              {menu ? null : <TbMenu className='text-2xl' />}
            </div>
            <ul
              className={`desktop:flex desktop:gap-x-7 mobile:absolute tablet:absolute tablet:px-4 mobile:px-4 tablet:py-2 mobile:py-2 tablet:top-0 mobile:top-0 tablet:right-0 mobile:right-0 tablet:transition-all mobile:transition-all tablet:ease-in-out mobile:ease-in-out tablet:duration-200 mobile:duration-200 tablet:bg-accent2 mobile:bg-accent2 tablet:w-full mobile:space-y-6 tablet:space-y-3 mobile:w-full tablet:h-screen mobile:h-screen ${
                menu
                  ? 'mobile:right-0 tablet:right-0'
                  : 'mobile:right-[-1000px] tablet:right-[-1000px]'
              }`}
            >
              <div className='flex justify-between items-center tablet:mb-8 desktop:hidden'>
                <div className='flex items-center'>
                  <Image
                    src={logo}
                    width={0}
                    priority={logo}
                    height={0}
                    alt='logo'
                    className='w-14 mobile:w-12 tablet:w-12 mr-2'
                  />
                  <h1 className='desktop:text-xl mobile:text-lg mobile:font-medium tablet:font-medium text-text mobile:leading-4 desktop:leading-3 desktop:font-semibold'>
                    CHERRY
                    <span className='font-light text-accent'>
                      <br />
                      invitation
                    </span>
                  </h1>
                </div>
                <div
                  className='text-right flex justify-end'
                  onClick={() => setMenu((prv) => !prv)}
                >
                  {menu ? <TbX className='text-2xl' /> : null}
                </div>
              </div>

              <li className='text-text cursor-pointer hover:text-accent font-light text-2xl'>
                <Link
                  to='home'
                  spy={true}
                  smooth={true}
                  duration={200}
                  onClick={() => setMenu((prv) => !prv)}
                >
                  Home
                </Link>
              </li>
              <li className='text-text cursor-pointer hover:text-accent font-light text-2xl'>
                <Link
                  to='fitur'
                  spy={true}
                  smooth={true}
                  duration={200}
                  onClick={() => setMenu((prv) => !prv)}
                >
                  Fitur
                </Link>
              </li>
              <li className='text-text cursor-pointer hover:text-accent font-light text-2xl'>
                <Link href={'/katalog'}>Katalog</Link>
              </li>
              <li className='text-text cursor-pointer hover:text-accent font-light text-2xl'>
                <Link href={'/harga'}>Harga</Link>
              </li>
              <li className='text-text cursor-pointer hover:text-accent font-light text-2xl'>
                <Link href={'/faq'}>Faq</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar

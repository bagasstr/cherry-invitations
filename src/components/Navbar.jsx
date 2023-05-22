'use client'
import Image from 'next/image'
import logo from '../assets/logo.png'
import React, { useState } from 'react'
import { TbMenu, TbX } from 'react-icons/tb'
import Link from 'next/link'

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  return (
    <>
      <header className='fixed w-full'>
        <div className='max-w-5xl mx-auto py-4 px-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <Image
                src={logo}
                width={0}
                priority={logo}
                height={0}
                alt='logo'
                className='w-14 mr-2'
              />
              <h1 className='text-xl text-text leading-5 desktop:font-normal font-semibold'>
                CHERRY
                <span className='text-light text-accent'>
                  <br />
                  invitation
                </span>
              </h1>
            </div>
            <div className=''>
              <div
                className='desktop:hidden'
                onClick={() => setMenu((prv) => !prv)}
              >
                {menu ? (
                  <TbX className='text-2xl' />
                ) : (
                  <TbMenu className='text-2xl' />
                )}
              </div>
              <ul
                className={`desktop:flex desktop:gap-x-7 mobile:absolute tablet:absolute tablet:px-4 mobile:px-4 tablet:py-4 mobile:py-4 tablet:mt-8 mobile:mt-8 tablet:right-0 mobile:right-0 tablet:transition-all mobile:transition-all tablet:ease-in-out mobile:ease-in-out tablet:duration-200 mobile:duration-200 tablet:bg-accent2 mobile:bg-accent2 tablet:w-[20%] mobile:w-[50%] tablet:h-screen mobile:h-screen ${
                  menu
                    ? 'mobile:right-0 tablet:right-0'
                    : 'mobile:right-[-1000px] tablet:right-[-1000px]'
                }`}
              >
                <li className='text-text hover:text-accent font-light text-2xl'>
                  <Link href={'/home'}>Home</Link>
                </li>
                <li className='text-text hover:text-accent font-light text-2xl'>
                  <Link href={'/fitur'}>Fitur</Link>
                </li>
                <li className='text-text hover:text-accent font-light text-2xl'>
                  <Link href={'/katalog'}>Katalog</Link>
                </li>
                <li className='text-text hover:text-accent font-light text-2xl'>
                  <Link href={'/harga'}>Harga</Link>
                </li>
                <li className='text-text hover:text-accent font-light text-2xl'>
                  <Link href={'/faq'}>Faq</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar

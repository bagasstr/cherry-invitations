'use client'
import React from 'react'
import Image from 'next/image'
import hero from '@/assets/hero.png'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='w-full bg-bg' id='home'>
      <div className='max-w-5xl mx-auto mobile:py-20 desktop:py-36 px-4'>
        <div className='mobile:text-center desktop:flex desktop:justify-between desktop:items-center'>
          <div className=''>
            <h1 className='text-3xl desktop:text-5xl font-bold text-text mb-4 mobile:flex mobile:flex-col mobile:justify-center'>
              Jasa Pembuatan Website
              <span className='text-accent ml-2'>Digital</span>
            </h1>
            <p className='text-base desktop:text-lg desktop:w-2/3 mobile:leading-5 text-text/80'>
              Buat undangan kamu jadi modern, menarik, dan aesthetic dengan
              undangan digital.
            </p>
            <div className='mobile:hidden tablet:hidden desktop:mt-12'>
              <Link
                href={'/template'}
                className='bg-accent shadow-md  text-bg px-8 py-4 rounded-xl  hover:bg-accent/95 font-semibold text-lg'
              >
                Buat Undangan
              </Link>
            </div>
          </div>
          <div className='mobile:flex mobile:justify-center'>
            <Image
              src={hero}
              width={0}
              height={0}
              alt='hero-img'
              className='w-64 desktop:w-[600px]'
            />
          </div>
          <div className='desktop:hidden mobile:mt-8'>
            <Link
              href={'/template'}
              className='bg-accent text-bg px-4 py-3 rounded-full hover:bg-accent/95'
            >
              Buat Undangan
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

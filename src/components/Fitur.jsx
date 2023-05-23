'use client'
import Image from 'next/image'
import React from 'react'
import md from '../assets/mudah-digunakan.png'

const Fitur = () => {
  return (
    <div id='fitur'>
      <div className='w-full'>
        <div className='max-w-5xl mx-auto mobile:py-14 desktop:py-36 desktop:px-2'>
          <div className='mobile:text-center'>
            <div className='mb-4'>
              <h1 className='font-bold text-3xl desktop:text-4xl text-text'>
                Keunggulan Undangan Digital
              </h1>
            </div>
            <div className='mt-12 desktop:mt-16 desktop:flex desktop:justify-between desktop:items-center desktop:max-w-3xl desktop:mx-auto'>
              <div className='mobile:flex mobile:justify-center'>
                <Image
                  src={md}
                  width={0}
                  height={0}
                  alt='md'
                  className='mobile:mb-8 w-52 desktop:w-72'
                />
              </div>
              <div className='desktop:ml-24'>
                <h1 className='text-2xl desktop:text-3xl font-semibold desktop:font-bold mb-2 text-text'>
                  Mudah Digunakan
                </h1>
                <p className='text-sm desktop:text-lg mobile:leading-4'>
                  Hanya dengan link, undangan digital bisa dibagikan keseluruh
                  tamu lengkap dengan nama tamu undangan
                </p>
              </div>
            </div>
            <div className='mt-12 desktop:mt-16 desktop:flex desktop:flex-row-reverse desktop:justify-between desktop:items-center desktop:max-w-3xl desktop:mx-auto'>
              <div className='mobile:flex mobile:justify-center'>
                <Image
                  src={md}
                  width={0}
                  height={0}
                  alt='md'
                  className='mobile:mb-8 w-52 desktop:w-72'
                />
              </div>
              <div className='desktop:mr-24'>
                <h1 className='text-2xl desktop:text-3xl font-semibold desktop:font-bold mb-2 text-text'>
                  Mudah Digunakan
                </h1>
                <p className='text-sm desktop:text-lg mobile:leading-4'>
                  Hanya dengan link, undangan digital bisa dibagikan keseluruh
                  tamu lengkap dengan nama tamu undangan
                </p>
              </div>
            </div>
            <div className='mt-12 desktop:mt-16 desktop:flex desktop:justify-between desktop:items-center desktop:max-w-3xl desktop:mx-auto'>
              <div className='mobile:flex mobile:justify-center'>
                <Image
                  src={md}
                  width={0}
                  height={0}
                  alt='md'
                  className='mobile:mb-8 w-52 desktop:w-72'
                />
              </div>
              <div className='desktop:ml-24'>
                <h1 className='text-2xl desktop:text-3xl font-semibold desktop:font-bold mb-2 text-text'>
                  Mudah Digunakan
                </h1>
                <p className='text-sm desktop:text-lg mobile:leading-4'>
                  Hanya dengan link, undangan digital bisa dibagikan keseluruh
                  tamu lengkap dengan nama tamu undangan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fitur

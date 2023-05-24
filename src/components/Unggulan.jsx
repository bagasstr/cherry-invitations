'use client'
import Image from 'next/image'
import React from 'react'

const Unggulan = () => {
  return (
    <section>
      <div className='w-full mobile:py-28 desktop:py-36'>
        <div className='max-w-5xl mx-auto desktop:px-2'>
          <div className='mobile:text-center mobile:px-6'>
            <div className='mb-4'>
              <h1 className='font-bold text-3xl desktop:text-4xl text-text'>
                Keunggulan Undangan Digital
              </h1>
            </div>
            <div className='mobile:mt-12 desktop:mt-20 desktop:flex desktop:justify-between desktop:items-center desktop:max-w-3xl desktop:mx-auto'>
              <div className='mobile:flex mobile:justify-center'>
                <img
                  src='/assets/mudah-digunakan.png'
                  alt=''
                  className='mobile:mb-8 w-52 desktop:w-72'
                />
              </div>
              <div className='desktop:ml-24'>
                <h1 className='text-2xl desktop:text-3xl font-semibold desktop:font-bold mb-2 text-text'>
                  Mudah Digunakan
                </h1>
                <p className='text-sm desktop:text-lg mobile:leading-4'>
                  Hanya dengan link, undangan digital bisa dibagikan keseluruh
                  tamu kamu lengkap dengan nama tamu undangan
                </p>
              </div>
            </div>
            <div className='mobile:mt-12 desktop:mt-20 desktop:flex desktop:flex-row-reverse desktop:justify-between desktop:items-center desktop:max-w-3xl desktop:mx-auto'>
              <div className='mobile:flex mobile:justify-center'>
                <img
                  src='/assets/mudah-digunakan.png'
                  alt=''
                  className='mobile:mb-8 w-52 desktop:w-96'
                />
              </div>
              <div className='desktop:mr-24'>
                <h1 className='text-2xl desktop:text-3xl font-semibold desktop:font-bold mb-2 text-text'>
                  Fitur Lengkap
                </h1>
                <p className='text-sm desktop:text-lg mobile:leading-4'>
                  Semua informasi ditampilkan dalam undangan dengan fitur peta
                  lokasi, galeri pre wedding, countdown timer, hingga cerita
                  cinta kamu
                </p>
              </div>
            </div>
            <div className='mobile:mt-12 desktop:mt-20 desktop:flex desktop:justify-between desktop:items-center desktop:max-w-3xl desktop:mx-auto'>
              <div className='mobile:flex mobile:justify-center'>
                <img
                  src='/assets/mudah-digunakan.png'
                  alt=''
                  className='mobile:mb-8 w-52 desktop:w-72'
                />
              </div>
              <div className='desktop:ml-24'>
                <h1 className='text-2xl desktop:text-3xl font-semibold desktop:font-bold mb-2 text-text'>
                  Modern & Kekinian
                </h1>
                <p className='text-sm desktop:text-lg mobile:leading-4'>
                  di era serba digital ini dengan menggunakan undangan digital,
                  Hari sepesial kamu menjadi modern dan kekinian.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Unggulan

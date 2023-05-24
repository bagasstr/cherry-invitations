'use client'
import Image from 'next/image'
import md from '../assets/mudah-digunakan.png'
import * as React from 'react'
import { GiCoffeeCup } from 'react-icons/gi'
import { MdFeaturedPlayList } from 'react-icons/md'
import { ImPriceTag } from 'react-icons/im'
import { BiSupport } from 'react-icons/bi'

const Mengapa = () => {
  return (
    <section>
      <div className='w-full mobile:py-18 desktop:py-30'>
        <div className='max-w-5xl mx-auto desktop:px-2'>
          <div className='mobile:text-center mobile:px-6'>
            <div className='mb-4'>
              <h1 className='font-bold text-3xl desktop:text-4xl text-text mb-5'>
                Mengapa Memilih
                <span className='text-accent font-normal ml-2'>
                  CITRA INVITATIONS
                </span>
                ?
              </h1>
              <p className='text-lg font-light'>
                Kami menawarkan solusi untuk Kamu yang ingin membuat undangan
                digital untuk pernikahan, ulang tahun, tunangan dengan cepat dan
                mudah.
              </p>
              <div className='mobile:mt-14 grid desktop:grid-cols-2 desktop:grid-rows-2 mobile:grid-cols-1 mobile:grid-rows-4 justify-items-center gap-x-4 items-center'>
                <div className=' desktop:justify-self-end mobile:self-start'>
                  <div className='w-60 bg-accent2 px-3 py-3 text-center rounded-md shadow-sm flex flex-col items-center justify-center'>
                    <GiCoffeeCup className='text-7xl text-text mb-3' />
                    <h1 className='font-bold text-2xl texttext mb-1'>
                      Terima Jadi
                    </h1>
                    <p className='font-normal text-text/80'>
                      Kamu cukup duduk santai sambil minum kopi, kita yang
                      kerjain sampai jadi, dan undangan siap disebar!
                    </p>
                  </div>
                </div>

                <div className=' desktop:justify-self-start mobile:self-start '>
                  <div className='w-60 bg-accent2 px-3 py-3 text-center rounded-md shadow-sm flex flex-col items-center '>
                    <MdFeaturedPlayList className='text-6xl text-text mb-3' />
                    <h1 className='font-bold text-2xl texttext mb-1'>
                      Fitur Lengkap
                    </h1>
                    <p className='font-normal text-text/80'>
                      Fitur yang dapat diandalkan mulai dari proses pembuatan
                      undangan hingga proses membagikan undangan
                    </p>
                  </div>
                </div>

                <div className='desktop:justify-self-end mobile:self-center'>
                  <div className='w-60 bg-accent2 px-3 py-3 text-center rounded-md shadow-sm flex flex-col items-center justify-center'>
                    <ImPriceTag className='text-6xl text-text mb-6' />
                    <h1 className='font-bold text-2xl texttext mb-1'>
                      Harga Terjangkau
                    </h1>
                    <p className='font-normal text-text/80'>
                      Buat undangan website tidak pernah semudah dan semurah ini
                    </p>
                  </div>
                </div>
                <div className='desktop:justify-self-start mobile:self-start'>
                  <div className='w-60 bg-accent2 px-3 py-3 text-center rounded-md shadow-sm flex flex-col items-center justify-center'>
                    <BiSupport className='text-7xl text-text mb-3' />
                    <h1 className='font-bold text-2xl texttext mb-1'>
                      Support Terbaik
                    </h1>
                    <p className='font-normal text-text/80'>
                      Perlu bantuan? Tenang! Tim support Kami selalu bisa
                      diandalkan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mengapa

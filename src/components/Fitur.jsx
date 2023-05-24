'use client'
import Image from 'next/image'
import md from '../assets/mudah-digunakan.png'
import * as React from 'react'
import { GiCoffeeCup } from 'react-icons/gi'
import { MdFeaturedPlayList } from 'react-icons/md'
import { ImPriceTag } from 'react-icons/im'
import { BiSupport } from 'react-icons/bi'

const Fitur = () => {
  return (
    <div className='w-full mobile:py-16 desktop:py-28' id='fitur'>
      <div className='max-w-5xl mx-auto desktop:px-2'>
        <div className='mobile:text-center mobile:px-6'>
          <div className='mb-4'>
            <h1 className='font-bold text-3xl desktop:text-4xl text-text mb-5'>
              Fitur Unggulan
            </h1>
            <p className='text-lg font-light'>
              Fitur undangan digital yang kamu dapantkan
            </p>
            <div className='mobile:mt-14 grid desktop:grid-cols-2 desktop:grid-rows-2 mobile:grid-cols-1 mobile:grid-rows-4 justify-items-center gap-x-4 items-center'>
              <div className=' desktop:justify-self-end mobile:self-start'>
                <div className='w-60 px-3 py-3 text-center rounded-md shadow-sm flex flex-col items-center justify-center'>
                  <GiCoffeeCup className='text-7xl text-text mb-3' />
                  <h1 className='font-bold text-2xl texttext mb-1'>
                    Terima Jadi
                  </h1>
                  <p className='font-normal text-text/80'>
                    Kamu cukup duduk santai sambil minum kopi, kita yang kerjain
                    sampai jadi, dan undangan siap disebar!
                  </p>
                </div>
              </div>

              <div className=' desktop:justify-self-start mobile:self-start '>
                <div className='w-60 px-3 py-3 text-center rounded-md shadow-sm flex flex-col items-center '>
                  <MdFeaturedPlayList className='text-6xl text-text mb-3' />
                  <h1 className='font-bold text-2xl texttext mb-1'>
                    Tema Menarik
                  </h1>
                  <p className='font-normal text-text/80'>
                    Terdapat berbagai macam pilihan tema dengan desain yang
                    keren dan elegan
                  </p>
                </div>
              </div>

              <div className='desktop:justify-self-end mobile:self-center'>
                <div className='w-60 px-3 py-3 text-center rounded-md shadow-sm flex flex-col items-center justify-center'>
                  <ImPriceTag className='text-6xl text-text mb-6' />
                  <h1 className='font-bold text-2xl texttext mb-1'>
                    Informasi Profil
                  </h1>
                  <p className='font-normal text-text/80'>
                    Semua informasi profil tertampil secara lengkap di undangan
                  </p>
                </div>
              </div>
              <div className='desktop:justify-self-start mobile:self-start'>
                <div className='w-60 px-3 py-3 text-center rounded-md shadow-sm flex flex-col items-center justify-center'>
                  <BiSupport className='text-7xl text-text mb-3' />
                  <h1 className='font-bold text-2xl texttext mb-1'>
                    Waktu & Lokasi
                  </h1>
                  <p className='font-normal text-text/80'>
                    Tersedia fitur penampil waktu dan lokasi akad, resepsi
                    hingga acara unduh mantu
                  </p>
                </div>
              </div>
              <div className='desktop:justify-self-start mobile:self-start'>
                <div className='w-60 px-3 py-3 text-center rounded-md shadow-sm flex flex-col items-center justify-center'>
                  <BiSupport className='text-7xl text-text mb-3' />
                  <h1 className='font-bold text-2xl texttext mb-1'>
                    Amplop Digital & Gift
                  </h1>
                  <p className='font-normal text-text/80'>
                    Tamu dapat memberikan amplop langsung secara digital
                  </p>
                </div>
              </div>
              <div className='desktop:justify-self-start mobile:self-start'>
                <div className='w-60 px-3 py-3 text-center rounded-md shadow-sm flex flex-col items-center justify-center'>
                  <BiSupport className='text-7xl text-text mb-3' />
                  <h1 className='font-bold text-2xl texttext mb-1'>
                    Foto & Musik
                  </h1>
                  <p className='font-normal text-text/80'>
                    Tersedia galeri foto dan video streaming untuk dokumentasi
                    pre/wedding
                  </p>
                </div>
              </div>
              <div className='desktop:justify-self-start mobile:self-start'>
                <div className='w-60 px-3 py-3 text-center rounded-md shadow-sm flex flex-col items-center justify-center'>
                  <BiSupport className='text-7xl text-text mb-3' />
                  <h1 className='font-bold text-2xl texttext mb-1'>
                    Petunjuk Lokasi
                  </h1>
                  <p className='font-normal text-text/80'>
                    Tampilan peta lokasi acara yang terintegrasi dengan Google
                    Maps
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fitur

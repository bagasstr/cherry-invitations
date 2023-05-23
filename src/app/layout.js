import Navbar from '@/components/Navbar'
import './globals.css'
import { Poppins, Work_Sans } from 'next/font/google'

const ws = Work_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata = {
  title: 'Cherry-Invitation',
  description: 'Jasa pembuatan website undangan pernikahan online',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={ws.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}

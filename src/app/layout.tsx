import Image from 'next/image'
import './globals.css'
import Providers from './providers'
import { Navbar, BlurB, Box, Footerr  } from '@/components'
import { Providerz } from '@/redux/providerz'

export const metadata = {
  title: 'Valton Kasami',
  description: 'Welcome to Valton\'s Portfolio! Here you can Learn About Me, you can Contact Me and you will find a collection of My Projects!',
  icons: {
    icon: 'programming.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='dark:bg-[#111111] dark:text-[white] bg-[#f5f5f5] text-[#333333]'>
        <Providers>

      <Providerz>
        
        <Box />
        <BlurB>
          <Navbar />
          <div className="relative">
      <div className="fixed top-0 left-0 w-full h-[75px] backdrop-blur-[10px] pointer-events-none z-40"></div>     
        {children}
        <Footerr />
        </div>
          </BlurB>

      </Providerz>

      
        </Providers>
      </body>
    </html>
  )
}

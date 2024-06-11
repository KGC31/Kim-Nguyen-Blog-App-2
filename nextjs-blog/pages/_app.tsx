import type { AppProps } from 'next/app'
import type { Metadata } from 'next'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import Head from 'next/head'


import { DesktopNavbar, MobileNavbar } from '../components/navbar'
import Cursor from '../components/ui/cursor'

import '../styles/global.css'

export const metadata: Metadata = {
  title: 'Kim Nguyen Blog',
  description: 'Generated with NextJS',
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <AnimatePresence mode='wait'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <motion.div key={router.pathname}> 
        {/* Tablet and Desktop navigation */}
        <div className='hidden md:block'>
          <DesktopNavbar></DesktopNavbar>
        </div>

        {/* Mobile navigation menu */}
        <div className='block md:hidden'>
          <MobileNavbar></MobileNavbar>
        </div>

        <Cursor></Cursor>
        <Component {...pageProps} />

        <motion.div className='slide-in z-50' initial={{ scaleY: 0 }}
                                          animate={{scaleY: 0 }}
                                          exit={{ scaleY: 1 }}
                                          transition={{duration: 1, ease : [0.22, 1, 0.36, 1] }}
        ></motion.div>
        <motion.div className='slide-out z-50' initial={{ scaleY: 1 }}
                                          animate={{scaleY: 0 }}
                                          exit={{ scaleY: 0 }}
                                          transition={{duration: 1, ease : [0.22, 1, 0.36, 1] }}
        ></motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
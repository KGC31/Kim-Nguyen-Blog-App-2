import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import { infinity } from 'ldrs'

infinity.register()

import '../styles/global.css'
 
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <div key={router.pathname}> 
      <l-infinity
        size="55"
        stroke="4"
        stroke-length="0.15"
        bg-opacity="0.1"
        speed="1.3"
        color="black" 
      ></l-infinity>
      <Component {...pageProps} />
    </div>
  )
}
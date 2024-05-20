'use client'
import styles from '../styles/index.module.css'

import About from '../components/index/about'
import Hero from '../components/index/hero'

export default function Home() {
  return (
    <>
        <section>
            <Hero/>
        </section>
        <section className="h-screen flex items-center justify-center">
            <About />
        </section>
    </>
  );
}

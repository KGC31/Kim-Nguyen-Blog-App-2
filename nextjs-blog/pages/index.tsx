'use client'
import styles from '../styles/index.module.css'

import About from '../components/index/about'
import Hero from '../components/index/hero'
import Contact from '../components/index/contact'

export default function Home() {
  return (
    <>
        <section>
            <Hero/>
        </section>
        <section className="h-screen flex items-center justify-center">
            <About />
        </section>
        <section className="h-screen">
            <Contact />
        </section>
    </>
  );
}

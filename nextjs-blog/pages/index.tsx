'use client'
import About from '../components/index/about'
import Hero from '../components/index/hero'
import Contact from '../components/index/contact'
import Projects from '../components/index/projects'
import Skills from '../components/index/skills'

export default function Home() {
  return (
    <>
        <section>
            <Hero/>
        </section>
        <section className='relative z-10'>
            <About />
        </section>
        <section className='my-60 z-10'>
          <Skills></Skills>
        </section>
        <Projects></Projects>
        <section className="h-screen">
            <Contact />
        </section>
    </>
  );
}

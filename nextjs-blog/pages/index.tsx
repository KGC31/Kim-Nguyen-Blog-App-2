import About from '../components/index/about'
import Hero from '../components/index/hero'
import Contact from '../components/index/contact'
import Projects from '../components/index/projects'
import Skills from '../components/index/skills'
import BlogIntro from '../components/index/blog-intro'

export default function Home() {
  return (
    <>
        <section className='h-[130vh]'>
            <Hero/>
        </section>
        <section className='relative z-10 -translate-y-48'>
            <About />
        </section>
        <section className='mx-4 md:mx-20 mb-60'>
          <Skills></Skills>
        </section>
        <section className='bg-white my-20 rounded-3xl'>
          <Projects></Projects>
        </section>
        <section className="my-40">
            <BlogIntro />
        </section>
        <section>
            <Contact />
        </section>
    </>
  );
}

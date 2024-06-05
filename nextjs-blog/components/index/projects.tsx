// import { motion, useTransform, useScroll } from 'framer-motion'
// import { useRef } from 'react';

// export default function Projects() {
//     const targetRef = useRef<HTMLDivElement | null>(null);
//     const { scrollYProgress } = useScroll({
//         target: targetRef
//     }); 

//     const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

//     return (
//         <section ref={targetRef} className='relative h-[300vh] z-10'>
//             <div className='sticky top-0 flex items overflow-hidden h-screen'>
//                 <motion.div style={{ x }} className='flex gap-4 items-center'>
//                     {/* Card */}
//                     <div className="box-content w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//                         <a href="#">
//                             <img className="rounded-t-lg" src="https://static01.nyt.com/images/2022/04/04/multimedia/15ai-nocode/15ai-nocode-videoSixteenByNineJumbo1600.jpg" alt="" />
//                         </a>
//                         <div className="p-5">
//                             <a href="#">
//                                 <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
//                             </a>
//                             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
//                             <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                                 Read more
//                                 <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
//                                 </svg>
//                             </a>
//                         </div>
//                     </div>

//                     {/* Card */}
//                     <div className="box-content w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//                         <a href="#">
//                             <img className="rounded-t-lg" src="https://static01.nyt.com/images/2022/04/04/multimedia/15ai-nocode/15ai-nocode-videoSixteenByNineJumbo1600.jpg" alt="" />
//                         </a>
//                         <div className="p-5">
//                             <a href="#">
//                                 <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
//                             </a>
//                             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
//                             <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                                 Read more
//                                 <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
//                                 </svg>
//                             </a>
//                         </div>
//                     </div>

//                     {/* Card */}
//                     <div className="box-content w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//                         <a href="#">
//                             <img className="rounded-t-lg" src="https://static01.nyt.com/images/2022/04/04/multimedia/15ai-nocode/15ai-nocode-videoSixteenByNineJumbo1600.jpg" alt="" />
//                         </a>
//                         <div className="p-5">
//                             <a href="#">
//                                 <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
//                             </a>
//                             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
//                             <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                                 Read more
//                                 <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
//                                 </svg>
//                             </a>
//                         </div>
//                     </div>

//                     {/* Card */}
//                     <div className="box-content w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//                         <a href="#">
//                             <img className="rounded-t-lg" src="https://static01.nyt.com/images/2022/04/04/multimedia/15ai-nocode/15ai-nocode-videoSixteenByNineJumbo1600.jpg" alt="" />
//                         </a>
//                         <div className="p-5">
//                             <a href="#">
//                                 <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
//                             </a>
//                             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
//                             <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                                 Read more
//                                 <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
//                                 </svg>
//                             </a>
//                         </div>
//                     </div>

//                     {/* Card */}
//                     <div className="box-content w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//                         <a href="#">
//                             <img className="rounded-t-lg" src="https://static01.nyt.com/images/2022/04/04/multimedia/15ai-nocode/15ai-nocode-videoSixteenByNineJumbo1600.jpg" alt="" />
//                         </a>
//                         <div className="p-5">
//                             <a href="#">
//                                 <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
//                             </a>
//                             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
//                             <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                                 Read more
//                                 <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
//                                 </svg>
//                             </a>
//                         </div>
//                     </div>
//                 </motion.div>
//             </div>
//         </section>
//     );
// }

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from 'next/image'
import image from '../../public/CBL-BC thumbnail.png'


function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {/* A return function for killing the animation on component unmount */ }
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer overflow-hidden">
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner h-screen w-[400vw] flex flex-row relative">
          <div className="scroll-section h-screen w-screen flex justify-center items-center p-24">
            {/* Card */}
            <div className="box-content h-full bg-transparent relative">
                <Image 
                    src={image} 
                    alt="CBL-BC thumbnail" 
                    className="opacity-70 rounded-2xl border border-white"
                    style={{objectFit: "contain"}}
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
                    <h1 className="text-white z-20 text-6xl w-full">CBL Basketball Club Landing page</h1>
                </div>
            </div>
          </div>
          <div className="scroll-section h-screen w-screen justify-center items-center">
            <h3>Section 1</h3>
          </div><div className="scroll-section h-screen w-screen justify-center items-center">
            <h3>Section 1</h3>
          </div><div className="scroll-section h-screen w-screen justify-center items-center">
            <h3>Section 1</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
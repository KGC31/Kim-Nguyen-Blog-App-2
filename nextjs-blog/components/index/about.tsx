import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const [lettersRef, setlettersRef] = useArrayRef<HTMLSpanElement>();
    const triggerRef = useRef<HTMLDivElement>(null);

    function useArrayRef<T>() {
        const refs = useRef<T[]>([]);
        refs.current = [];
        return [
            refs,
            (ref: T | null) => {
                if (ref) refs.current.push(ref);
            }
        ] as const;
    }

    const text = "Hi, my name is Kim Nguyen, a dedicated fresher software engineer at Ho Chi Minh University of Science, studying computer vision. I share a great passion for the beauty of data, the excitement of building websites, and the urge to learn new things. I am working to become a software engineer and deliver high-quality products. ";

    useEffect(() => {
        const anim = gsap.to(lettersRef.current, {
            scrollTrigger: {
                trigger: triggerRef.current,
                scrub: true,
                start: "top 80%",
                end: "bottom 80%"
            },
            color: "#000",
            duration: 5,
            stagger: 1
        });

        return () => {
            anim.kill();
        };
    }, [lettersRef]);

    return (
        <div className=''>
            <div className="reveal w-screen flex justify-center">
                <div ref={triggerRef} className='z-10 flex flex-col justify-center items-center uppercase font-bold border borer-white rounded-3xl w-11/12 md:w-9/12 px-10 py-10 bg-white'>
                    <h1 className='mb-20 text-center'>
                        [ABOUT]
                    </h1>
                    <p className="text-gray-300 md:text-6xl text-4xl text-justify w-2/3 mb-10">
                        {text.split("").map((letter, index) => (
                            <span className="reveal-text" key={index} ref={setlettersRef}>
                                {letter}
                            </span>
                        ))}
                    </p>
                </div>
            </div>
            <div className="spacing"></div>
        </div>
    );
};

export default About;

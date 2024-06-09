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

    const text = "Hi my name is Kim Nguyen, a dedicated fresher software engineer of Ho Chi Minh University of Science, working in the fields of website development and computer vision.";

    useEffect(() => {
        const anim = gsap.to(lettersRef.current, {
            scrollTrigger: {
                trigger: triggerRef.current,
                scrub: true,
                start: "top 80%",
                end: "bottom 80%"
            },
            color: "#FFF",
            duration: 5,
            stagger: 1
        });

        return () => {
            anim.kill();
        };
    }, [lettersRef]);

    return (
        <div className='my-20'>
            <div className="reveal">
                <div ref={triggerRef} className='z-10 w-screen flex justify-end px-10 uppercase font-bold'>
                    <p className="text-[#2A2A2A] md:text-8xl text-5xl text-justify w-2/3">
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

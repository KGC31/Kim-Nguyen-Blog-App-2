import { useCallback, useEffect, useRef } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"; // Import ScrollTrigger from GSAP
import type { Container, Engine } from "tsparticles-engine";
import { shuffle } from "../../scripts/shuffle";
import styles from '../../styles/index.module.css';
import gsap from 'gsap'; // Import gsap

export default function Hero() {
    const particlesRef = useRef<Container | null>(null);

    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        console.log(container);
        particlesRef.current = container || null;
    }, []);

    const shuffleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        // Initialize GSAP ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.create({
            trigger: '#tsparticles', // ID of the Particles component
            start: 'top top', // Start the animation when the top of the element hits the top of the viewport
            end: 'bottom top', // End the animation when the bottom of the element hits the bottom of the viewport
            onUpdate: self => {
                // Update particle opacity based on scroll position
                const opacity = 1 - self.progress;
                const particles = document.querySelector('#tsparticles');
                if (particles) {
                    particles.style.opacity = opacity.toString();
                }
            },
        });

        if (shuffleRef.current) {
            shuffle(shuffleRef.current);
        }

        // Cleanup function to terminate particles on unmount
        return () => {
            if (particlesRef.current) {
                particlesRef.current.destroy();
                particlesRef.current = null;
            }
        };
    }, []);

    return (
        <div className='w-screen h-screen'>
            <Particles
                id="tsparticles"
                className="z-0"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "#111",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 4,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 2 },
                        },
                    },
                    detectRetina: true,
                }}
            />
            <div className="grid justify-center place-content-center w-screen h-screen z-10 text-center">
                <h1 ref={shuffleRef} className={`shuffle text-white text-4xl sm:text-6xl z-10 ${styles.hero_title}`}>KIM NGUYEN</h1>
            </div>
        </div>
    );
}

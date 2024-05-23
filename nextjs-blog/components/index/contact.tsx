import { useEffect, useRef } from "react";
import createGlobe from "cobe";
import Link from 'next/link'

export default function Contact(){
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let phi = 0;
        let isMouseDown = false;
        let lastMouseX = 0;

        const handleMouseMove = (event: MouseEvent) => {
            if (isMouseDown) {
                const deltaX = event.clientX - lastMouseX;
                phi += deltaX * 0.01;
                lastMouseX = event.clientX;
            }
        };

        const handleMouseDown = (event: MouseEvent) => {
            isMouseDown = true;
            lastMouseX = event.clientX;
        };

        const handleMouseUp = () => {
            isMouseDown = false;
        };

        if (canvasRef.current) {
            const globe = createGlobe(canvasRef.current, {
                devicePixelRatio: 2,
                width: 600 * 2,
                height: 600 * 2,
                phi: 0,
                theta: 0,
                dark: 1,
                diffuse: 1.2,
                mapSamples: 16000,
                mapBrightness: 6,
                baseColor: [0.3, 0.3, 0.3],
                markerColor: [0.1, 0.8, 1],
                glowColor: [1, 1, 1],
                markers: [
                    // longitude latitude
                    { location: [37.7595, -122.4367], size: 0.03 },
                    { location: [40.7128, -74.006], size: 0.1 }
                ],
                onRender: (state: any) => {
                    // Called on every animation frame.
                    state.phi = phi;
                    phi += 0.01;
                }
            });

            // Add event listeners for mouse interactions
            canvasRef.current.addEventListener("mousemove", handleMouseMove);
            canvasRef.current.addEventListener("mousedown", handleMouseDown);
            window.addEventListener("mouseup", handleMouseUp);

            return () => {
                globe.destroy();
                // Clean up event listeners
                if (canvasRef.current) {
                    canvasRef.current.removeEventListener("mousemove", handleMouseMove);
                    canvasRef.current.removeEventListener("mousedown", handleMouseDown);
                }
                window.removeEventListener("mouseup", handleMouseUp);
            };
        }
    }, []);

    return (
        <>
            <div className="flex flex-row ">
                <div className="text-white z-10 flex justify-center place-items-center">
                    <div className="w-5/6 grid grid-rows-2 grid-cols-4 grid-flow-col gap-4">
                        <div className="row-span-2 col-span-2">
                            <h1 className="text-9xl">DROP ME A LINE</h1>
                        </div>
                        <div className="p">
                            <h1 className="text-3xl my-2">LOCATION</h1>
                            <p>Ho Chi Minh city</p>
                            <p>341 Cao Dat Street, District 5</p>
                        </div>
                        <div className="">
                            <h1 className="text-3xl my-2">HOURS</h1>
                            <p>Ho Chi Minh city</p>
                            <p>341 Cao Dat Street, District 5</p>
                        </div>
                        <div className="">
                            <h1 className="text-3xl my-2">CONTACT</h1>
                            <p>kimnguyenblc@gmail.com</p>
                            <p>(+84) 916 722 263</p>
                            <p>(+84) 792 289 221</p>
                        </div>
                        <div className="">
                            <h1 className="text-3xl my-2">STALK ME</h1>
                            <div className="flex flex-col items-center">
                            <div className="flex justify-center md:justify-start mb-4 gap-6">
                                <Link href="https://www.facebook.com/KGC31.dev/" className="icon icon--facebook">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                                    </svg>
                                </Link>
                                <Link href="https://www.instagram.com/kgc31.dev/" className="icon icon--instagram">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                                    </svg>
                                </Link>
                                <Link href="#" className="icon icon--linkedin">
                                    <i className="bi bi-linkedin"></i>
                                </Link>
                                <Link href="#" className="icon icon--github">
                                    <i className="bi bi-github"></i>
                                </Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

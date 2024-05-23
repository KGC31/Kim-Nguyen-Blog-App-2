import { useEffect, useRef } from "react";
import createGlobe from "cobe";

const About = () => {
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
        <div className="z-10 grid grid-cols-2 w-screen">
            <div className="">
                <canvas
                    ref={canvasRef}
                    style={{ width: 600, height: 600, maxWidth: "100%" }}
                    className="cursor-grab"
                />
            </div>
            <div className="text-white">
                <p>Hi my name is Kim</p>
            </div>
        </div>
    );
};

export default About;

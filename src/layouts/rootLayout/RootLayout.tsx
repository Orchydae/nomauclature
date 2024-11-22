import { useCallback, useEffect, useState, useRef } from "react";

import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import CurvyTransition from "../../components/transitions/curvyTransition/CurvyTransition";
import QuoteTransition from "../../components/transitions/quoteTransition/QuoteTransition";

function RootLayout() {
    const gradientRef = useRef<HTMLDivElement>(null);
    const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });

    // Memoize the moveGradient function to prevent unnecessary re-renders
    const moveGradient = useCallback((e: MouseEvent) => {
        if (!gradientRef.current) return;

        const winWidth = window.innerWidth;
        const winHeight = window.innerHeight;

        // Calculate percentage position more accurately
        const x = (e.clientX / winWidth) * 100;
        const y = (e.clientY / winHeight) * 100;

        // Use requestAnimationFrame for smoother updates
        requestAnimationFrame(() => {
            if (gradientRef.current) {
                gradientRef.current.style.setProperty("--mouse-x", `${x}%`);
                gradientRef.current.style.setProperty("--mouse-y", `${y}%`);
            }
        });
    }, []); // No dependencies needed since we're using ref

    useEffect(() => {
        // Set initial gradient position on mount 
        if (gradientRef.current) {
            gradientRef.current.style.setProperty("--mouse-x", "50%");
            gradientRef.current.style.setProperty("--mouse-y", "50%");
        }

        window.addEventListener("mousemove", moveGradient);

        return () => {
            window.removeEventListener("mousemove", moveGradient);
        };
    }, [moveGradient]); // Include moveGradient in dependencies

    return (
        <div className="root-layout-container">
            <div ref={gradientRef} className="gradient-background"/>
            {/* <Header /> */}
            <main>
                <Outlet />
            </main>
            <QuoteTransition />
            <Footer />
            

        </div>
    )
}

export default RootLayout;
import { useCallback, useEffect, useRef } from "react";

import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../../components/shared/footer/Footer";

function RootLayout() {
    const gradientRef = useRef(null);

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
            <Footer />
        </div>
    )
}

export default RootLayout;
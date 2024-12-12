import styles from './styles/app-style.module.css'

import { useCallback, useEffect, useRef } from 'react';

import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Members from './components/Members';
import MeliMelo from '../../components/melimelo/MeliMelo';
import SlidingImages from '../../components/slidingImages/SlidingImages';

function App() {

    const gradientRef = useRef<HTMLDivElement>(null);

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
        <>
            <div className={styles.appContainer}>
                <section id="home">
                    <Hero />
                </section>
                <section id="about">
                    <AboutUs />
                </section>
                <section id="members">
                    <Members />
                </section>
                <MeliMelo />
                <SlidingImages />

            </div>
            <div ref={gradientRef} className="gradient-background" />
        </>

    );
}

export default App;

// App.tsx
import styles from './styles/app-styling.module.css'
import { useEffect, useRef, useCallback } from 'react';

import Hero from './components/hero/Hero';

function App() {
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
        <div className={styles.appContainer}>
            <div ref={gradientRef} className={styles.gradientBg} />
            <div className={styles.contentContainer}>
                <Hero />
            </div>
        </div>
    );
}

export default App;

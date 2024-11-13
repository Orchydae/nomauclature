import styles from './spin-yarndings.module.css';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface SpinYarndingsProps {
    char: string;
    top?: string;
    left?: string;
}

function SpinYarndings({ char, top, left }: SpinYarndingsProps) {

    const yarndingsRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(yarndingsRef.current, {
            rotation: 360 * 2, // 2 full rotations
            ease: "none",
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
                markers: false, // Set to true for debugging
            }
        });

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <span ref={yarndingsRef} className={styles.yarndings} style={{top: top, left: left}}>
            {char}
        </span>
    )
}

export default SpinYarndings;
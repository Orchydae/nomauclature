
import styles from '../../styles/hero.module.css'

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Hero() {
    const currentYear = new Date().getFullYear();
    const yarndingsRef = useRef(null);

    useEffect(() => {
        console.log(yarndingsRef.current);
        gsap.registerPlugin(ScrollTrigger);

        const docHeight = document.documentElement.scrollHeight - window.innerHeight;

        gsap.to(yarndingsRef.current, {
            rotation: 360 * 2, // 2 full rotations
            ease: 'none',
            scrollTrigger: {
                trigger: 'body',
                start: 'top top',
                end: 'bottom bottom',
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
        <div className={styles.heroContainer}>
            <div className={styles.leftSide}>
                <div className={styles.copyright}>&#169; {currentYear}</div>
                <div className={styles.heroTitle}>
                    nomàuclature <span ref={yarndingsRef} className={styles.yarndings}>j</span>
                </div>
                <div className={styles.location}>45°30′32″N 73°33′15″W</div>
            </div>
            <div className={styles.rightSide}>
            </div>
        </div>
    )
}

export default Hero;
import styles from './curvy-transition.module.css';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

function CurvyTransition() {
    const circleContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const circleContainer = circleContainerRef.current;
        if (!circleContainer) return;

        ScrollTrigger.create({
            trigger: circleContainer,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            onUpdate: (self) => {
                const height = 50 - (self.progress * 50);
                console.log(height);
                gsap.set(circleContainer, { 
                    height: `${height}px`, 
                    overwrite: true 
                });
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach(instance => instance.kill());
        }
    })

    return(
        <div ref={circleContainerRef} className={styles.circleContainer}>
            <div className={styles.circle}></div>
        </div>
    )
}

export default CurvyTransition;
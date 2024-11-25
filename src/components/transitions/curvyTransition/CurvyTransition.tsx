import styles from './curvy-transition.module.css';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

function CurvyTransition() {
    const location = useLocation();
    const circleContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const circleContainer = circleContainerRef.current;
        if (!circleContainer) return;

        const scrollTrigger = ScrollTrigger.create({
            trigger: circleContainer,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            markers: false,
            id: `curvy-transition-${location.pathname}`,
            onUpdate: (self) => {
                const height = 50 - (self.progress * 50);
                gsap.set(circleContainer, {
                    height: `${height}px`,
                    overwrite: true
                });
            },
        });

        ScrollTrigger.refresh(true);

        const resizeObserver = new ResizeObserver(() => {
            ScrollTrigger.refresh(true);
        });

        resizeObserver.observe(circleContainer);

        return () => {
            scrollTrigger.kill();
            resizeObserver.disconnect();
        };
    }, [location]);

    return (
        <div ref={circleContainerRef} className={styles.circleContainer}>
            <div className={styles.circle}></div>
        </div>
    )
}

export default CurvyTransition;
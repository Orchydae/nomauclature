import styles from './InvertedTitle.module.css';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface InvertedTitleProps {
    text: string;
    icon: string;

}

function InvertedTitle({ text, icon}: InvertedTitleProps) {
    const iconRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        const iconElement = iconRef.current;
        const rotationAnimation = gsap.to(iconElement, {
            rotation: 360,
            scrollTrigger: {
                trigger: iconElement,
                start: 'top center',
                end: '+=2000',
                scrub: true,
                onRefresh: () => gsap.set(iconElement, { rotation: 0 })
            }
        });

        return () => {
            rotationAnimation.kill();
        }
    }, []);

    return (
        <div className={`${styles.title} ${styles.inverted}`}>
            <span>{text}</span>
            <span ref={iconRef} className={styles.icon}>{icon}</span>
        </div>
    );
}

export default InvertedTitle;
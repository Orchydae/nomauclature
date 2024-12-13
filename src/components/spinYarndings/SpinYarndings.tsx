import styles from './spin-yarndings.module.css';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface SpinYarndingsProps {
    char: string;
    style?: React.CSSProperties;
    onScroll: boolean;
}

function SpinYarndings({ char, style, onScroll }: SpinYarndingsProps) {

    const yarndingsRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let trigger: ScrollTrigger | undefined;

        if (onScroll) {
            trigger = ScrollTrigger.create({
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
                markers: false,
                onUpdate: self => {
                    gsap.set(yarndingsRef.current, {
                        rotation: 360 * 2 * self.progress,
                    });
                },
            });
        } else {
            gsap.to(yarndingsRef.current, {
                rotation: 360 * 2, // 2 full rotations
                ease: "linear",
                repeat: -1,
                duration: 5,
            });
        }


        // Cleanup
        return () => {
            trigger?.kill();
        };
    }, [onScroll]);

    return (
        <span ref={yarndingsRef} className={styles.yarndings} style={style}>
            {char}
        </span>
    )
}

export default SpinYarndings;
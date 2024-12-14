import styles from './sliding-images.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function SlidingImages() {
    const containerRef = useRef<HTMLDivElement>(null);
    const slider1Ref = useRef<HTMLDivElement>(null);
    const slider2Ref = useRef<HTMLDivElement>(null);

    const slider1 = [
        {
            color: 'var(--secondary-color)',
            src: "house-cliffs.jpg",
        },
        {
            color: 'var(--dark-color)',
            src: "buddha-hand.jpg",
        },
        {
            color: 'var(--secondary-color)',
            src: "hanoi-tower.jpg",
        },
        {
            color: 'var(--dark-color)',
            src: "riziere.jpg",
        },
    ];

    const slider2 = [
        {
            color: 'var(--dark-color)',
            src: "street-women.jpg",
        },
        {
            color: 'var(--secondary-color)',
            src: "paper-lantern.jpg",
        },
        {
            color: 'var(--dark-color)',
            src: "bird-view.jpg",
        },
        {
            color: 'var(--secondary-color)',
            src: "boat-viet.jpg",
        },
    ];

    useEffect(() => {
        const container = containerRef.current;
        const slider1 = slider1Ref.current;
        const slider2 = slider2Ref.current;

        const slidingTrigger = ScrollTrigger.create({
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            markers: false,
            onUpdate: self => {
                const x1Progress = self.progress * 150;
                const x2Progress = self.progress * -150;
                gsap.to(slider1, { x: x1Progress, overwrite: true });
                gsap.to(slider2, { x: x2Progress, overwrite: true });
            },
        });

        return () => {
            slidingTrigger.kill();
        };
    }, []);

    return (
        <div className={styles.slidingImagesContainer} ref={containerRef} >
            <div className={styles.slider} ref={slider1Ref} >
                {
                    slider1.map((project, index) => {
                        return <div
                            key={`sl1_${index}`}
                            className={styles.project}
                            style={{ backgroundColor: project.color }}
                        >
                            <div className={styles.imageContainer}>
                                <img
                                    src={`assets/${project.src}`}
                                    alt="sliding-image"
                                />
                            </div>
                        </div>
                    })
                }
            </div>
            <div className={styles.slider} ref={slider2Ref} >
                {
                    slider2.map((project, index) => {
                        return <div
                            key={`sl2_${index}`}
                            className={styles.project}
                            style={{ backgroundColor: project.color }}
                        >
                            <div className={styles.imageContainer}>
                                <img
                                    src={`assets/${project.src}`}
                                    alt="sliding-imag3"
                                />
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default SlidingImages;
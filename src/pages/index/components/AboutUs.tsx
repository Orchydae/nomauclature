import styles from '../styles/about-us-style.module.css';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

import SunButton from '../../../components/buttons/sunButton/SunButton';
import InvertedTitle from '../../../components/invertedTitle/InvertedTitle';
import MagneticDirectionButton from '../../../components/buttons/magneticDirection/MagneticDirectionButton';

gsap.registerPlugin(ScrollTrigger);

function AboutUs() {
    const yarndingsRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const yarndings = yarndingsRef.current;
        if (!container || !yarndings) return;

        let scrollTriggerInstance: ScrollTrigger;
        let currentAnimation: gsap.core.Tween;
        let resizeTimer: number;

        const createAnimation = () => {
            if (scrollTriggerInstance) scrollTriggerInstance.kill(); // Kill previous instance
            if (currentAnimation) currentAnimation.kill(); // Kill previous animation

            const containerHeight = container.getBoundingClientRect().height;

            // Set initial position
            gsap.set(yarndings, { y: 0 });

            // Create new animation
            gsap.to(yarndings, {
                rotation: 360 * 2, // 2 full rotations
                y: containerHeight,
                ease: 'none',
                scrollTrigger: {
                    trigger: 'body',
                    start: '30% center',
                    end: '60% bottom',
                    scrub: 1,
                    markers: false,
                    onRefresh: (self) => {
                        const newHeight = container.getBoundingClientRect().height;
                        if (currentAnimation) {
                            gsap.set(currentAnimation.vars, { y: newHeight });
                        }
                        self.refresh();
                    },
                    onUpdate: (self) => {
                        scrollTriggerInstance = self;
                    }
                }
            });
        };

        // Initial animation creation
        createAnimation();

        // Debounce resize handler
        const handleResize = () => {
            window.clearTimeout(resizeTimer);
            resizeTimer = window.setTimeout(createAnimation, 250);
        };

        // Update position on resize
        window.addEventListener('resize', handleResize);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            window.clearTimeout(resizeTimer);
            if (scrollTriggerInstance) scrollTriggerInstance.kill();
        };
    }, []);


    return (
        <div className={styles.aboutUsContainer}>
            <div className={styles.headline}>
                Tisser des oeuvres numériques, des voyages <i>immersifs</i> où
                chaque détail <i>émerveille</i>.
            </div>
            <div className={styles.subheading}>
                <div className={styles.yarndingsWrapper} ref={containerRef} >
                    <div ref={yarndingsRef} className={styles.yarndings}>
                        8
                    </div>
                </div>
                <div className={styles.callToAction}>

                    <div className={styles.buttonContainer}>
                        <MagneticDirectionButton text='Connaître' icon='✦' />
                    </div>
                    <div className={styles.description}>
                        Simplicité et efficacité, vos aspirations au coeur de chaque création, insufflant
                        à vos idées une clarté <i>éclatante</i> et un impact <i>inoubliable</i>.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;

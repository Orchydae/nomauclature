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
        requestAnimationFrame(() => {
            const container = containerRef.current;
            const yarndings = yarndingsRef.current;
            if (!container || !yarndingsRef.current) return;

            requestAnimationFrame(() => {
                const containerHeight = container.getBoundingClientRect().height;
                gsap.fromTo(yarndings, {
                    rotation: 0, y: 0
                }, {
                    rotation: 360 * 2, // 2 full rotations
                    y: containerHeight,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: 'body',
                        start: '30% center',
                        end: '60% bottom',
                        scrub: 1,
                        markers: true, // Set to true for debugging

                        onRefresh: (self) => {
                            if (self.progress > 0) {
                                const newHeight = container.getBoundingClientRect().height;
                                gsap.to(yarndingsRef.current, {
                                    y: newHeight,
                                    duration: 0
                                });
                            } 
                        }
                    }
                });
            });

        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
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

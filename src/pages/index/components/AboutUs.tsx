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
    const yarndingsRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.to(yarndingsRef.current, {
            rotation: 360 * 2, // 2 full rotations
            y: 500, // Move downward 200px on the y axis
            ease: 'none',
            scrollTrigger: {
                trigger: 'body',
                start: '30% center',
                end: '60%% bottom',
                scrub: 1,
                markers: true, // Set to true for debugging
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);


    return (
        <div className={styles.aboutUsContainer} ref={containerRef}>
            <div className={styles.headline}>
                Tisser des oeuvres numériques, des voyages <i>immersifs</i> où
                chaque détail <i>émerveille</i>.
            </div>
            <div className={styles.subheading}>
                <div className={styles.yarndingsWrapper}>
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

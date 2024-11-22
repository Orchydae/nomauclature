import styles from '../styles/about-us-style.module.css';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

import InvertedTitle from '../../../components/invertedTitle/InvertedTitle';
import MagneticDirectionButton from '../../../components/buttons/magneticDirection/MagneticDirectionButton';
import SpinYarndings from '../../../components/spinYarndings/SpinYarndings';

gsap.registerPlugin(ScrollTrigger);

function AboutUs() {
    const containerRef = useRef<HTMLDivElement>(null);
    const yarndingsRef = useRef<HTMLDivElement>(null);
    const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

    const updateAnimation = () => {
        const container = containerRef.current;
        const yarndings = yarndingsRef.current;
        if (!container || !yarndings) return;

        scrollTriggerRef.current?.kill();

        scrollTriggerRef.current = ScrollTrigger.create({
                trigger: container,
                start: 'top center',
                end: 'bottom center',
                scrub: 1,
                markers: false,
                animation: gsap.to(yarndings, {
                    y: () => container.getBoundingClientRect().height,
                    rotation: 360,
                }),
        });
    };

    useEffect(() => {
        updateAnimation();

        const handleResize = () => {
            updateAnimation();
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            scrollTriggerRef.current?.kill();
        }
    }, []);


    return (
        <div className={styles.aboutUsContainer}>
            <div className={styles.headline}>
                Tisser des oeuvres numériques, des voyages <i>immersifs</i> où
                chaque détail <i>émerveille</i>.
            </div>
            <div className={styles.subheading}>
                <div className={styles.yTranslationContainer} ref={containerRef}>
                    <div className={styles.yarndingsWrapper} ref={yarndingsRef} >
                        <SpinYarndings char='8' onScroll={true} />
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

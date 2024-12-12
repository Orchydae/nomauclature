import styles from '../styles/about-us-style.module.css';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

import MagneticDirectionButton from '../../../components/buttons/magneticDirection/MagneticDirectionButton';
import SpinYarndings from '../../../components/spinYarndings/SpinYarndings';

gsap.registerPlugin(ScrollTrigger);

function AboutUs() {
    const headlineRef = useRef<HTMLDivElement>(null);
    const descriptionRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const yarndingsRef = useRef<HTMLDivElement>(null);
    const scrollTriggersRef = useRef<ScrollTrigger[]>([]);
    const buttonContainerRef = useRef<HTMLDivElement>(null);

    const yarndingsAnimation = () => {
        const container = containerRef.current;
        const yarndings = yarndingsRef.current;
        if (!container || !yarndings) return;

        const trigger = ScrollTrigger.create({
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

        scrollTriggersRef.current.push(trigger);
    };

    const buttonParallax = () => {
        const buttonContainer = buttonContainerRef.current;
        if (!buttonContainer) return;

        const trigger = ScrollTrigger.create({
            trigger: headlineRef.current,
            start: 'top center',
            end: '150% center',
            scrub: 1,
            markers: false,
            animation: gsap.fromTo(buttonContainer, 
                {y: 100,}, 
                {y: 0,}
            ),
        });

        scrollTriggersRef.current.push(trigger);
    }

    useEffect(() => {
        yarndingsAnimation();
        buttonParallax();

        const handleResize = () => {
            yarndingsAnimation();
        }

        window.addEventListener('resize', handleResize);

        return () => {
            scrollTriggersRef.current.forEach(t => t.kill());
            scrollTriggersRef.current = [];
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    useEffect(() => {
        if (headlineRef.current && descriptionRef.current) {
            const splitInstance = new SplitType(headlineRef.current, { types: 'words' });

            // Wrap each word with a span that has overflow: hidden
            splitInstance.words?.forEach((word) => {
                const wrapper = document.createElement('span');
                wrapper.style.display = 'inline-block';
                wrapper.style.overflow = 'hidden';
                wrapper.style.verticalAlign = 'bottom';

                // Clone the word to avoid the "parent-child" nesting error
                const clone = word.cloneNode(true);
                wrapper.appendChild(clone);
                word.replaceWith(wrapper);
            });

            // Select all words for animation
            const words = headlineRef.current.querySelectorAll('span > div');

            // GSAP animation
            gsap.fromTo(words, {
                y: '100%',
                opacity: 0,
            }, {
                y: '0%',
                opacity: 1,
                duration: 1,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: headlineRef.current,
                    start: 'top 80%',
                    end: 'bottom 50%',
                    // markers: true,
                    toggleActions: 'play none reverse none',
                },
            });

            gsap.fromTo(descriptionRef.current, {
                y: 50,
                opacity: 0,
            }, {
                y: '0%',
                opacity: 1,
                duration: 1.5,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: descriptionRef.current,
                    start: 'top 85%',
                    end: 'top 50%',
                    // markers: true,
                    toggleActions: 'play none reverse none',
                },
            });

            return () => {
                splitInstance.revert();
            };
        }
    }, []);


    return (
        <div className={styles.aboutUsContainer}>
            <div className={styles.headline} ref={headlineRef} >
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

                    <div className={styles.buttonContainer} ref={buttonContainerRef} >
                        <MagneticDirectionButton text='Connaître' icon='✦' />
                    </div>
                    <div className={styles.description} ref={descriptionRef} >
                        Simplicité et efficacité, vos aspirations au coeur de chaque création, insufflant
                        à vos idées une clarté <i>éclatante</i> et un impact <i>inoubliable</i>.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;

import styles from '../../styles/about-us.module.css';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

import SunButton from '../../../../components/buttons/sunButton/SunButton';
import InvertedTitle from '../../../../components/invertedTitle/InvertedTitle';
import MagneticDirectionButton from '../../../../components/buttons/magneticDirection/MagneticDirectionButton';

gsap.registerPlugin(ScrollTrigger);

function AboutUs() {
    const sectionRef = useRef(null);
    const leftSideRef = useRef(null);
    const rightSideRef = useRef(null);

    useEffect(() => {
        // Apply SplitText to split lines
        if (leftSideRef.current) {
            const leftSplit = new SplitType(leftSideRef.current, { types: 'lines' });

            leftSplit.lines?.forEach((line) => {
                const wrapper = document.createElement('div');
                wrapper.classList.add('line-wrapper');
                line.parentNode?.insertBefore(wrapper, line);
                wrapper.appendChild(line);
            });

            gsap.to(leftSplit.lines, {
                y: 0,
                duration: 0.1,
                stagger: 0.1,
                delay: 1,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                    toggleActions: 'play none none reverse',
                    // markers: true,
                }
            });
        }

        if (rightSideRef.current) {

            gsap.fromTo(rightSideRef.current, { opacity: 0, y: 20 }, {
                y: 0,
                opacity: 1,
                delay: 1.5,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                    toggleActions: 'play none none reverse',
                    // markers: true,
                }
            });
        }

        // Clean up
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };

    }, []);

    // return (
    //     <section className="about-section" ref={sectionRef}>
    //         <InvertedTitle text='Que faisons-nous?' icon='✦' />
    //         <div className="container">
    //             <div className="left-side">
    //                 <span className="resume" ref={leftSideRef}>
    //                     À la croisée des chemins entre le design et la technologie, nous tissons des œuvres numériques uniques,
    //                     des voyages immersifs où chaque détail émerveille. Notre but: donner (<span style={{ fontFamily: 'var(--title-font)' }}>vie</span>)
    //                     à des aspirations éveillées de (<span style={{ fontFamily: 'var(--title-font)' }}>sens</span>).
    //                 </span>
    //                 <SunButton text="Connaître" />
    //             </div>
    //             <div className="right-side">
    //                 <span className="description" style={{ textIndent: '3em' }} ref={rightSideRef}>
    //                     Notre démarche, empreinte de simplicité et d'efficacité,
    //                     place vos aspirations au cœur de chaque création, insufflant à vos idées une clarté (<i><b>éclatante</b></i>) et un impact (<i><b>inoubliable</b></i>).
    //                 </span>
    //             </div>
    //         </div>
    //     </section>
    // );

    return (
        <div className={styles.aboutUsContainer}>
            <div className={styles.headline}>
                Tisser des oeuvres numériques, des voyages <i>immersifs</i> où
                chaque détail <i>émerveille</i>.
            </div>
            <div className={styles.subheading}>
                <div className={styles.yarndings}>
                    8
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

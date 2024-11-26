import styles from './quote-transition.module.css';

import { useRef, useEffect } from 'react';
import CurvyTransition from "../curvyTransition/CurvyTransition";
import SpinYarndings from '../../spinYarndings/SpinYarndings';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function QuoteTransition() {
    const containerRef = useRef<HTMLDivElement>(null);
    const yarndingsRef = useRef<HTMLDivElement>(null);
    const yarndingsContainerRef = useRef<HTMLDivElement>(null);
    const spinningYarndingsRef = useRef<HTMLDivElement>(null);
    const scrollTriggerRef = useRef<ScrollTrigger[]>([]);

    const updateAnimation = () => {
        const yarndings = yarndingsRef.current;
        const container = containerRef.current;
        const yarndingsContainer = yarndingsContainerRef.current;
        const spinningYarndings = spinningYarndingsRef.current
        if (!yarndings || !container || !yarndingsContainer || !spinningYarndings) return;

        // Kill existing animations to avoid duplication
        scrollTriggerRef.current.forEach(t => t.kill());
        scrollTriggerRef.current = [];

        const colorChangeTrigger = ScrollTrigger.create({
                trigger: container,
                start: 'top center',
                end: '80% center',
                scrub: 1,
                markers: false,
                onUpdate: self => {
                    const progress = self.progress;
                    const r = Math.floor(203 * progress);
                    const g = Math.floor(46 * progress);
                    const b = Math.floor(46 * (1-progress));
                    yarndings.style.color = `rgb(${r}, ${g}, ${b})`;
                },
            });

        const spinningTrigger = ScrollTrigger.create({
                trigger: container,
                start: 'top center',
                end: 'bottom center',
                scrub: 5,
                markers: false,
                animation: gsap.to(spinningYarndings, {
                    x: () => `${yarndingsContainer.offsetWidth - spinningYarndings.offsetWidth}px`,
                    rotation: 360 * 2,
            }),
        });

        scrollTriggerRef.current.push(colorChangeTrigger, spinningTrigger);
    };

    useEffect(() => {
        updateAnimation();

        const handleResize = () => {
            updateAnimation();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            scrollTriggerRef.current.forEach(t => t.kill());
        }
    }, []);

    return (
        <>
            <div className={styles.container} ref={containerRef}>
                <div className={styles.elementsContainer}>
                    <div className={styles.quoteContainer}>
                        Les <span className={styles.color} style={{color: 'var(--primary-color'}}>couleurs </span>
                        que j'aperçois, <span ref={yarndingsRef} className={styles.yarndings}>c</span> <br />
                        les perçois-tu aussi?
                    </div>
                    <div className={styles.xYarndingsTranslationContainer} ref={yarndingsContainerRef} >
                        <div className={styles.yarndingsContainer} ref={spinningYarndingsRef}>
                            <SpinYarndings char='m' onScroll={true} />
                        </div>
                    </div>

                </div>
            </div>
            <CurvyTransition />
        </>

    )
}

export default QuoteTransition;
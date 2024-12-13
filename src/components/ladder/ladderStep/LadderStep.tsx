import styles from './LadderStep.module.css';

import CirclingTextCursor from '../../customCursor/circlingTextCursor/CirclingTextCursor';
import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface LadderStepProps {
    title: string;
    description: string;
    imageUrl?: string;
}

function LadderStep({ title, description, imageUrl}: LadderStepProps) {
    const imageRef = useRef<HTMLImageElement>(null);
    const ladderStepRef = useRef<HTMLDivElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);
    const [showCursor, setShowCursor] = useState(false);
    const cursorText = "VOIR-PLUS-VOIR-PLUS-";
    const cursorRadius = 45;

    useEffect(() => {
        if (ladderStepRef.current) {
            gsap.fromTo(ladderStepRef.current, 
                { 
                    y: 100,  // Starting below the normal position
                    opacity: 0  // Starting completely invisible
                }, 
                { 
                    y: 0,  // End at normal position
                    opacity: 1,  // End at full visibility
                    duration: 1,
                    delay: 0.5,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: ladderStepRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                        // markers: true,  // For debugging purposes, you can remove this later
                    },
                });
        }
    }, []);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (ladderStepRef.current) {
            const containerRect = ladderStepRef.current.getBoundingClientRect();

            // Move the custom cursor relative to LadderStep
            if (cursorRef.current) {
                const xPos = event.clientX - containerRect.left;
                const yPos = event.clientY - containerRect.top;
                cursorRef.current.style.transform = `translate(${xPos - cursorRadius - 75}px, ${yPos - cursorRadius - 110}px)`;
            }

            // Move the hover image relative to the cursor position
            if (imageRef.current && imageUrl) {
                const offsetX = -imageRef.current.offsetWidth + 400;
                const offsetY = imageRef.current.offsetHeight + 5;
                imageRef.current.style.left = `${event.clientX - containerRect.left - offsetX}px`;
                imageRef.current.style.top = `${event.clientY - containerRect.top - offsetY}px`;
            }
        }
    };

    const handleMouseEnter = () => {
        setShowCursor(true);
    }

    const handleMouseLeave = () => {
        setShowCursor(false);
    }

    return (
        <div
            className={styles.ladderStep}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={ladderStepRef}>

            {showCursor && (
                <div className={styles.cursorContainer} ref={cursorRef}>
                    <CirclingTextCursor
                        text={cursorText}
                        radius={cursorRadius}
                    />
                </div>
            )}
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
            {imageUrl && (
                <img
                    className={styles.hoverImage}
                    src={imageUrl}
                    alt={`${title} - hover image`}
                    ref={imageRef}
                />)}
        </div>
    );
}

export default LadderStep;
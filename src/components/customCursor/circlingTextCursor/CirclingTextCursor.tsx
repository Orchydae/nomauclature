import './CirclingTextCursor.css';
import styles from './CirclingTextCursor.module.css';

import { gsap } from 'gsap';
import { useEffect } from 'react';
import Splitting from 'splitting';

interface CirclingTextCursorProps {
    text: string;
    radius: number;
}

function CirclingTextCursor({ text, radius }: CirclingTextCursorProps) {

    useEffect(() => {
        Splitting(); // Split the text into characters

        const cursor = document.querySelector(`.${styles.cursor}`);
        const cursorText = document.querySelectorAll('.char');

        const roundedText = () => {
            for (let i = 0; i < cursorText.length; i++) {
                const rotation = i * (360 / cursorText.length);
                gsap.set(cursorText[i], {
                    transformOrigin: `0px ${radius}px`,
                    x: radius,
                    rotate: rotation
                });
            }

            // Set the cursor itself
            gsap.set(cursor, {
                transformOrigin: 'center center',
                width: radius * 2, // Adjust size as needed
                height: radius * 2, // Adjust size as needed
            });

            // Create a timeline for continuous rotation
            const rotate = gsap.timeline({ repeat: -1 });
            rotate.to(cursor, {
                rotation: 360,
                duration: 5,
                ease: 'none',
            });
        };

        // Initialize the GSAP animations
        roundedText();
    }, [text, radius]);

    return (
        <div className={styles.cursor}>
            <span className={styles.cursorText} data-splitting="chars">
                {text}
            </span>
        </div>
    );
}

export default CirclingTextCursor;
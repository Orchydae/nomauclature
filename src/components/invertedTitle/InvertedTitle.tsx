import styles from './InvertedTitle.module.css';

import { useState, useEffect } from "react";

interface InvertedTitleProps {
    text: string;
    triggerElements: string[];
}

function InvertedTitle({ text, triggerElements }: InvertedTitleProps) {
    const [titleIsInverted, setTitleIsInverted] = useState(false);

    useEffect(() => {
        // Cache elements outside of the scroll handler
        const titleElement = document.querySelector(`.${styles.title}`);

        const isOverlapping = (rect1: DOMRect, rect2: DOMRect) => {
            const overlapThreshold = 5;
            return (
                rect1.bottom > rect2.top - overlapThreshold &&
                rect1.top < rect2.bottom + overlapThreshold
            );
        };

        const handleScroll = () => {

            // Get the bounding rectangles
            if (!titleElement) return;

            const rect = titleElement.getBoundingClientRect();
            // console.log("title element: ", rect);
            let hasOverlap = false;

            // Check if the title overlaps with the trigger elements
            triggerElements.forEach((triggerElement) => {
                const element = document.querySelector(triggerElement);
                if (element) {
                    const triggerRect = element.getBoundingClientRect();

                    if (isOverlapping(rect, triggerRect)) {
                        hasOverlap = true;
                    }
                }
            });

            setTitleIsInverted(hasOverlap);
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, [triggerElements]);

    return (
        <span className={`${styles.title} ${titleIsInverted ? styles.inverted : ''}`}>{text}</span>

    );
}

export default InvertedTitle;
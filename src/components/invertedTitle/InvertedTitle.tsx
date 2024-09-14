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

        const handleScroll = () => {

            // Get the bounding rectangles
            if (!titleElement) return;

            const rect = titleElement.getBoundingClientRect();
            let isOverlapping = false;

            // Check if the title overlaps with the trigger elements
            triggerElements.forEach((triggerElement) => {
                const element = document.querySelector(triggerElement);
                if (element) {
                    const elementRect = element.getBoundingClientRect();
                    if (rect.bottom > elementRect.top && rect.top < elementRect.bottom) {
                        isOverlapping = true;
                    }
                }
            });

            setTitleIsInverted(isOverlapping);
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, [titleIsInverted, triggerElements]);

    return (
        <span className={`${styles.title} ${titleIsInverted ? styles.inverted : ''}`}>{text}</span>

    );
}

export default InvertedTitle;
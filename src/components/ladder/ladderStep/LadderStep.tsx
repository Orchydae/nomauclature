
import CirclingTextCursor from '../../customCursor/circlingTextCursor/CirclingTextCursor';
import styles from './LadderStep.module.css';

import { useRef, useState } from 'react';

interface LadderStepProps {
    title: string;
    description: string;
    imageUrl?: string;
}

function LadderStep({ title, description, imageUrl }: LadderStepProps) {
    const imageRef = useRef<HTMLImageElement>(null);
    const ladderStepRef = useRef<HTMLDivElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);
    const [showCursor, setShowCursor] = useState(false);
    const cursorText = "VOIR-PLUS-VOIR-PLUS-";
    const cursorRadius = 50;

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
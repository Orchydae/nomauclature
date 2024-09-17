
import styles from './LadderStep.module.css';

import { useRef } from 'react';

interface LadderStepProps {
    title: string;
    description: string;
    imageUrl?: string;
}

function LadderStep({ title, description, imageUrl }: LadderStepProps) {
    const imageRef = useRef<HTMLImageElement>(null);
    const ladderStepRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (imageRef.current && imageUrl && ladderStepRef.current) {
            const { clientX, clientY } = event;
            const containerRect = ladderStepRef.current.getBoundingClientRect();
            const { offsetWidth, offsetHeight } = imageRef.current;

            // Calculate the offset from the container
            const offsetX = -offsetWidth + 400;
            const offsetY = offsetHeight + 5;

            // Position the image relative to the container
            imageRef.current.style.left = `${clientX - containerRect.left - offsetX}px`;
            imageRef.current.style.top = `${clientY - containerRect.top - offsetY}px`;

        }
    };

    return (
        <div 
        className={styles.ladderStep} 
        onMouseMove={handleMouseMove}
        ref={ladderStepRef}>

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
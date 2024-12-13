import styles from './image-popup.module.css';
import { useState, useRef, useEffect } from 'react';

interface ImagePopupProps {
    index: number;
    profile: {
        imgSrc: string;
        name: string;
        role: string;
    };
    className?: string;
    handleOnClick?: () => void;
}

function ImagePopup({ index, profile, className, handleOnClick }: ImagePopupProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);
    const [imageHeight, setImageHeight] = useState(0);
    const containerClassName = `${styles.imagePopupContainer} ${className || ''}`.trim();
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const handleWindowMouseMove = (event: MouseEvent) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        }

        window.addEventListener('mousemove', handleWindowMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleWindowMouseMove);
        }
    }, []);

    const handleImageLoad = () => {
        if (imageRef.current) {
            setImageHeight(imageRef.current.offsetHeight * 5);
        }
    };


    return (
        <div
            style={{ cursor: 'pointer' }}
            className={containerClassName}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleOnClick}
        >
            <div className={styles.content}>
                <span className={`${styles.name} ${isHovered ? styles.hovered : ''}`}>{profile.name}</span>
                <div className={isHovered ? `${styles.roleContainer} ${styles.hovered}` : styles.roleContainer}>
                    <span className={styles.yarndingsIndex}>{index}</span>
                    <span className={styles.role}>{profile.role}</span>
                </div>
            </div>

            <img
                ref={imageRef}
                src={profile.imgSrc}
                alt={profile.name}
                onLoad={handleImageLoad}
                className={isHovered ? styles.hovered : ''}
                style={{
                    position: 'fixed',
                    top: (mousePosition?.y ?? 0) - (imageHeight / 2),
                    left: (mousePosition?.x ?? 0) + 20,
                    pointerEvents: 'none', // Prevent image from blocking other interactions
                    zIndex: 1,
                }}
            />
        </div>
    );
}

export default ImagePopup;

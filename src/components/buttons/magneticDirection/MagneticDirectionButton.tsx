import { useEffect, useRef, useState } from 'react';
import styles from './magnetic-direction-button.module.css';

interface MagneticDirectionButtonProps {
    text: string;
    icon?: string;
    style?: React.CSSProperties;
}

function MagneticDirectionButton({ text, icon, style }: MagneticDirectionButtonProps) {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [exitDirection, setExitDirection] = useState({ x: 0, y: 0 });

    const getButtonCenter = (button: HTMLButtonElement) => {
        const rect = button.getBoundingClientRect();
        return {
            x: rect.width / 2,
            y: rect.height / 2,
        };
    }

    const magneticEffect = (e: MouseEvent) => {
        const button = buttonRef.current;
        if (!button) return;

        const rect = button.getBoundingClientRect();
        const deltaX = e.clientX - rect.left - getButtonCenter(button).x;
        const deltaY = e.clientY - rect.top - getButtonCenter(button).y;
        const strength = 0.5;

        const transX = deltaX * strength;
        const transY = deltaY * strength;

        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        setExitDirection({
            x: deltaX / (distance || 1),
            y: deltaY / (distance || 1),
        });

        button.style.transform = `translate(${transX}px, ${transY}px)`;
        button.style.backgroundPosition = `${50 + deltaX * 0.1}% ${50 + deltaY * 0.1}%`;
    };

    const directionAware = (e: MouseEvent) => {
        const button = buttonRef.current;
        if (!button) return;
        
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        button.style.setProperty('--x', x + 'px');
        button.style.setProperty('--y', y + 'px');
    };

    const resetPosition = () => {
        const button = buttonRef.current;
        if (!button) return;

        button.style.transform = 'translate(0, 0)';
        button.style.transition = 'transform 0.4s cubic-bezier(0.2, 0.885, 0.4, 1.5), background-position 0.4s ease-out';

        const exitDistance = 200;
        const newX = 50 + exitDirection.x * exitDistance * 0.1;
        const newY = 50 + exitDirection.y * exitDistance * 0.1;

        button.style.backgroundPosition = `${newX}% ${newY}%`;

        setTimeout(() => {
            if (button) {
                button.style.transition = 'none';
                button.style.backgroundPosition = '50% 50%';
            }
        }, 400);
    };

    const magneticEffectWithDirection = (e: MouseEvent) => {
        magneticEffect(e);
        directionAware(e);
    }

    useEffect(() => {
        const button = buttonRef.current;
        if (!button) return;

        const handleMouseMove = (e: MouseEvent) => magneticEffectWithDirection(e);
        const handleMouseLeave = () => resetPosition();

        button.addEventListener('mousemove', handleMouseMove);
        button.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            button.removeEventListener('mousemove', handleMouseMove);
            button.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [exitDirection]);

    return (
        <button ref={buttonRef} className={styles.buttonContainer} style={style}>
            <span>{text}</span>
            <span>{icon}</span>
        </button>
    );
}

export default MagneticDirectionButton;

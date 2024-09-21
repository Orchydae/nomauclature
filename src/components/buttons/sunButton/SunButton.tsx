import styles from './SunButton.module.css';

interface SunButtonProps {
    text: string;
    className?: string;
}

function SunButton({text, className}: SunButtonProps) {
    return (
        <button className={`${styles.sunButton} ${className}`}>
            <span className={styles.text}>{text}</span>
        </button>
    );
}

export default SunButton;
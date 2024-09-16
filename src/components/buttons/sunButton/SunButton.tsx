import styles from './SunButton.module.css';

interface SunButtonProps {
    text: string;
}

function SunButton({text}: SunButtonProps) {
    return (
        <button className={styles.sunButton}>
            <span className={styles.text}>{text}</span>
        </button>
    );
}

export default SunButton;
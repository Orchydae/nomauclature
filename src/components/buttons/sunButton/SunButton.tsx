import styles from './SunButton.module.css';

function SunButton({ text }: { text: string }) {
    return (
        <button className={styles.sunButton}>
            <span className={styles.text}>{text}</span>
        </button>
    );
}

export default SunButton;
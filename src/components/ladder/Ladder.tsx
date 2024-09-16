import styles from './Ladder.module.css';

interface LadderProps {
    title: string;
}

function Ladder({ title }: LadderProps) {
    return (
        <div className={styles.ladderContainer}>
            <span className={styles.title}>{title}</span>
        </div>
    );
}

export default Ladder;
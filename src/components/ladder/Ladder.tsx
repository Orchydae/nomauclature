/* eslint-disable @typescript-eslint/no-explicit-any */
import InvertedTitle from '../invertedTitle/InvertedTitle';
import styles from './Ladder.module.css';

interface Item {
    [key: string]: any;
}

interface LadderProps {
    title: string;
    items: Item[]; // Generic type for the items
    renderItem: (item: Item) => JSX.Element; // Function to render the items
}

function Ladder({ title, items, renderItem }: LadderProps) {
    return (
        <div className={styles.contentContainer}>
            <InvertedTitle
                text={title}
                triggerElements={[`.${styles.ladderContainer} .${styles.title}`]}
            />
            <div className={styles.ladderContainer}>
                <div className={styles.ladder}>
                    {items.map((item, index) => (
                        <div key={index} className={styles.item}>
                            {renderItem(item)}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Ladder;
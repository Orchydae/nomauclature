/* eslint-disable @typescript-eslint/no-explicit-any */
import InvertedTitle from '../invertedTitle/InvertedTitle';
import styles from './Ladder.module.css';
import LadderStep from './ladderStep/LadderStep';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

interface Item {
    [key: string]: any;
}

interface LadderProps {
    title: string;
    icon: string;
    items: Item[]; // Generic type for the items
    titleKey: string;
    descriptionKey: string;
    imageUrlKey: string;
}

function Ladder({ title, icon, items, titleKey, descriptionKey, imageUrlKey }: LadderProps) {

    return (
        <div className={styles.contentContainer}>
            <InvertedTitle
                text={title}
                icon={icon}
            />
            <div className={styles.ladderContainer}>
                {items.map((item, index) => (
                    <LadderStep
                        key={index}
                        title={item[titleKey]}
                        description={item[descriptionKey]}
                        imageUrl={item[imageUrlKey]}
                    />
                ))}
            </div>
        </div>
    );
}

export default Ladder;
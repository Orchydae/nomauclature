import styles from './image-popup.module.css';

interface ImagePopupProps {
    card: {
        link: string;
        name: string;
    };
}

function ImagePopup({ card }: ImagePopupProps) {
    return (
        <div>
            <img src={card.link} alt={card.name} className={styles.imagePopupContainer}/>
            <span className="popup__caption">{card.name}</span>
        </div>
    );
}

export default ImagePopup;
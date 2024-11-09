import ImagePopup from '../../../components/imagePopup/ImagePopup';
import styles from '../styles/members-style.module.css';

function Members() {
    return (
        <div className={styles.membersContainer}>
            <span className={styles.title}>Membres</span>

            <div className={styles.members}>
                <ImagePopup card={{ link: 'https://via.placeholder.com/200', name: 'David' }} />
                <ImagePopup card={{ link: 'https://via.placeholder.com/200', name: 'Paul' }} />    
                <ImagePopup card={{ link: 'https://via.placeholder.com/200', name: 'Yuka' }} />
            </div>
        </div>
    );
}

export default Members;
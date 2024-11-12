import ImagePopup from '../../../components/imagePopup/ImagePopup';
import styles from '../styles/members-style.module.css';
import imagePopupStyles from '../../../components/imagePopup/image-popup.module.css';

import { members } from '../data/members';

function Members() {
    return (
        <div className={styles.membersContainer}>
            <span className={styles.title}>Membres</span>

            <div className={styles.members}>
                {members.map((member, index) => {
                    const lastNameInitial = member.lastName.charAt(0).toUpperCase();
                    const isBordered = index !== 0 && index !== members.length - 1;
                    return (
                        <ImagePopup
                            key={index}
                            index={index}
                            profile={{
                                imgSrc: member.avatar,
                                name: `${member.firstName} ${lastNameInitial}.`,
                                role: member.role
                            }}
                            className={isBordered ? imagePopupStyles.bordered : ''}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default Members;
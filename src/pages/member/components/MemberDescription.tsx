import styles from '../styles/member-description.module.css'

interface MemberDescriptionProps {
    pictureSrc: string,
    description: React.ReactNode,
    experience: React.ReactNode,
    contact: React.ReactNode,
}

function MemberDescription({ pictureSrc, description, experience, contact }: MemberDescriptionProps) {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.gridItem}>
                <div className={styles.profilePictureContainer}>
                    <img src={pictureSrc} alt="profile-pic" />
                </div>
            </div>
            <div className={styles.gridItem}>
                <div className={styles.textContainer}>
                    <p className={styles.titleContainer}>
                        <span className={styles.yarndings}>1</span>
                        <span className={styles.title}>À PROPOS</span>
                    </p>
                    <div className={styles.descriptionContainer}>
                        {description}
                    </div>

                </div>
            </div>
            <div className={styles.gridItem}>
                <div className={styles.textContainer}>
                    <p className={styles.titleContainer}>
                        <span className={styles.yarndings}>2</span>
                        <span className={styles.title}>EXPÉRIENCE</span>
                    </p>
                    <div className={styles.descriptionContainer}>
                        {experience}
                    </div>
                </div>
            </div>
            <div className={styles.gridItem}>
                <div className={styles.textContainer}>
                    <p className={styles.titleContainer}>
                        <span className={styles.yarndings}>3</span>
                        <span className={styles.title}>CONTACT</span>
                    </p>
                    <div className={styles.descriptionContainer}>
                        {contact}

                    </div>
                </div>
            </div>

        </div>
    );
}

export default MemberDescription;
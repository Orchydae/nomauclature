import styles from '../styles/member-role.module.css'

function MemberRole() {
    return (
        <div className={styles.memberRoleContainer}>
            <span>Technologue créatif</span>
            <span>Développeur & Designer</span>
            <span>Full-Stack</span>
        </div>
    );
}

export default MemberRole;
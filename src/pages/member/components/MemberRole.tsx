import styles from '../styles/member-role.module.css'

interface MemberRoleProps {
    // React component
    role: React.ReactNode,
}

function MemberRole({role}: MemberRoleProps) {
    return (
        <div className={styles.memberRoleContainer}>
            {role}
        </div>
    );
}

export default MemberRole;
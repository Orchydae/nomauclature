import styles from './styles/member-style.module.css'

import MemberRole from './components/MemberRole'
import MemberDescription from './components/MemberDescription'

function Member() {
    return (
        <div className={styles.mainContainer}>
            <MemberRole/>
            <MemberDescription/>
        </div>
    )
}

export default Member
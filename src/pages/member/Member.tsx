import styles from './styles/member-style.module.css'

import { useParams} from 'react-router-dom'

import MemberRole from './components/MemberRole'
import MemberDescription from './components/MemberDescription'

import { membersData } from './data/membersData'
import ScrollToTop from '../../components/scrollToTop/ScrollToTop'

function Member() {
    const { id } = useParams<{id:string}>(); // Get the 'id' parameter from the URL
    const memberId = id ? parseInt(id, 10) : undefined; // Parse the 'id' parameter to an integer
    const member = memberId && membersData[memberId] ? membersData[memberId] : undefined; // Get the member data from the membersData object

    if (!member) {
        return <div>Member not found</div>
    }

    return (
        <div className={styles.mainContainer}>
            <ScrollToTop />
            <MemberRole role={member.role} />
            <MemberDescription
                pictureSrc={member.pictureSrc}
                description={member.description}
                experience={member.experience}
                contact={member.contact}
            />
        </div>
    )
}

export default Member
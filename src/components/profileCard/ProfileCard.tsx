import styles from './ProfileCard.module.css';

import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const socialIcons = {
    x: XIcon,
    facebook: FacebookIcon,
    linkedin: LinkedInIcon,
    instagram: InstagramIcon,
    github: GitHubIcon
}

function ProfileCard({ i, name, title, color, socialMedias = [], avatar, progress, range, targetScale }: 
    { i: number, name: string, title: string, color: string, socialMedias: Array<any>, avatar: string, progress: any, range: any, targetScale: number }) {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    })

    const scale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const cardScale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className={styles.cardContainer} >
            <motion.div className={styles.card} style={{ scale: cardScale, background: color, top: `calc(-10% + ${i * 25}px)` }}>
                <div className={styles.leftSide}>
                    <span className={styles.name} >{name}</span>
                    <span className={styles.title}>{title}</span>
                    <div className={styles.socialMedia}>
                        {socialMedias.map((social, index) => {
                            const Icon = socialIcons[social.platform];
                            return <a
                                key={index}
                                href={social.url}
                                target='_blank'
                                rel='noreferrer noopener'
                                aria-label={social.platform}>
                                <Icon className={styles.icon} />
                            </a>
                        })}
                    </div>
                </div>
                <motion.div className={styles.rightSide} style={{ scale }} >
                    <motion.img src={avatar} alt='meta-avatar' />
                </motion.div>
            </motion.div>
        </div>

    )
}
export default ProfileCard; 
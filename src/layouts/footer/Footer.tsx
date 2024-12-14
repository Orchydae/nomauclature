import styles from './footer.module.css';
import socialMedia from './SocialMedia.module.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MagneticDirectionButton from '../../components/buttons/magneticDirection/MagneticDirectionButton';
import SpinYarndings from '../../components/spinYarndings/SpinYarndings';

import { socialMediaHandler } from '../../utils/socialMediaHandler';

const buttonStyle = { 
    height: window.innerWidth < 768 ? '25px' : '50px',
    width: 'fit-content',
    padding: window.innerWidth < 768 ? '0 10px' : '0 25px',
    borderRadius: '25px',
    fontSize: window.innerWidth < 768 ? '0.7em' : '1em',
}

function Footer() {
    const formatLocalTime = () => {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, "0");
        const amOrPm = hours >= 12 ? "PM" : "AM";
        return `${hours}:${minutes} ${amOrPm}`;
    }

    const navigate = useNavigate();
    const [time, setTime] = useState(formatLocalTime());


    const handleContactClick = (type: "email" | "phone") => {
        const protocols = {
            email: "mailto:info@nomauclature.com",
            phone: "tel:+15141234567"
        };
        window.location.href = protocols[type];
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(formatLocalTime());
        }, 60000); // Update the time every minute

        return () => clearInterval(intervalId); // Clear interval on component unmount
    }, []);

    return (
        <footer className={styles.footerContainer}>
            <div className={styles.getInTouchContainer}>
                <div className={styles.messageContainer}>
                    <p className={styles.message}>Viens jaser</p>
                    <div className={styles.yarndingsContainer}>
                        <SpinYarndings
                            char="q"
                            onScroll={false}
                            style={{
                                color: "var(--secondary-color)",
                                left: "0.5em",
                            }}
                        />
                    </div>
                </div>

                <div className={styles.buttonContainer}>
                    <MagneticDirectionButton
                        text="Contacter"
                        style={{ backgroundColor: "var(--dark-color)" }}
                        onClick={() => navigate("/contact")}
                    />
                </div>

                <div className={styles.contactContainer}>
                    <MagneticDirectionButton
                        text="info@nomauclature.com"
                        style={buttonStyle}
                        onClick={() => handleContactClick("email")}
                    />
                    <MagneticDirectionButton
                        text="+1 514-123-4567"
                        style={buttonStyle}
                        onClick={() => handleContactClick("phone")}
                    />
                </div>
            </div>

            <div className={styles.linksContainer}>
                <div className={styles.leftSide}>
                    <div className={styles.versionContainer}>
                        <p className={styles.bottomTitle}>TOUS DROITS RÉSERVÉS</p>
                        <p className={styles.endText}>© {new Date().getFullYear()} Nomàuclature</p>
                    </div>
                    <div className={styles.timeContainer}>
                        <p className={styles.bottomTitle}>TEMPS LOCAL</p>
                        <p className={styles.endText}>{time}</p>
                    </div>
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.socialsContainer}>
                        <p className={styles.bottomTitle}>RÉSEAUX SOCIAUX</p>
                        <div className={styles.socials}>
                            <FacebookIcon
                                className={socialMedia.socialIcon}
                                onClick={() => socialMediaHandler("facebook")}
                            />
                            <XIcon
                                className={socialMedia.socialIcon}
                                onClick={() => socialMediaHandler("x")}
                            />

                            <LinkedInIcon
                                className={socialMedia.socialIcon}
                                onClick={() => socialMediaHandler("linkedin")}
                            />
                            <InstagramIcon
                                className={socialMedia.socialIcon}
                                onClick={() => socialMediaHandler("instagram")}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
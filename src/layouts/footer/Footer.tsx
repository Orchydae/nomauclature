import styles from './footer.module.css';
import socialMedia from './SocialMedia.module.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Stack } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MagneticDirectionButton from '../../components/buttons/magneticDirection/MagneticDirectionButton';
import SpinYarndings from '../../components/spinYarndings/SpinYarndings';

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

    const socialMediaHandler = (platform: any) => {
        switch (platform) {
            case "facebook":
                window.open("https://www.facebook.com/nomauclature", "_blank");
                break;
            case "x":
                window.open("https://www.x.com/nomauclature", "_blank");
                break;
            case "linkedin":
                window.open("https://www.linkedin.com/nomauclature", "_blank");
                break;
            case "instagram":
                window.open("https://www.instagram.com/nomauclature", "_blank");
                break;
            case "github":
                window.open("https://github.com/Orchydae/nomauclature", "_blank");
                break;
        }
    }

    const footerItems = [
        {
            title: "À propos de nous",
            links: ["Nous", "info@nomauclature.com", "514-123-4567"]
        },
        {
            title: "Portfolio",
            links: ["Notre approche", "Nos projets"]
        },
        {
            title: "Contact",
            links: [<Link to="/contact" className="links">Vient jaser</Link>]
        },
        {
            title: "Légal",
            links: ["Politique de confidentialité", "Conditions de service"]
        },
        {
            title: "Réseaux sociaux",
            links: (
                <Stack direction="row" spacing={2}>
                    <FacebookIcon style={{ color: "blue" }} />
                    <LinkedInIcon style={{ color: "blue" }} />
                    <XIcon />
                    <InstagramIcon />
                    <GitHubIcon />
                </Stack>
            )
        },
        {
            title: "Abonnez-vous à notre infolettre",
            links: (
                <form>
                    <TextField
                        label="Email"
                        placeholder="john.doe@example.com"
                        variant="outlined"
                        fullWidth={true}
                        margin="normal"
                    />
                    <Button variant="contained" color="primary" type="submit">
                        Abonnez-vous
                    </Button>
                </form>
            )
        }
    ];

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
                        style={{
                            height: '50px',
                            width: 'fit-content',
                            padding: '0 25px',
                            borderRadius: '25px',
                            fontSize: '1em'
                        }}
                        onClick={() => handleContactClick("email")}
                    />
                    <MagneticDirectionButton
                        text="+1 514-123-4567"
                        style={{
                            height: '50px',
                            width: 'fit-content',
                            padding: '0 25px',
                            borderRadius: '25px',
                            fontSize: '1em'
                        }}
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
import styles from './Footer.module.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Stack } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import SunButton from '../../buttons/sunButton/SunButton';
import { useEffect, useState } from 'react';

function Footer() {
    const formatLocalTime = () => {
        const date = new Date();
        let hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, "0");
        const amOrPm = hours >= 12 ? "PM" : "AM";
        return `${hours}:${minutes} ${amOrPm}`;
    }

    const [time, setTime] = useState(formatLocalTime());

    const handleClick = () => {
        window.location.href = "mailto:info@nomauclature.com";
    };

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
        <>
            <footer className={styles.footerContainer}>
                <div className={styles.getInTouchContainer}>
                    <div className={styles.quoteContainer}>
                        <p className={styles.quote}>Les couleurs que j'aperçois,</p>
                        <p className={styles.quote}>les perçois-tu aussi?</p>
                    </div>
                    <div className={styles.buttonContainer}>
                        <SunButton text={"Contacter"} className={"footer-sun-btn"} />
                    </div>
                    <div className={styles.contactContainer}>
                        <button className={styles.contactButton} onClick={handleClick}>
                            info@nomauclature.com
                        </button>
                    </div>
                </div>

                <div className={styles.linksContainer}>
                    <div className={styles.leftSide}>
                        <div className={styles.versionContainer}>
                            <p className={styles.bottomTitle}>TOUS DROITS RÉSERVÉS</p>
                            <p className={styles.versionNumber}>© {new Date().getFullYear()} Nomàuclature</p>
                        </div>
                        <div className={styles.timeContainer}>
                            <p className={styles.bottomTitle}>TEMPS LOCAL</p>
                            <p className={styles.time}>{time}</p>
                        </div>
                    </div>
                    <div className={styles.rightSide}>
                        <div className={styles.socialsContainer}>
                            <p className={styles.bottomTitle}>SUIVEZ-NOUS</p>
                            <div className={styles.socials}>
                                <FacebookIcon />
                                <LinkedInIcon />
                                <InstagramIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
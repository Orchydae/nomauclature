import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Stack } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Footer() {

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
            links: [
                <Stack direction="row" spacing={2}>
                    <FacebookIcon style={{ color: "blue" }} />
                    <LinkedInIcon style={{ color: "blue" }} />
                    <XIcon />
                    <InstagramIcon />
                </Stack>
            ]
        },
        {
            title: "© Nomàuclature",
            links: [new Date().getFullYear(), "Tous droits réservés"]
        },
        {
            title: "Subscribe to our newsletter",
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
                        Subscribe
                    </Button>
                </form>
            )
        }
    ];

    return (
        <>
            <div className="footer-quote">
                <p>Les couleurs que j'aperçois, les perçois-tu aussi?</p>
            </div>

            <div className="contact-us">
                <Button variant="contained" onClick={handleClick}>
                    Contactez-nous
                </Button>
            </div>

            <footer className="footer">
                {footerItems.map((section, index) => (
                    <div key={index} className="footer-column">
                        <h4 className="footer-title">{section.title}</h4>
                        <ul className="footer-list">
                            {Array.isArray(section.links) ? (
                                section.links.map((link, linkIndex) => (
                                    <li key={linkIndex} className="footer-list-item">
                                        {typeof link === "string" || typeof link === "number" ? link.toString() : link}
                                    </li>
                                ))
                            ) : (
                                <li className="footer-list-item">{section.links}</li>
                            )}
                        </ul>
                    </div>
                ))}
            </footer>
        </>
    );
}

export default Footer;
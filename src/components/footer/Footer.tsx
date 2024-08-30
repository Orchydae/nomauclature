import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Stack } from '@mui/material';

function Footer() {
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
            links: ["Vient jaser"]
        },
        {
            title: "Légal",
            links: ["Politique de confidentialité", "Conditions de service"]
        },
        {
            title: "Réseaux sociaux",
            links: (
                <Stack direction="row" spacing={2}>
                    <FacebookIcon />
                    <LinkedInIcon />
                    <XIcon />
                    <InstagramIcon />
                </Stack>
            )
        },
        {
            title: "© Nomàuclature",
            links: [new Date().getFullYear(), "Tous droits réservés"]
        }
    ];

    return (
        <footer className="footer">
            {footerItems.map((section, index) => (
                <div key={index} className="footer-column">
                    <h4 className="footer-title">{section.title}</h4>
                    <ul className="footer-list">
                        {Array.isArray(section.links) ? (
                            section.links.map((link, linkIndex) => (
                                <li key={linkIndex} className="footer-list-item">{link}</li>
                            ))
                        ) : (
                            <li className="footer-list-item">{section.links}</li>
                        )}
                    </ul>
                </div>
            ))}
        </footer>
    );
}

export default Footer;

import styles from './menu-style.module.css';

import { useState, useContext } from 'react';
import { LenisContext } from 'lenis/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { socialMediaHandler } from '../footer/socialMediaHandler';
import menuBg from '../../assets/menuBg.jpg';

function Menu() {
    const lenis = useContext(LenisContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(prevMenuOpen => {

            const newMenuOpen = !prevMenuOpen;

            const htmlElement = document.querySelector('html') as HTMLElement;
            if (newMenuOpen) {
                lenis?.lenis?.stop();
                htmlElement.style.overflow = 'auto';
            } else {
                lenis?.lenis?.start();
                htmlElement.style.overflow = 'hidden';
            }

            return newMenuOpen;
        });
    }

    const handleMenuItemClick = (path: string, section?: string) => {
        if (location.pathname !== path) {
            navigate(path);

            setTimeout(() => {
                scrollToSection(section);
            }, 100);
        } else {
            scrollToSection(section);
        }

        toggleMenu();
    }

    const scrollToSection = (section?: string) => {
        if (!section) return;

        const sectionElement = document.getElementById(section);
        if (sectionElement) {
            console.log(sectionElement);
            sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    return (
        <>
            <div className={styles.menuButtonContainer}>
                <button onClick={toggleMenu} className={menuOpen ? styles.activeButton : ''}>
                    {menuOpen ? '-' : '+'}
                </button>
            </div>
            <div
                className={`${styles.menuContainer} ${menuOpen ? styles.active : ''}`}
                style={{ backgroundImage: `url(${menuBg})`, backgroundSize: 'cover' }}
            >
                <div className={styles.contentContainer}>
                    <div className={styles.leftSide}>
                        <div className={styles.addressContainer}>
                            <span className={styles.title}>Adresse</span>
                            <span className={styles.text}>1234 Street Name</span>
                            <span className={styles.text}>City, State, 12345</span>
                        </div>
                        <div className={styles.socialMediasContainer}>
                            <span className={styles.title}>Réseaux sociaux</span>
                            <a className={styles.socialMedia} onClick={() => socialMediaHandler("facebook")}> Facebook</a>
                            <a className={styles.socialMedia} onClick={() => socialMediaHandler("x")}> X</a>
                            <a className={styles.socialMedia} onClick={() => socialMediaHandler("linkedin")}> LinkedIn</a>
                            <a className={styles.socialMedia} onClick={() => socialMediaHandler("instagram")}> Instagram</a>
                            <a className={styles.socialMedia} onClick={() => socialMediaHandler("github")}> GitHub</a>
                        </div>
                    </div>
                    <div className={styles.rightSide}>
                        <ul>
                            <li onClick={() => handleMenuItemClick('/', "home")}>Accueil</li>
                            <li onClick={() => handleMenuItemClick('/', "about")}>À propos</li>
                            <li onClick={() => handleMenuItemClick('/', "members")} >Membres</li>
                            <li>Portfolio</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Menu;
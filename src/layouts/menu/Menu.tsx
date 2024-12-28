import styles from './menu-style.module.css';

import { useState, useContext } from 'react';
import { LenisContext } from '@studio-freight/react-lenis';
import { useNavigate, useLocation } from 'react-router-dom';

import nomauclatureLogo from '/NomauclatureLogoTransparent.svg';
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
                htmlElement.style.overflow = 'hidden'; // Prevent scrolling when menu is open
            } else {
                lenis?.lenis?.start();
                htmlElement.style.overflow = 'auto'; // Allow scrolling when menu is closed
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

        if (menuOpen) toggleMenu();
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
            <div className={styles.menuHeaderContainer}>
                <div className={styles.logoContainer} onClick={() => handleMenuItemClick('/', "home")} >
                    <img src={nomauclatureLogo} alt="logo" />
                </div>
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
                            <span className={styles.title}>Localisation</span>
                            <span className={styles.text}>Basé au Québec</span>
                            <span className={styles.text}>Principalement à Longueuil</span>
                        </div>
                        <div className={styles.socialMediasContainer}>
                            <span className={styles.title}>Réseaux sociaux</span>
                            <a className={styles.socialMediaLink}>Instagram: @nomauclature</a>
                            <a className={styles.socialMediaLink}>LinkedIn: Nomàuclature</a>
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
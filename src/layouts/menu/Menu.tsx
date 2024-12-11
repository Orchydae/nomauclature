import styles from './menu-style.module.css';

import { useState, useContext } from 'react';
import { LenisContext } from 'lenis/react';

import menuBg from '../../assets/menuBg.jpg';

function Menu() {
    const lenis = useContext(LenisContext);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);

        const htmlElement = document.querySelector('html') as HTMLElement;
        if (menuOpen) {
            lenis?.lenis?.stop();
            htmlElement.style.overflow = 'auto';
        } else {
            lenis?.lenis?.start();
            htmlElement.style.overflow = 'hidden';
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
                            <a className={styles.text} >Instagram: @nomauclature</a>
                            <a className={styles.text}>LinkedIn: Nomàuclature</a>
                            <div className={styles.socialMedia}>
                                <i className="fab fa-instagram"></i>
                            </div>
                        </div>
                    </div>
                    <div className={styles.rightSide}>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
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
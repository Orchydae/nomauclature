import { useState } from 'react';
import styles from './MenuBar.module.css';
import { Link } from 'react-router-dom';
function MenuBar() {

  const [menuVisible, setMenuVisible] = useState(true);

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <>
      {menuVisible && (
        <div className={styles.menuContainer}>
          <div className={styles.leftSide}>
            <div className={styles.location}>
              <p>Adresse</p>
              <p>Québec, Montréal</p>
              <p>Dispersé et en ligne</p>
            </div>

            <div className={styles.socials}>
              Socials
              <div>
                Instagram: <a href="https://www.instagram.com/">@nomauclature</a>
              </div>
              <div>
                LinkedIn: <a href="https://www.linkedin.com/">Nomàuclature</a>
              </div>
            </div>
          </div>

          <div className={styles.rightSide}>
            <Link to="/" className={styles.link} onClick={closeMenu}>Accueil</Link> <br />
            <Link to="/nous" className={styles.link} onClick={closeMenu}>Nous</Link> <br />
            <Link to="/portfolio" className={styles.link} onClick={closeMenu}>Portfolio</Link> <br />
            <Link to="/approche" className={styles.link} onClick={closeMenu}>Approche</Link> <br />
            <Link to="/contact" className={styles.link} onClick={closeMenu}>Contact</Link>
          </div>
        </div>
      )}
    </>
  );
}

export default MenuBar;


import styles from '../styles/hero-style.module.css'

import SpinYarndings from '../../../components/spinYarndings/SpinYarndings';

function Hero() {
    const currentYear = new Date().getFullYear();

    return (
        <div className={styles.heroContainer}>
            <div className={styles.leftSide}>
                <div className={styles.copyright}>&#169; {currentYear}</div>
                <div className={styles.heroTitle}>
                    nomàuclature <SpinYarndings char="j" top= "-0.7em" left= "-0.4em" /> 
                </div>
                <div className={styles.location}>45°30′32″N 73°33′15″W</div>
            </div>
            <div className={styles.rightSide}>
            </div>
        </div>
    )
}

export default Hero;
import styles from './melimelo.module.css';

import SpinYarndings from "../spinYarndings/SpinYarndings";
import Marquee from '../marquee/Marquee';

function MeliMelo() {
    return (
        <div className={styles.melimeloContainer}>
            <div className={styles.yarndingsContainer}>
                <SpinYarndings char="a" />
            </div>
            <div className={styles.marqueeContainer}>
                <Marquee text="NOMÀUCLATURE" />
            </div>
        </div>
    )
}

export default MeliMelo;
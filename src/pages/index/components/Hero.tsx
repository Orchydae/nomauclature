
import styles from '../styles/hero-style.module.css'

import SpinYarndings from '../../../components/spinYarndings/SpinYarndings';
import VideoPlayer from '../../../components/videoPlayer/VideoPlayer';

import FlowerButterflySrc from '../../../assets/flower-butterfly.mp4';

function Hero() {
    const currentYear = new Date().getFullYear();

    return (
        <div className={styles.heroContainer}>
            <div className={styles.leftSide}>
                <div className={styles.copyright}>&#169; {currentYear}</div>
                <div className={styles.heroTitle}>
                    nomàuclature <SpinYarndings char="j" onScroll={true} style={{top: '-0.7em', left: '-0.4em'}} /> 
                </div>
                <div className={styles.location}>45°30′32″N 73°33′15″W</div>
            </div>
            <div className={styles.rightSide}>
                <VideoPlayer 
                    src={FlowerButterflySrc} 
                    autoPlay={true} 
                    loop={true}
                    muted={true}
                    playsInline={true}
                    style={{
                        width: 'auto', 
                        height: '100%',
                        position: 'relative',
                        top: window.innerWidth < 768 ? '0%' : '-39px',
                        left: window.innerWidth < 768 ? '-25%' : '-220px',
                    }}
                />
            </div>
        </div>
    )
}

export default Hero;

import styles from '../../styles/hero.module.css'

import TextCarousel from "../../../../components/textCarousel/TextCarousel";
import { useEffect, useRef } from "react";
import gsap from "gsap";

function Hero() {
    // const heroTitleRef = useRef(null);
    // const copyrightRef = useRef(null);
    // const locationRef = useRef(null);
    // const currentYear = new Date().getFullYear();

    // useEffect(() => {
    //     const heroTitleElement = heroTitleRef.current;
    //     const copyrightElement = copyrightRef.current;

    //     gsap.set(heroTitleElement, { y: -500 });
    //     gsap.set(copyrightElement, { opacity: 0 });
    //     gsap.set(locationRef.current, { opacity: 0 });
    //     const timeout = setTimeout(() => {
    //         gsap.to(locationRef.current, { opacity: 1, duration: 1.5, ease: 'power4.out' });
    //         gsap.to(copyrightElement, { opacity: 1, duration: 1.5, ease: 'power4.out' });
    //         gsap.to(heroTitleElement, { y: 0, duration: 1.5, ease: 'power4.out' });
    //     }, 3000);

    //     return () => {
    //         clearTimeout(timeout);
    //     }

    // }, []);

    // return (
    //     <div className="hero-section">
    //         {/* <TextCarousel /> */}
    //         <div className="hero-video-container">
    //             <VideoPlayer
    //                 className="hero-video"
    //                 src={redPaintShooting}
    //                 controls={false}
    //                 autoPlay={true}
    //                 loop={true}
    //                 muted={true}
    //             />
    //         </div>
    //         <div className="hero-container">
    //             <span ref={copyrightRef} className="copyright">(&#169; {currentYear})</span>
    //             <span ref={locationRef} className="based-in">45°30′32″N 73°33′15″W</span>
    //             <div className="hero-title">
    //                 <div ref={heroTitleRef} className="title">NomàuCLATurE</div>
    //             </div>
    //         </div>
    //         {/* <div className="circle"></div> */}
    //     </div>

    // )

    return (
        <div className={styles.heroContainer}>
            <div className={styles.leftSide}>
                <div className={styles.copyright}>&#169; 2021</div>
                <div className={styles.heroTitle}>
                    nomàuclature
                </div>
                <div className={styles.location}>45°30′32″N 73°33′15″W</div>
            </div>
            <div className={styles.rightSide}>
            </div>
        </div>
    )
}

export default Hero;
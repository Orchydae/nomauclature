import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './LoadingScreen.css';

function LoadingScreen() {
    const [loading, setLoading] = useState(true);
    const titleRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        // GSAP animation: Animate the text from below to its normal position
        gsap.fromTo(titleRef.current, { y: 500 }, { y: 0, duration: 1.5, ease: 'power4.out' });

        setTimeout(() => {
            // GSAP animation: Move the container up and make it disappear
            gsap.to(containerRef.current, {
                y: '-100%',
                borderBottomLeftRadius: '50%',
                borderBottomRightRadius: '50%',
                duration: 1.5,
                ease: 'power4.out',
                onComplete: () => {
                    setLoading(false); // After the animation is done, set loading to false
                }
            });
        }, 2000); // 5 seconds delay
    }, []);

    if (loading) {
        return (
            <div ref={containerRef} className="loading-screen-container">
                <div className="hero-title-container">
                    <span ref={titleRef} className="hero-title">NomàuCLATurE</span>
                </div>
            </div>
        )
    }
    return null;
}

export default LoadingScreen;
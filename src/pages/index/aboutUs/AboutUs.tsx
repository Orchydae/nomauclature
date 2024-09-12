import './AboutUs.css';

import { useState, useEffect } from "react";

function AboutUs() {
    const [titleIsInverted, setTitleIsInverted] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const titleElement = document.querySelector('.about-section .title');
            const rect = titleElement?.getBoundingClientRect();
            console.log(rect.top, rect.bottom);

            if (rect.top <= 5 && rect.bottom >= 0) {
                setTitleIsInverted(true);
            } else {
                setTitleIsInverted(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="about-section">
            <span className={`title ${titleIsInverted ? 'inverted' : ''}`}>Que faisons-nous? ✦</span>
            <div className="container">
                <div className="left-side">
                    <span className="resume">À la croisée des chemins entre le design et la technologie, nous tissons des œuvres numériques uniques,
                        des voyages immersifs où chaque détail émerveille. Notre but: donner (<span style={{ fontFamily: 'var(--title-font)' }}>vie</span>)
                        à des aspirations éveillées de (<span style={{ fontFamily: 'var(--title-font)' }}>sens</span>).</span>
                    <button>
                        <span className="text">Connaître</span>
                        <span className="symbol">☀</span>
                    </button>
                </div>
                <div className="right-side">
                    <span className="description" style={{ textIndent: '3em' }}> Notre démarche, empreinte de simplicité et d'efficacité,
                        place vos aspirations au cœur de chaque création, insufflant à vos idées une clarté (<i><b>éclatante</b></i>) et un impact (<i><b>inoubliable</b></i>).
                    </span>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;
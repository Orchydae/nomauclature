import SunButton from '../../../components/buttons/sunButton/SunButton';
import './AboutUs.css';

import { useState, useEffect } from "react";

function AboutUs() {
    const [titleIsInverted, setTitleIsInverted] = useState(false);

    useEffect(() => {
        // Cache elements outside of the scroll handler
        const titleElement = document.querySelector('.about-section .title');
        const resumeSpanElement = document.querySelector('.about-section .resume');
        const connaitreBtn = document.querySelector('.about-section button');

        const handleScroll = () => {
            if (!titleElement || !resumeSpanElement || !connaitreBtn) return;

            // Get the bounding rectangles
            const rect = titleElement.getBoundingClientRect();
            const rectResume = resumeSpanElement.getBoundingClientRect();
            const rectConnaitreBtn = connaitreBtn.getBoundingClientRect();

            // Check if the title overlaps with either the resume or the button
            const isOverlapping =
                rect.bottom > rectResume.top && rect.top < rectResume.bottom ||
                rect.bottom > rectConnaitreBtn.top && rect.top < rectConnaitreBtn.bottom;

            // Update state only if it changes
            if (isOverlapping !== titleIsInverted) {
                setTitleIsInverted(isOverlapping);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, [titleIsInverted]);

    return (
        <section className="about-section">
            <span className={`title ${titleIsInverted ? 'inverted' : ''}`}>Que faisons-nous? ✦</span>
            <div className="container">
                <div className="left-side">
                    <span className="resume">À la croisée des chemins entre le design et la technologie, nous tissons des œuvres numériques uniques,
                        des voyages immersifs où chaque détail émerveille. Notre but: donner (<span style={{ fontFamily: 'var(--title-font)' }}>vie</span>)
                        à des aspirations éveillées de (<span style={{ fontFamily: 'var(--title-font)' }}>sens</span>).</span>
                    <SunButton text="Connaître" />
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
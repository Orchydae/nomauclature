import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {horizontalLoop} from '../../helpers/horizontalLoop';
import './Marquee.css';

interface MarqueeProps {
    text: string;
    iconPath?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ text, iconPath }) => {
    const marqueeContainerRef = useRef<HTMLDivElement>(null);
    let currentScroll = 0;
    let isScrollingDown = true;

    useGSAP(() => {
        const marquees = gsap.utils.toArray('.marquee');
        const loop = horizontalLoop(marquees, {
            repeat: -1,
            speed: 0.5,
        });
    }, {
        scope: marqueeContainerRef,
    });

    return (
        <section className="marquee-container" ref={marqueeContainerRef}>
            <div className="marquee-inner">
                {Array(4).fill(0).map((_, index) => (
                    <div key={index} className="marquee">
                        <div className="marquee-text">
                            {text}
                        </div>
                        <div className="marquee-icon">
                            <img src={iconPath}></img>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Marquee;

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import {horizontalLoop} from './helpers/horizontalLoop.js';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Marquee.css';

gsap.registerPlugin(ScrollTrigger);

interface MarqueeProps {
    text: string;
    iconPath?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ text, iconPath }) => {
    const marqueeContainerRef = useRef<HTMLDivElement>(null);
    const currentScroll = useRef(0);
    const loopRef = useRef<gsap.core.Timeline | null>(null);

    useEffect(() => {

        const marquees = gsap.utils.toArray('.marquee');
        const loop = horizontalLoop(marquees, {
            repeat: -1,
            speed: 0.7,
        });

        loopRef.current = loop;

        // ScrollTrigger to detect scroll direction
        const scrollTriggerInstance = ScrollTrigger.create({
            trigger: marqueeContainerRef.current,
            start: "top bottom",
            onUpdate: (self) => {
                const scrollY = self.scroll(); // Get the current scroll value

                // If scrolling up, reverse the loop
                if (scrollY < currentScroll.current) {
                    loop.reverse(); // Reverse the animation
                } else {
                    loop.play(); // Normal direction
                }

                currentScroll.current = scrollY; // Update current scroll value
            }
        });

        return () => {
            // Clean up
            scrollTriggerInstance.kill();
            loop.kill();
        };

    }, []);

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

import './TextCarousel.css';
import {useState, useEffect} from "react";

function TextCarousel() {
    const [index, setIndex] = useState(0);
    const words = [
        "visualise",
        "concrétise",
        "design",
        "programme",
        "crée",
        "fais plus encore"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((index + 1) % words.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [index, words.length]);

    return (
        <div className="text-carousel">
            <span className="carousel-text">Je pense, donc je ({words[index]})</span>
        </div>
    );
}

export default TextCarousel;
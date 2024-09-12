import './TextCarousel.css';
import { useState, useEffect } from "react";

function TextCarousel() {
    const [index, setIndex] = useState(0);
    const words = [
        "visualise",
        "concrétise",
        "design",
        "programme",
        "crée",
        "développe",
        "façonne",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [words.length]);

    const previousIndex = (index - 1 + words.length) % words.length;
    const nextIndex = (index + 1) % words.length;

    return (
        <div className="text-carousel">
            <div className="left-side">
                Je pense, donc je
            </div>
            <div className="right-side carousel-container">
                <span className="next-word">{words[nextIndex]}</span>
                <span className="actual-word">{words[index]}</span>
                <span className="previous-word">{words[previousIndex]}</span>
            </div>
        </div>
    );
}

export default TextCarousel;

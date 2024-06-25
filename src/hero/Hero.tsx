import VideoPlayer from "../videoPlayer/VideoPlayer";
import "./Hero.css";

function Hero() {

    const currentYear = new Date().getFullYear();

    return (
        <>
            <VideoPlayer
                className="hero-video"
                src="/lava-lamp-blurred.mp4"
                controls={false}
                autoPlay={true}
                loop={true}
            />
            <div className="hero-container">
                <div className="hero-description">
                    <span>Basé au Québec</span>
                    <span>&copy;{currentYear}</span>
                </div>
                <div className="hero-title">
                    NOM<span>à</span>UCLATURE
                </div>
                <div className="hero-scroll-down">
                    &darr; Scroll down &darr;
                </div>
            </div>
        </>

    )
}

export default Hero;
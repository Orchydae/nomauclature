import VideoPlayer from "../../components/videoPlayer/VideoPlayer";
import lavaLamp from "../../assets/lava-lamp.mp4";
import "./Hero.css";

function Hero() {

    const currentYear = new Date().getFullYear();

    return (
        <div className="hero-section">
            <VideoPlayer
                className="hero-video"
                src={lavaLamp}
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
                    <span className='title-prefix'>NOM</span>
                    <span className='special' style={{fontSize: '1.4em', color: 'var(--primary-color)'}}>à</span>
                    <span className='title-suffix'>UCLATURE</span>
                </div>
                <div className="hero-scroll-down">
                    &darr; Scroll down &darr;
                </div>
            </div>
        </div>

    )
}

export default Hero;
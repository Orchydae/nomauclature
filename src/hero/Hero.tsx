import VideoPlayer from "../videoPlayer/VideoPlayer";
import "./Hero.css";

function Hero() {
    return (
        <div>
            <h1>Hero</h1>
            <VideoPlayer
                className="hero-video"
                src="/lava-lamp-blurred.mp4"
                controls={false}
                autoPlay={true}
                loop={true}
            />
        </div>
    )
}

export default Hero;
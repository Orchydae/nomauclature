
import "./Hero.css";

import TextCarousel from "../../../components/textCarousel/TextCarousel";

function Hero() {

    const currentYear = new Date().getFullYear();

    return (
        <div className="hero-section">
            <TextCarousel />
            <div className="hero-container">
            <span className="copyright">(&#169; {currentYear})</span>
                <span className="based-in">45°30′32″N 73°33′15″W</span>
                <div className="hero-title">
                    <span className="basic-font">No</span>
                    <span id="mau">MàU</span>
                    <span className="basic-font">claTure</span>
                </div>
            </div>
            {/* <div className="circle"></div> */}
        </div>

    )
}

export default Hero;
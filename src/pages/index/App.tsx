import VideoPlayer from "../../components/videoPlayer/VideoPlayer";
import lavaLamp from "../../assets/lava-lamp-diffusion.mp4";
import Hero from './hero/Hero';
import Footer from '../../components/footer/Footer';

import { Parallax } from 'react-scroll-parallax';

function App() {

  const Component = ({ color }) => (
    <Parallax translateY={[-40, 10]}>
      <div style={{ position: 'relative', height: '500px', margin: '0', padding: '0', background: color }}>Scrolling down</div>
    </Parallax>
  )

  return (
    <div className="main-container">
      <VideoPlayer
        className="hero-video"
        src={lavaLamp}
        controls={false}
        autoPlay={true}
        loop={true}
        muted={true}
      />
      <Hero />
      {/* <section style={{ height: '100vh', backgroundColor: 'orange' }}>
        <h2>Scroll down to see the effect</h2>
        <p>More content here...</p>
      </section> */}
      {/* <Component color='orange'/> */}
      <div className="description-section">
        <div className="description-container">
          <div className="left-side marquee-container">
            <div className="marquee">
              <span>Nous</span>
            </div>
            <div className="marquee">
              <span>Nous</span>
            </div>
            <div className="marquee">
              <span>Nous</span>
            </div>
          </div>
          <div className="description-approach">
            <p style={{textIndent: '2em'}}>Studio créatif passionné par la conception de sites web innovants et de produits uniques. 
            Récompensés pour la qualité de notre travail, nous excellons dans la création de marques, le design sur mesure,
            et le développement de solutions <i>adaptées</i>. À l'intersection du design et de la technologie, 
            nous nous engageons à créer des œuvres numériques <i>personnalisées</i>, offrant des expériences immersives inégalées. 
            Notre approche repose sur la simplicité et l'efficacité, en mettant vos besoins au cœur de chaque projet, pour donner vie à vos idées avec clarté et impact.</p>

          </div>
        </div>

        <Footer />
      </div>

    </div>
  )
}

export default App

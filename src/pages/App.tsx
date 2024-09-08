import VideoPlayer from "../components/videoPlayer/VideoPlayer";
import lavaLamp from "../../assets/lava-lamp-diffusion.mp4";
import Hero from './index/hero/Hero';
import Footer from '../components/footer/Footer';
import ProfileCard from '../components/profileCard/ProfileCard';

import { Parallax } from 'react-scroll-parallax';

import davidAvatar from '../../assets/david-avatar-champagne-.png';
import paulAvatar from '../../assets/paul-avatar-heart-.png';
import danielOlah from '../../assets/daniel-olah-unsplash.jpg';

function App() {

  const Component = ({ color }) => (
    <Parallax translateY={[-40, 10]}>
      <div style={{ position: 'relative', height: '500px', margin: '0', padding: '0', background: color }}>Scrolling down</div>
    </Parallax>
  )

  return (
    <main className="main-container">
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
      <section className="description-section">
        {/* <Parallax translateY={[50, 0]} speed={20}> */}
        <section className="description-container">
          <div className="left-side">
            <div className="marquee-container">
              <div className="marquee">
                <span>Nous</span>
              </div>
            </div>
            <div className="description-approach">
              <p style={{ textIndent: '3em' }}> À la croisée des chemins entre le design et la technologie, nous tissons des œuvres numériques uniques,
                des voyages immersifs où chaque détail émerveille. Notre démarche, empreinte de simplicité et d'efficacité,
                place vos aspirations au cœur de chaque création, insufflant à vos idées une clarté <i>éclatante</i> et un impact <i>inoubliable</i>.
              </p>
            </div>
            <button>
              En savoir plus ✦
            </button>
          </div>
          <div className="right-side">
            <Parallax translateY={[-50, 50]} speed={20}>
              <img src={danielOlah} alt="rodion-kutsaiev-colorful" />
            </Parallax>
          </div>

        </section>

        {/* </Parallax> */}

        {/* <Parallax translateY={[50, -50]} speed={40}> */}
        <section className="author-section">
          <ProfileCard src={davidAvatar} alt="david-avatar-champagne" name="David" title="Artiste à temps perdu" width="300" socialMedia={[
            { platform: 'x', url: 'https://www.x.com' },
            { platform: 'linkedin', url: 'https://www.linkedin.com' },
            { platform: 'instagram', url: 'https://www.instagram.com' },
            { platform: 'facebook', url: 'https://www.facebook.com' },
            { platform: 'github', url: 'https://www.github.com' },
          ]} />
          <ProfileCard src={paulAvatar} alt="paul-avatar-heart" name="Paul" title="Étudiant en génie logiciel" width="290" socialMedia={[
            { platform: 'linkedin', url: 'https://www.linkedin.com' },
          ]} />
          <ProfileCard src={"https://via.placeholder.com/250"} alt="yuka-avatar-" name="Yuka" title="Designer graphique" width="300px" socialMedia={[
            { platform: 'linkedin', url: 'https://www.linkedin.com' },
            { platform: 'instagram', url: 'https://www.instagram.com' },
          ]} />
        </section>
        {/* </Parallax> */}


        <Footer />
      </section>

    </main>
  )
}

export default App

import VideoPlayer from "../../components/videoPlayer/VideoPlayer";
import lavaLamp from "../../assets/lava-lamp-diffusion.mp4";
import Hero from './hero/Hero';
import Footer from '../../components/footer/Footer';
import ProfileCard from '../../components/profileCard/ProfileCard';

import { useRef } from 'react';
import { Parallax } from 'react-scroll-parallax';
import {motion, useScroll} from 'framer-motion';

import davidAvatar from '../../assets/david-avatar-champagne-.png';
import paulAvatar from '../../assets/paul-avatar-heart-.png';
import danielOlah from '../../assets/daniel-olah-unsplash.jpg';

import {members} from '../../data/members';

function App() {

  const container = useRef(null);
  const {scrollYProgress} = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

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
      <section className="about-section">
        <div className="left-side">
          <span className="title">✦ Qui somme-nous?</span>
          <span className="resume">Donner (vie) à des aspirations éveillées de (sens)</span>
          <span className="description" style={{ textIndent: '3em' }}> À la croisée des chemins entre le design et la technologie, nous tissons des œuvres numériques uniques,
            des voyages immersifs où chaque détail émerveille. Notre démarche, empreinte de simplicité et d'efficacité,
            place vos aspirations au cœur de chaque création, insufflant à vos idées une clarté <i>éclatante</i> et un impact <i>inoubliable</i>.
          </span>
          <button>Connaître ☀</button>
        </div>
        <div className="right-side">
          <Parallax translateY={[-20, 20]} speed={10}>
            <img src={danielOlah} alt="Daniel Olah" />
          </Parallax>
        </div>
      </section>

      <section className="us-section">
        <div className="title">✦ Notre équipe</div>
        {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          members.map((member: any, index: any) => {
            const targetScale = 1 - ((members.length - index) * 0.05);
            return (
              <ProfileCard key={index} i={index} {...member} progress={scrollYProgress} range={[index * 0.25, 1]} targetScale={targetScale}/>
            )
          })
        }
      </section>
      <Footer />

    </main>
  )
}

export default App

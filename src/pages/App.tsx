import VideoPlayer from "../components/videoPlayer/VideoPlayer";
import lavaLamp from "../assets/lava-lamp-diffusion.mp4";
import Hero from './index/hero/Hero';
import Footer from '../components/footer/Footer';
import ProfileCard from '../components/profileCard/ProfileCard';
import LoadingScreen from "../components/loading/LoadingScreen";
import React, { useRef, Suspense } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { useScroll } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import GlassCrane from '../../../public/Glass-crane';
import danielOlah from '../assets/daniel-olah-unsplash.jpg';
import { members } from '../data/members';

const Scene = React.lazy(() => import('../components/scene/Scene'));

function App() {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  return (
    <div ref={container}>
      <main className="main-container">
        <Suspense fallback={<LoadingScreen />}>
          <Scene />
        </Suspense>

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
                <ProfileCard key={index} i={index} {...member} progress={scrollYProgress} range={[index * 0.25, 1]} targetScale={targetScale} />
              )
            })
          }
        </section>

        <section className="work-section">
          <div className="title">✦ Nos réalisations</div>

        </section>

        <Footer />
      </main>
    </div>
  )
}

export default App

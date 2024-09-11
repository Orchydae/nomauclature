import VideoPlayer from "../../components/videoPlayer/VideoPlayer";
import redGradient from "../../assets/mart-production.mp4";
import redPaintShooting from "../../assets/mart-production-blk-overlay.mp4";
import Hero from './hero/Hero';
import Footer from '../../components/footer/Footer';
import ProfileCard from '../../components/profileCard/ProfileCard';
import LoadingScreen from "../../components/loading/LoadingScreen";

import React, { useRef, Suspense } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { useScroll } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import GlassCrane from '../../../public/Glass-crane';

import danielOlah from '../../assets/daniel-olah-unsplash.jpg';

import { members } from '../../data/members';

const Scene = React.lazy(() => import('../../components/scene/Scene'));

function App() {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  return (
    <main className="main-container">
      {/* <Suspense fallback={null}>
        <Scene />
      </Suspense> */}

      <VideoPlayer
        className="hero-video"
        src={redPaintShooting}
        controls={false}
        autoPlay={true}
        loop={true}
        muted={true}
      />
      <Hero />
      <section className="about-section">
        <span className="title">Que faisons-nous? ✦</span>
        <div className="container">
          <div className="left-side">
            <span className="resume">À la croisée des chemins entre le design et la technologie, nous tissons des œuvres numériques uniques,
            des voyages immersifs où chaque détail émerveille. Notre but: donner (vie) à des aspirations éveillées de (sens).</span>
            <button>Connaître ☀</button>
          </div>
          <div className="right-side">
            <span className="description" style={{ textIndent: '3em' }}> Notre démarche, empreinte de simplicité et d'efficacité,
              place vos aspirations au cœur de chaque création, insufflant à vos idées une clarté (éclatante) et un impact (inoubliable).
            </span>
          </div>
        </div>

      </section>
      

      {/* <section className="us-section">
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
      </section> */}

      {/* <section className="work-section">
        <div className="title">✦ Nos réalisations</div>

      </section> */}

      <Footer />

    </main>
  )
}

export default App

/* eslint-disable @typescript-eslint/no-explicit-any */
import VideoPlayer from "../../components/videoPlayer/VideoPlayer";
import redPaintShooting from "../../assets/mart-production-blk-overlay.mp4";
import Hero from './hero/Hero';
import Footer from '../../components/shared/footer/Footer';
import AboutUs from "./aboutUs/AboutUs";
import Ladder from "../../components/ladder/Ladder";

import React, { useRef, Suspense } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { useScroll } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import GlassCrane from '../../../public/Glass-crane';

import { members } from '../../data/members';


const Scene = React.lazy(() => import('../../components/scene/Scene'));

function App() {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

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
      <AboutUs />
      <Ladder
        title="Qui sommes-nous? ✼"
        items={members}
        titleKey="firstName"
        descriptionKey="title"
        imageUrlKey="avatar"
      />

      <Parallax translateY={[0, 30]} style={{ width: '100%', height: '150%', zIndex: 1 }}>
        <div className="rounded-div-container">
          <Parallax translateY={[30, -35]} style={{ width: '100%', height: '150%' }}>
            <div className="rounded-div">

            </div>
          </Parallax>
        </div>
      </Parallax>

      <Parallax translateY={[-50,50]} style={{width: '100%'}} >
        <Footer />
      </Parallax>

    </main>
  )
}

export default App

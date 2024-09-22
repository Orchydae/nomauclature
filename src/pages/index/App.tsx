/* eslint-disable @typescript-eslint/no-explicit-any */

import Hero from './hero/Hero';
import Footer from '../../components/shared/footer/Footer';
import AboutUs from "./aboutUs/AboutUs";
import Ladder from "../../components/ladder/Ladder";

import { Parallax } from 'react-scroll-parallax';
import { members } from '../../data/members';


function App() {

  return (
    <main className="main-container">
     
      <Hero />
      <AboutUs />
      <Ladder
        title="Qui sommes-nous?"
        icon="✼"
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

      <Parallax translateY={[-50, 50]} style={{ width: '100%' }} >
        <Footer />
      </Parallax>

    </main>
  )
}

export default App

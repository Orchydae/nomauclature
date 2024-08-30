import VideoPlayer from "../../components/videoPlayer/VideoPlayer";
import lavaLamp from "../../assets/lava-lamp.mp4";
import Hero from './hero/Hero';
import Footer from '../../components/footer/Footer';

import {Parallax} from 'react-scroll-parallax';

function App() {

  const Component = ({color}) => (
    <Parallax translateY={[-10, 50]}>
      <div style={{height: '500px', background: color}}>Scrolling down</div>
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
      <Component color='orange'/>
      <Footer/>
      
    </div>
  )
}

export default App

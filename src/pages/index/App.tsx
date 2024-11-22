import styles from './styles/app-style.module.css'

import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Members from './components/Members';
import MeliMelo from '../../components/melimelo/MeliMelo';
import SlidingImages from '../../components/slidingImages/SlidingImages';

function App() {
    return (
        <div className={styles.appContainer}>
            <Hero />
            <AboutUs />
            <Members />
            <MeliMelo />
            <SlidingImages />
        </div>
    );
}

export default App;

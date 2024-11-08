import styles from './styles/app-styling.module.css'
import { useEffect, useRef, useCallback } from 'react';

import Hero from './components/hero/Hero';
import AboutUs from './components/aboutUs/AboutUs';

function App() {
    return (
        <div className={styles.appContainer}>
            <Hero />
            <AboutUs/>
        </div>
    );
}

export default App;

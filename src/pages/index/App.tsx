import styles from './styles/app-style.module.css'
import { useEffect, useRef, useCallback } from 'react';

import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Members from './components/Members';

function App() {
    return (
        <div className={styles.appContainer}>
            <Hero />
            <AboutUs/>
            <Members/>
        </div>
    );
}

export default App;

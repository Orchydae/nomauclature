import {useState, useEffect} from 'react';

import styles from './LoadingScreen.module.css';

function LoadingScreen() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 10000);
    }, []);

    return (
        <div style={{ display: loading ? 'flex' : 'none' }} className={styles.loadingScreen}>
            <div className={styles.spinner}></div>
            <div className="loading-text">Loading...</div>
        </div>
    )
}

export default LoadingScreen;
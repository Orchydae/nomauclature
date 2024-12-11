import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenis } from 'lenis/react';

function ScrollToTop() {
    const location = useLocation();
    const lenis = useLenis();

    useEffect(() => {
        if (lenis) {
            console.log('Scrolling to top', lenis);
            lenis.scrollTo(0, {immediate: true});
        }
    }, [location, lenis]);

    return null; // This component doesn't render anything
}

export default ScrollToTop;
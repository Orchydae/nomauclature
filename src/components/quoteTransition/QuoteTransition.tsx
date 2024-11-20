import styles from './quote-transition.module.css';

import CurvyTransition from "../curvyTransition/CurvyTransition";

function QuoteTransition() {
    return (
        <>
            <div className={styles.quoteContainer}>
                <span className={styles.quote}>
                    Les couleurs que j'aperçois, <br />
                    les perçois-tu aussi?
                </span>

            </div>
            <CurvyTransition />
        </>

    )
}

export default QuoteTransition;
import SunButton from '../../../components/buttons/sunButton/SunButton';
import InvertedTitle from '../../../components/invertedTitle/InvertedTitle';
import './AboutUs.css';

function AboutUs() {

    return (
        <section className="about-section">
            <InvertedTitle
                text='Que faisons-nous?'
                icon='✦'
            />
            <div className="container">
                <div className="left-side">
                    <span className="resume">À la croisée des chemins entre le design et la technologie, nous tissons des œuvres numériques uniques,
                        des voyages immersifs où chaque détail émerveille. Notre but: donner (<span style={{ fontFamily: 'var(--title-font)' }}>vie</span>)
                        à des aspirations éveillées de (<span style={{ fontFamily: 'var(--title-font)' }}>sens</span>).</span>
                    <SunButton text="Connaître" />
                </div>
                <div className="right-side">
                    <span className="description" style={{ textIndent: '3em' }}> Notre démarche, empreinte de simplicité et d'efficacité,
                        place vos aspirations au cœur de chaque création, insufflant à vos idées une clarté (<i><b>éclatante</b></i>) et un impact (<i><b>inoubliable</b></i>).
                    </span>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;
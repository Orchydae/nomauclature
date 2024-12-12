import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import QuoteTransition from "../../components/transitions/quoteTransition/QuoteTransition";
import Menu from "../menu/Menu";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";

function RootLayout() {

    return (
        <div className="root-layout-container">
            <ScrollToTop />
            <Menu />
            <main>
                <Outlet />
            </main>
            <QuoteTransition />
            <section id="contact">
                <Footer />
            </section>


        </div>
    )
}

export default RootLayout;
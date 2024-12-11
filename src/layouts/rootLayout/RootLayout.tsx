import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import QuoteTransition from "../../components/transitions/quoteTransition/QuoteTransition";
import Menu from "../menu/Menu";

function RootLayout() {
   

    return (
        <div className="root-layout-container">
            {/* <Header /> */}
            <Menu/>
            <main>
                <Outlet />
            </main>
            <QuoteTransition />
            <Footer />
            

        </div>
    )
}

export default RootLayout;
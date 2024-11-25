import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import QuoteTransition from "../../components/transitions/quoteTransition/QuoteTransition";
import CurvyTransition from "../../components/transitions/curvyTransition/CurvyTransition";

function RootLayout() {
   

    return (
        <div className="root-layout-container">
            {/* <Header /> */}
            <main>
                <Outlet />
            </main>
            {/* <QuoteTransition /> */}
            <CurvyTransition />
            <Footer />
            

        </div>
    )
}

export default RootLayout;
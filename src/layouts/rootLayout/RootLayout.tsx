import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import QuoteTransition from "../../components/transitions/quoteTransition/QuoteTransition";

function RootLayout() {
   

    return (
        <div className="root-layout-container">
            {/* <Header /> */}
            <main>
                <Outlet />
            </main>
            <QuoteTransition />
            <Footer />
            

        </div>
    )
}

export default RootLayout;
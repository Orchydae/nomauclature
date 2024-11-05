import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../../components/shared/footer/Footer";

function RootLayout() {
    return (
        <div>
            {/* <Header /> */}
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default RootLayout;
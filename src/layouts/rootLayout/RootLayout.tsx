import { Outlet } from "react-router-dom";
import Header from "../header/Header";

function RootLayout() {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout;
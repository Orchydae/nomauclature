/*
    To make sure that a header is present, this Layout component will be used to wrap the Header component.
*/

import Header from "../../../layouts/header/Header";

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
}

export default Layout;
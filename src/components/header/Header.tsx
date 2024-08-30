import "./Header.css";

import { useState } from "react";

import MenuBar from "../menuBar/MenuBar";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <div className="logo">Logo</div>
            <button onClick={toggleMenu}>asdasd+</button>
            {isMenuOpen && <MenuBar />}
        </header>
    );
}

export default Header;
import "./Header.css";
import paperCrane from "../../../assets/paper-crane.png";
import { useState } from "react";
import MenuBar from "../menuBar/MenuBar";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <img className="logo" src={paperCrane} alt="Paper crane logo" />
            <button onClick={toggleMenu}>+</button>
            {isMenuOpen && <MenuBar toggleMenu={toggleMenu} />}
        </header>
    );
}

export default Header;
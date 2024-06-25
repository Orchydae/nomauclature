import "./Header.css";
function Header() {
    return (
        <header>
            <div className="logo">Logo</div>
            <nav>
                <a href="#">Nous</a>
                <a href="#">Portfolio</a>
                <a href="#">Approche</a>
                <a href="#">Contact</a>
            </nav>
        </header>
    );
}

export default Header;
import './MenuBar.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface MenuBarProps {
  toggleMenu: () => void;
}

function MenuBar({ toggleMenu }: MenuBarProps) {
  return (
    <div className="menu-bar">
      <h1>Menu Bar</h1>

      <div className="nav-bar">
        Accueil <br />
        Nous <br />
        Portfolio <br />
        Approche <br />
        Contact <br />
        <button onClick={toggleMenu}> + </button>
      </div>

      <div className="socials">
        <FacebookIcon /> <br />
        <InstagramIcon /> <br />
        <XIcon /> <br />
        <LinkedInIcon /> <br />
      </div>
    </div>
  );
}

export default MenuBar;
import { useState } from 'react';
import './MenuBar.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
function MenuBar() {

  const [menuVisible, setMenuVisible] = useState(true);

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <div>
      {menuVisible && (
        <div className="nav-bar">
          <Stack direction="row" spacing={3}>
            <Link to="/" className="links" onClick={closeMenu}>Accueil</Link> <br />
            <Link to="/nous" className="links" onClick={closeMenu}>Nous</Link> <br />
            <Link to="/portfolio" className="links" onClick={closeMenu}>Portfolio</Link> <br />
            <Link to="/approche" className="links" onClick={closeMenu}>Approche</Link> <br />
            <Link to="/contact" className="links" onClick={closeMenu}>Contact</Link>
          </Stack>

          <div className="socials">
            <FacebookIcon /> <br />
            <InstagramIcon /> <br />
            <XIcon /> <br />
            <LinkedInIcon /><br />
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuBar;

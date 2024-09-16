import './MenuBar.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

function MenuBar() {
  return (
    <div>
      <div>
        <Link to="/" className="links">Accueil</Link> <br />
        {/* Nous <br /> */}
        {/* Portfolio <br />
        Approche <br /> */}
        <Link to="/contact" className="links">Contact</Link>
      </div>

      <div className="socials">
        <FacebookIcon /> <br />
        <InstagramIcon /> <br />
        <XIcon /> <br />
        <LinkedInIcon /><br />
      </div>
      <div>
      </div>
    </div>
  );
}

export default MenuBar;
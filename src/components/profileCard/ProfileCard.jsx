import './ProfileCard.css';

import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const socialIcons = {
    x: XIcon,
    facebook: FacebookIcon,
    linkedin: LinkedInIcon,
    instagram: InstagramIcon,
    github: GitHubIcon
}

function ProfileCard({ src, alt, name, title, width, height, socialMedia = [] }) {
    return (
        <div className="profile card">
            <img src={src} alt={alt} width={width} height={height} />
            <div className="right-side">
                <p className="name">{name}</p>
                <p className="title">{title}</p>
                <div className="social-icons">
                    {socialMedia.map(({platform, url}) => {
                        const IconComponent = socialIcons[platform];
                        return (
                            <a key={platform} href={url} target="_blank" rel="noreferrer noopener">
                                <IconComponent className="icon-component" />
                            </a>
                        );
                    })}
                </div>
            </div>

        </div>
    );
}

export default ProfileCard; 
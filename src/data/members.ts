import david from '../assets/david-avatar-champagne.png'
import paul from '../assets/paul-avatar-heart.png'
import yuka from '../assets/yuka-avatar.png'

export const members = [
    {
        firstName: 'David',
        lastName: 'Nguyen',
        title: 'Artiste à temps perdu',
        color: '#C91212',
        socialMedias: [
            { platform: 'facebook', url: 'https://www.facebook.com/' },
            { platform: 'instagram', url: 'https://www.instagram.com/' },
            { platform: 'linkedin', url: 'https://www.linkedin.com/' },
            { platform: 'github', url: 'https://www.github.com/' }
        ],
        avatar: david
    },
    {
        firstName: 'Paul',
        lastName: 'Nguyen',
        title: 'Étudiant en génie logiciel',
        color: '#3772FF',
        socialMedias: [
            { platform: 'facebook', url: 'https://www.facebook.com/' },
        ],
        avatar: paul
    },
    {
        firstName: 'Yuka',
        lastName: 'Suzuki',
        title: 'Designer graphique',
        color: '#B3AF8F',
        socialMedias: [
            { platform: 'instagram', url: 'https://www.instagram.com/' },
            { platform: 'linkedin', url: 'https://www.linkedin.com/' },
        ],
        avatar: yuka
    }
]
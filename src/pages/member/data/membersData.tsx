import DavidPicture from  '../../../assets/davidPic.png'

export interface Member {
    firstName: string;
    lastName: string;
    pictureSrc: string;
    role: JSX.Element;
    description: JSX.Element;
    experience: JSX.Element;
    contact: JSX.Element;
}

export interface MembersDataType {
    [key: number]: Member;
}

export const membersData: MembersDataType = {
    1: {
        firstName: 'David',
        lastName: 'Nguyen',
        pictureSrc: DavidPicture,
        role:
            <>
                <span>Technologue créatif</span>
                <span>Développeur & Designer</span>
                <span>Full-Stack</span>
            </>,
        description:
            <>
                <p>Salut ! Moi, c’est David &#123; Nguyen &#125;, développeur créatif basé à Montréal, spécialisé dans la conception de sites web et d'applications. Passionné par le design intemporel, épuré et minimaliste, j'ai à cœur de créer des expériences visuelles et interactives harmonieuses.</p>
                <p>Je suis convaincu que clarté et simplicité sont les clés pour bâtir des systèmes cohérents et porteurs de sens, permettant ainsi à chaque audience de recevoir le message souhaité.</p>
                <p>Diplômé en nutrition et actuellement étudiant en génie logiciel, j’aspire à marier santé et technologie dans mes projets pour avoir un impact positif sur mon environnement.</p>
            </>,
        experience:
            <>
                <p>
                    <span>VIF Télé</span>
                    <span>Développeur Web Full-Stack &#123; stage &#125;</span>
                    <span>2024 - </span>
                </p>
                <p>
                    <span>East West Québec</span>
                    <span>Développeur Full-Stack &#123; stage &#125;</span>
                    <span>Automne 2023</span>
                </p>
                <p>
                    <span>NutriSimple</span>
                    <span>Nutritionniste clinicien</span>
                    <span>2020 - </span>
                </p>
            </>,
        contact:
            <>
                <p>
                    <span>Email</span>
                    <span>nguyen.dddavid&#123; at &#125;hotmail.com</span>
                </p>
                <p>
                    <span>Instagram</span>
                    <span>@mumao.art</span>
                </p>
                <p>
                    <span>LinkedIn</span>
                    <span>@DavidNguyen</span>
                </p>
                <p>
                    <span>GitHub</span>
                    <span>@Orchydae</span>
                </p>
            </>
    }
}
export const socialMediaHandler = (platform: string) => {
    switch (platform) {
        case "facebook":
            window.open("https://www.facebook.com/nomauclature", "_blank");
            break;
        case "x":
            window.open("https://www.x.com/nomauclature", "_blank");
            break;
        case "linkedin":
            window.open("https://www.linkedin.com/nomauclature", "_blank");
            break;
        case "instagram":
            window.open("https://www.instagram.com/nomauclature", "_blank");
            break;
        case "github":
            window.open("https://github.com/Orchydae/nomauclature", "_blank");
            break;
    }
}
export const contactClickHandler = (platform: string) => {
    switch (platform) {
        case "email":
            window.open("mailto:info@nomauclature.com", "_blank");
            break;
        case "phone":    
            window.open("tel:+15141234567", "_blank");
            break;
    }
}
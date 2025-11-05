import "./presentationSection.scss";
import Button from "../Button/Button";
import MediaLink from "../MediaLink/MediaLink";


const PresentationSection = () =>{
    const iconData = [
        {
            icon: "fa-brands fa-github",
            link: "https://github.com/Chloe-cstr"
        },
        {
            icon: "fa-brands fa-linkedin-in",
            link: "https://github.com/Chloe-cstr"
        },
        {
            icon: "fa-brands fa-instagram",
            link: "https://github.com/Chloe-cstr"
        }
    ]

    return(
        <div className="presentation" id="presentation">
            <h1 className="presentation__title">
                <span className="presentation__title__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                    </svg>
                </span>
                Intégrateur Web Frontend
            </h1>
            <h2 className="presentation__subtitle">
                Créateur d'expériences
                <span className="presentation__subtitle--color">
                    web exceptionnelles
                </span>
            </h2>
            <p className="presentation__text">
                Je transforme vos visions créatives en interfaces web élégantes 
                et performantes. Spécialisé dans l'intégration pixel-perfect avec 
                une attention méticuleuse aux détails.
            </p>
            <div className="presentation__cta">
                <Button 
                    text="Découvrir mes réalisation"
                    className="button"
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                        </svg>
                    }
                    link="#realisations"
                />
                <Button 
                    text="Discutons de votre projet"
                    className="buttonSecond"
                    link="#contact"
                />
            </div>
            <div className="presentation__mediaLink">
                {iconData.map((media, index) => (
                    <MediaLink
                        key={index}
                        className={media.icon}
                        link={media.link}
                    />
                    ))}
            </div>
        </div>
    )
};

export default PresentationSection;
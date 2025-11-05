import "./competenceSection.scss";
import Card from "../Card/Card";

const CompetenceSection = () =>{
    const cardData = [
        {
            iconClass: "fa-solid fa-code",
            title: "HTML5 & CSS3",
            description: "Maîtrise approfondie du HTML sémantique et des dernières fonctionnalités CSS.",
            levelLabel: "Niveau de maîtrise",
            percentage: 95,
        },
        {
            iconClass: "fa-solid fa-bolt",
            title: "JavaScript & React",
            description: "Développement d'interfaces interactives avec les technologies modernes.",
            levelLabel: "Niveau de maîtrise",
            percentage: 90,
        },
        {
            iconClass: "fa-solid fa-palette",
            title: "Design System",
            description: "Création et implémentation de systèmes de design cohérents.",
            levelLabel: "Niveau de maîtrise",
            percentage: 92,
        },
        {
            iconClass: "fa-solid fa-mobile-button",
            title: "Responsive Design",
            description: "Expériences adaptatives exceptionnelles sur tous les appareils.",
            levelLabel: "Niveau de maîtrise",
            percentage: 95
        },
        {
            iconClass: "fa-solid fa-layer-group",
            title: "Figma To Code",
            description: "Conversion pixel-perfect des maquettes en code optimisé.",
            levelLabel: "Niveau de maîtrise",
            percentage: 98,
        },
        {
            iconClass: "fa-solid fa-code-branch",
            title: "Git &DevOps",
            description: "Création et implémentation de systèmes de design cohérents.",
            levelLabel: "Niveau de maîtrise",
            percentage: 85,
        },
    ];
    return(
        <div className="competence">
            <div className="competence__titleContent">
                <h2 className="competence__titleContent__title">
                    Mes compétences
                </h2>
                <p className="competence__titleContent__text">Un savoir-faire d'excellence</p>
                <p className="competence__titleContent--center">
                    Une palette de compétences techniques 
                    complète pour donner vie à vos projets <br />les 
                    plus ambitieux.
                </p>
            </div>
            <div className="competence__cards">
                {cardData.map((item, index) => (
                    <Card key={index} {...item} />
                ))}
            </div>
        </div>
    )
};

export default CompetenceSection;
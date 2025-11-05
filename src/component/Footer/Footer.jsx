import "./footer.scss";
import logo from "../../assets/images/logo.png";
import MediaLink from "../MediaLink/MediaLink";

const Footer = ()=>{
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

    const navItems = [
        { label: "Présentation", href: "#presentation" },
        { label: "Compétences", href: "#competences" },
        { label: "Mes réalisations", href: "#realisations" },
        { label: "Contact", href: "#contact" },
    ];

    return(
        <footer className="footer">
            <div className="footer__content">
                <img 
                    src={logo} 
                    alt="logo de Chloe casteran, intégrateur web" 
                    className="footer__content__img"
                />
                <p className="footer__content__text">
                    Transformons ensemble vos visions créatives en expériences web 
                    exceptionnelles. Chaque pixel compte, chaque interaction inspire.
                </p>
                <div className="footer__content__media">
                    {iconData.map((media, index) => (
                        <MediaLink
                            key={index}
                            className={media.icon}
                            link={media.link}
                        />
                        ))}
                </div>
            </div>
            <div className="footer__nav">
                <h2>Navigation</h2>
                <ul className="footer__nav__list">
                    {navItems.map((item) => (
                        <li className="footer__nav__item" key={item.href}>
                            <a
                            href={item.href}
                            >
                            {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="footer__contact">
                <h2>Contact</h2>
                <ul className="footer__contact__list">
                    <li className="footer__contact__list__item">
                        chloe.casteran@gmail.com
                    </li>
                    <li className="footer__contact__list__item">
                        06.14.63.84.50
                    </li>
                    <li className= "footer__contact__list--border">
                        <i className="fa-solid fa-circle footer__contact__list--border__icon"></i>
                        Disponible
                    </li>
                </ul>
            </div>
        </footer>
    )
};

export default Footer;
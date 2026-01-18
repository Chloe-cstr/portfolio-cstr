import "./footer.scss";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                {/* Top Section */}
                <div className="footer__top">
                    {/* Left Column - Branding */}
                    <div className="footer__branding">
                        <h3 className="footer__logo">
                            <span className="footer__logo--accent">Chloë</span> Dev
                        </h3>
                        <p className="footer__description">
                            Intégratrice web passionnée, je crée des interfaces modernes,
                            accessibles et performantes qui donnent vie à vos projets digitaux.
                        </p>
                        <ul className="footer__socials">
                            <li>
                                <a href="https://github.com/Chloe-cstr" aria-label="GitHub">
                                    <Github />
                                </a>
                            </li>
                            <li>
                                <a href="www.linkedin.com/in/chloecasteran" aria-label="LinkedIn">
                                    <Linkedin />
                                </a>
                            </li>
                            <li>
                                <a href="mailto:chloe.casteran@gmail.com" aria-label="Email">
                                    <Mail />
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Middle Column - Navigation */}
                    <div className="footer__nav">
                        <h4 className="footer__title">Navigation</h4>
                        <ul className="footer__links">
                            <li>
                                <a href="#accueil">Accueil</a>
                            </li>
                            <li>
                                <a href="#about">À propos</a>
                            </li>
                            <li>
                                <a href="#projects">Projets</a>
                            </li>
                            <li>
                                <a href="#competences">Compétences</a>
                            </li>
                        </ul>
                    </div>

                    {/* Right Column - Resources */}
                    <div className="footer__resources">
                        <h4 className="footer__title">Ressources</h4>
                        <ul className="footer__links">
                            <li>
                                <a href="#accueil">Portfolio</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Separator */}
                <div className="footer__separator" />

                {/* Bottom Section */}
                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © 2026 Chloë Casteran. Tous droits réservés.
                    </p>
                    <p className="footer__credit">
                        Conçu avec <span className="footer__heart">❤️</span> et beaucoup de café
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

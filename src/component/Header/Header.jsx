import './header.scss'
import { useState, useEffect } from "react";
import Button from "../Button/Button";

const Header = () => {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
            }
            });
        },
        {
            threshold: 0.6, // quand 60% de la section est visible
        }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const navItems = [
        { label: "Accueil", href: "#accueil" },
        { label: "A propos", href: "#about" },
        { label: "Projets", href: "#projects" },
        { label: "Compétences", href: "#competences" },
        { label: "Contact", href: "#contact" },
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => { 
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (isMenuOpen) {
          document.body.style.overflow = "hidden"; // empêche de scroller
        } else {
          document.body.style.overflow = ""; // remet normal
        }
    
        // Nettoyage au démontage (bonne pratique)
        return () => {
          document.body.style.overflow = "";
        };
      }, [isMenuOpen]);    

    return (
        <header className="header">
            <h1> <span className='header__span'>Chloë</span> Dev</h1>
            <nav className={`header__nav ${isMenuOpen ? "open" : ""}`}>
                <div className="header__nav__top">
                    <h1 className="header__nav__logo">
                        <span className='header__nav__logo__span'>Chloë</span> Dev
                    </h1>
                    <button 
                        className="header__nav__close" 
                        onClick={toggleMenu}
                        aria-label="Fermer le menu"
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <ul className="header__nav__list">
                    {navItems.map((item) => (
                        <li className="header__nav__item" key={item.href}>
                            <a
                            href={item.href}
                            className={`header__nav__item__maj ${
                                activeSection === item.href.slice(1) ? "active" : ""
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                            >
                            {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="header__nav__actions">
                    <Button 
                        text="Me contacter" 
                        className="btn--primary" 
                        href="#contact"
                        onClick={() => setIsMenuOpen(false)}
                    />
                    <Button 
                        text="Voir mes projets" 
                        className="btn--primary" 
                        href="#projets"
                        onClick={() => setIsMenuOpen(false)}
                    />
                    <Button 
                        text="Voir mon GitHub" 
                        className="btn--secondary" 
                        href="https://github.com/Chloe-cstr"
                        onClick={() => setIsMenuOpen(false)}
                    />
                </div>
            </nav>
            {!isMenuOpen && (
                <div className='header__menu'>
                    <i className="fa-solid fa-bars header__menu__icon" onClick={toggleMenu}></i>
                </div>
            )}
        </header>
    );
};

export default Header;
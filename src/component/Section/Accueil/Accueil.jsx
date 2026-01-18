import "./accueil.scss";
import { Github, Linkedin, Mail } from "lucide-react";
import Button from "../../Button/Button";

const Accueil = () =>{
    return(
        <section className="hero" id="accueil">
            <div className="hero__container">
                <span className="hero__badge">
                    <span className="dot"></span>
                    Disponible pour de nouveaux projets
                </span>

                <div className="hero__content">
                    <h2 className="hero__title">Chloë Casteran</h2>

                    <h3 className="hero__subtitle">Intégratrice Web</h3>

                    <p className="hero__description">
                        Je transforme vos designs en expériences web fluides, accessibles et
                        performantes. Spécialisée en React, SASS et JavaScript moderne.
                    </p>
                </div>


                <div className="hero__actions">
                    <Button 
                        text="Voir mes projets" 
                        className="btn--primary" 
                        href="#projects"
                    />
                    <Button 
                        text="Me contacter" 
                        className="btn--secondary" 
                        href="#contact"
                    />
                </div>

                <ul className="hero__socials">
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
                        <a href="mailto:contact@email.com" aria-label="Email">
                            <Mail />
                        </a>
                    </li>
                </ul>

                <div className="hero__discover">
                    <p className="hero__discover__text">Découvrir</p>
                    <span className="hero__discover__icon">↓</span>
                </div>
            </div>
        </section>
    )
};

export default Accueil;
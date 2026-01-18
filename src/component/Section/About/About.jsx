import "./about.scss";
import photoProfil from "../../../assets/images/photo-profil.jpeg";
import { Code, Palette, Zap, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const About = () =>{
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return(
        <section id="about" className="about" aria-labelledby="about-title" ref={sectionRef}>
            <div className="about__container">

                <div className={`about__content ${isVisible ? 'animate' : ''}`}>
                    <p className="about__eyebrow">À PROPOS DE MOI</p>

                    <h2 id="about-title" className="about__title">
                        Créer des interfaces qui <span className="about__title-accent">font la différence</span>
                    </h2>

                    <div className="about__text">
                        <p>
                        Passionnée par le développement front-end depuis 5 ans, je mets mon expertise au service
                        de projets web ambitieux. Mon approche allie rigueur technique, créativité et sens du détail.
                        </p>

                        <p>
                        Spécialisée dans l'écosystème React et les technologies modernes (TypeScript, Next.js,
                        Tailwind CSS), je transforme vos maquettes en interfaces performantes et accessibles, tout en
                        respectant les meilleures pratiques du web.
                        </p>

                        <p>
                        Mon objectif : livrer des expériences utilisateur fluides qui valorisent votre marque et
                        convertissent vos visiteurs.
                        </p>
                    </div>

                    <a href="#contact" className="btn btn--primary">
                        Discutons de votre projet
                    </a>
                </div>


                <div className="about__aside">

                <div className={`about__avatar ${isVisible ? 'animate' : ''}`} aria-hidden="true">
                    <img src={photoProfil} alt="" className="about__avatar__img"/>

                    <span className="about__bubble about__bubble--top" aria-hidden="true"></span>
                    <span className="about__bubble about__bubble--left" aria-hidden="true"></span>
                </div>


                    <div className={`about__cards ${isVisible ? 'animate' : ''}`} role="list">
                        <article className="about-card" role="listitem">
                            <div className="about-card__icon" aria-hidden="true">

                                <Code />
                            </div>
                            <h3 className="about-card__title">Code de qualité</h3>
                            <p className="about-card__text">
                                Standards du web, sémantique HTML et architecture scalable
                            </p>
                        </article>

                        <article className="about-card" role="listitem">
                            <div className="about-card__icon" aria-hidden="true">

                                <Palette />
                            </div>
                            <h3 className="about-card__title">Pixel perfect</h3>
                            <p className="about-card__text">
                                Respect scrupuleux des maquettes et attention au détail
                            </p>
                        </article>

                        <article className="about-card" role="listitem">
                            <div className="about-card__icon" aria-hidden="true">

                                <Zap />
                            </div>
                            <h3 className="about-card__title">Performance</h3>
                            <p className="about-card__text">
                                Optimisation des temps de chargement et expérience fluide
                            </p>
                        </article>

                        <article className="about-card" role="listitem">
                            <div className="about-card__icon" aria-hidden="true">
        
                                <Users />
                            </div>
                            <h3 className="about-card__title">Accessibilité</h3>
                            <p className="about-card__text">
                                Interfaces inclusives et conformes aux bonnes pratiques
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default About;
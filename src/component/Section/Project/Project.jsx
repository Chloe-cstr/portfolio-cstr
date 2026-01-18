import "./project.scss";
import photoAnalytic from "../../../assets/images/photo-une.png";
import photoLogin from "../../../assets/images/photo-deux.png";
import photoMonaya from "../../../assets/images/photo-trois.png";
import ProjectCard from "../../ProjectCard/ProjectCard";

const Project = () =>{
    return(
        <section id="projects" className="projects" aria-labelledby="projects-title">
            <div className="projects__container">
                {/* Header */}
                <div className="projects__header">
                    <p className="projects__eyebrow">PORTFOLIO</p>
                    <h2 id="projects-title" className="projects__title">Projets réalisés</h2>
                    <p className="projects__subtitle">
                        Une sélection de mes réalisations les plus représentatives, alliant design
                        moderne et performances techniques.
                    </p>
                </div>

                <div className="projects__list">
                    <ProjectCard
                        image={photoAnalytic}
                        imageAlt="Aperçu du projet Dashboard Analytics"
                        title="Application de location immobilière"
                        description="Application web de location immobilière développée avec React. Architecture SPA, routes dynamiques et composants réutilisables pour une navigation fluide et moderne."
                        meta="Intégration front-end complète"
                        tags={['React', 'React Router', 'SPA', 'Composants réutilisables']}
                        projectLink="#"
                        codeLink="https://github.com/Chloe-cstr/kasa"
                        imagePosition="left"
                    />

                    <ProjectCard
                        image={photoLogin}
                        imageAlt="Aperçu du projet Dashboard Analytics"
                        title="Portfolio – Sophie Bluel"
                        description="Site portfolio intégrant une interface d’administration sécurisée. Après authentification, l’utilisateur peut ajouter, modifier ou supprimer des projets via une modale interactive. Les données sont gérées par des appels à une API, avec un affichage dynamique selon l’état de connexion."
                        meta="Intégration front-end complète"
                        tags={['JavaScript', 'API REST', 'Authentification Token', 'Modale interactive', 'Gestion dynamique des données']}
                        projectLink="#"
                        codeLink="https://github.com/Chloe-cstr/Sophie-bluel"
                        imagePosition="right"
                    />

                    <ProjectCard
                        image={photoMonaya}
                        imageAlt="Aperçu du projet Dashboard Analytics"
                        title="Monaya Thérapie – Site vitrine professionnel"
                        description="Site vitrine pour une thérapeute holistique et naturopathe, présentant l’approche, les prestations, les accompagnements et les informations de contact. Le site met l’accent sur l’accessibilité des contenus, la clarté de la navigation et l’expérience utilisateur pour faciliter la prise de rendez-vous et les échanges avec les visiteurs."
                        meta="Intégration front-end complète"
                        tags={['React', 'UX orientée conversion', 'Responsive design', 'Accessibilité', 'SEO']}
                        projectLink="https://www.monaya-therapie.fr/"
                        codeLink="https://github.com/Chloe-cstr/monaya-therapie"
                        imagePosition="left"
                    />
                </div>
            </div>
            </section>
    )
}

export default Project;
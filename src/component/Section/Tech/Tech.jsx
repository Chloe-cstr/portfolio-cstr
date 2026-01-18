import "./tech.scss";

const Tech = () =>{
    return(
        <section className="tech-tools" aria-labelledby="tech-tools-title">
            <h2 className="tech-tools-title">
                Technologies & Outils
            </h2>

            {/* Chips */}
            <ul className="tech-chips" aria-label="Liste des technologies et outils">
                {[
                "React",
                "TypeScript",
                "Next.js",
                "Tailwind CSS",
                "SASS",
                "JavaScript",
                "HTML5",
                "CSS3",
                "Git",
                "Figma",
                "Webpack",
                "Vite",
                "Redux",
                "Motion",
                "Jest",
                "Cypress",
                ].map((item) => (
                <li key={item} className="tech-chip">
                    {item}
                </li>
                ))}
            </ul>

            {/* Stats */}
            <div className="tech-stats" aria-label="Statistiques clés">
                <div className="stat-card">
                <p className="stat-value">5+</p>
                <p className="stat-label">Années d&apos;expérience</p>
                </div>

                <div className="stat-card">
                <p className="stat-value">50+</p>
                <p className="stat-label">Projets livrés</p>
                </div>

                <div className="stat-card">
                <p className="stat-value">100%</p>
                <p className="stat-label">Satisfaction client</p>
                </div>

                <div className="stat-card">
                <p className="stat-value">24/7</p>
                <p className="stat-label">Disponibilité</p>
                </div>
            </div>
        </section>
    )
};

export default Tech;
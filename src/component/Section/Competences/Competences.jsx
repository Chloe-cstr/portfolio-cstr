import "./competences.scss";
import { useEffect, useRef, useState } from "react";

const Competences = () =>{
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
        <section ref={sectionRef} id="competences" className={`expertise ${isVisible ? 'expertise--visible' : ''}`}>
            <div className="expertise__header">
                <span className="expertise-label">EXPERTISE</span>
                <h2 className="expertise-title">Compétences techniques</h2>
                <p className="expertise-subtitle">
                Une stack moderne et complète pour répondre à tous vos besoins
                d&apos;intégration web.
                </p>
            </div>

            <div className="expertise-grid">
                {/* Colonne 1 */}
                <div className="expertise-card">
                <h3 className="expertise-card-title">Langages & Frameworks</h3>

                <div className="skill">
                    <div className="skill-header">
                    <span>HTML5 / CSS3</span>
                    <span>95%</span>
                    </div>
                    <div className="skill-bar">
                    <div className="skill-progress" style={{ width: "95%" }} />
                    </div>
                </div>

                <div className="skill">
                    <div className="skill-header">
                    <span>JavaScript (ES6+)</span>
                    <span>90%</span>
                    </div>
                    <div className="skill-bar">
                    <div className="skill-progress" style={{ width: "90%" }} />
                    </div>
                </div>

                <div className="skill">
                    <div className="skill-header">
                    <span>TypeScript</span>
                    <span>85%</span>
                    </div>
                    <div className="skill-bar">
                    <div className="skill-progress" style={{ width: "85%" }} />
                    </div>
                </div>

                <div className="skill">
                    <div className="skill-header">
                    <span>React / Next.js</span>
                    <span>90%</span>
                    </div>
                    <div className="skill-bar">
                    <div className="skill-progress" style={{ width: "90%" }} />
                    </div>
                </div>

                <div className="skill">
                    <div className="skill-header">
                    <span>SASS / SCSS</span>
                    <span>90%</span>
                    </div>
                    <div className="skill-bar">
                    <div className="skill-progress" style={{ width: "90%" }} />
                    </div>
                </div>
                </div>

                {/* Colonne 2 */}
                <div className="expertise-card">
                <h3 className="expertise-card-title">Outils & Technologies</h3>

                <div className="skill">
                    <div className="skill-header">
                    <span>Tailwind CSS</span>
                    <span>95%</span>
                    </div>
                    <div className="skill-bar">
                    <div className="skill-progress" style={{ width: "95%" }} />
                    </div>
                </div>

                <div className="skill">
                    <div className="skill-header">
                    <span>Git / GitHub</span>
                    <span>85%</span>
                    </div>
                    <div className="skill-bar">
                    <div className="skill-progress" style={{ width: "85%" }} />
                    </div>
                </div>

                <div className="skill">
                    <div className="skill-header">
                    <span>Webpack / Vite</span>
                    <span>80%</span>
                    </div>
                    <div className="skill-bar">
                    <div className="skill-progress" style={{ width: "80%" }} />
                    </div>
                </div>

                <div className="skill">
                    <div className="skill-header">
                    <span>Figma / Adobe XD</span>
                    <span>85%</span>
                    </div>
                    <div className="skill-bar">
                    <div className="skill-progress" style={{ width: "85%" }} />
                    </div>
                </div>

                <div className="skill">
                    <div className="skill-header">
                    <span>REST API</span>
                    <span>80%</span>
                    </div>
                    <div className="skill-bar">
                    <div className="skill-progress" style={{ width: "80%" }} />
                    </div>
                </div>
                </div>

                {/* Colonne 3 */}
                <div className="expertise-card">
                <h3 className="expertise-card-title">Méthodologies</h3>

                <div className="skill">
                    <div className="skill-header">
                    <span>Responsive Design</span>
                    <span>95%</span>
                    </div>
                    <div className="skill-bar">
                    <div className="skill-progress" style={{ width: "95%" }} />
                    </div>
                </div>

                <div className="skill">
                    <div className="skill-header">
                    <span>Accessibilité (WCAG)</span>
                    <span>90%</span>
                    </div>
                    <div className="skill-bar">
                    <div className="skill-progress" style={{ width: "90%" }} />
                    </div>
                </div>

                <div className="skill">
                    <div className="skill-header">
                    <span>Performance Web</span>
                    <span>85%</span>
                    </div>
                    <div className="skill-bar">
                    <div className="skill-progress" style={{ width: "85%" }} />
                    </div>
                </div>

                <div className="skill">
                    <div className="skill-header">
                    <span>SEO Technique</span>
                    <span>80%</span>
                    </div>
                    <div className="skill-bar">
                    <div className="skill-progress" style={{ width: "80%" }} />
                    </div>
                </div>

                <div className="skill">
                    <div className="skill-header">
                    <span>BEM / Atomic Design</span>
                    <span>90%</span>
                    </div>
                    <div className="skill-bar">
                    <div className="skill-progress" style={{ width: "90%" }} />
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
};

export default Competences;
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import './projectCard.scss';
import Button from '../Button/Button';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({
    image,
    imageAlt,
    title,
    description,
    meta,
    tags = [],
    projectLink,
    codeLink,
    imagePosition = 'left',
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

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

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    return (
        <article 
            ref={cardRef}
            className={`project-card project-card--${imagePosition} ${isVisible ? 'project-card--visible' : ''}`}
        >
            <div className="project-card__media">
                <div className="project-card__image-wrapper">
                    <img
                        className="project-card__img"
                        src={image}
                        alt={imageAlt}
                        loading="lazy"
                    />
                    <div className="project-card__overlay">
                        <div className="project-card__icons">
                            {projectLink && (
                                <a
                                    href={projectLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-card__icon-link"
                                    aria-label="Voir le projet"
                                >
                                    <ExternalLink size={24} />
                                </a>
                            )}
                            {codeLink && (
                                <a
                                    href={codeLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-card__icon-link"
                                    aria-label="Voir le code"
                                >
                                    <Github size={24} />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="project-card__content">
                <h3 className="project-card__title">{title}</h3>

                <p className="project-card__description">{description}</p>

                {meta && <p className="project-card__meta">{meta}</p>}

                {tags.length > 0 && (
                    <ul className="project-card__tags" aria-label="Technologies utilisées">
                        {tags.map((tag, index) => (
                            <li key={index} className="tag">
                                {tag}
                            </li>
                        ))}
                    </ul>
                )}

                <div className="project-card__actions">
                    {projectLink && (
                        <Button
                            text="Voir le projet"
                            className="btn--primary"
                            href={projectLink}
                            target="_blank"
                            rel="noreferrer"
                            icon={<ExternalLink size={18} />}
                            iconPosition="right"
                        />
                    )}

                    {codeLink && (
                        <Button
                            text="Code"
                            className="btn--dark"
                            href={codeLink}
                            target="_blank"
                            rel="noreferrer"
                            icon={<Github size={18} />}
                            iconPosition="left"
                        />
                    )}
                </div>
            </div>
        </article>
    );
};

ProjectCard.propTypes = {
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    meta: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    projectLink: PropTypes.string,
    codeLink: PropTypes.string,
    imagePosition: PropTypes.oneOf(['left', 'right']),
};

export default ProjectCard;

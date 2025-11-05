import "./card.scss";
import { useEffect, useRef, useState } from "react";


const Card = ({
	iconClass = "fa-solid fa-code",
	title = "HTML5 & CSS3",
	description = "Maîtrise approfondie du HTML sémantique et des dernières fonctionnalités CSS.",
	levelLabel = "Niveau de maîtrise",
	percentage = 95,
}) => {
	const [progress, setProgress] = useState(0);
	const hasAnimatedRef = useRef(false);
	const cardRef = useRef(null);

	useEffect(() => {
		const element = cardRef.current;
		if (!element) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !hasAnimatedRef.current) {
						hasAnimatedRef.current = true;
						// déclenche l'animation vers le pourcentage fourni
						requestAnimationFrame(() => setProgress(percentage));
					}
				});
			},
			{ threshold: 0.3 }
		);

		observer.observe(element);
		return () => observer.disconnect();
	}, [percentage]);

	return(
		<div className="card" ref={cardRef}>
			<i className={`${iconClass} card__icon`}></i>
			<h3 className="card__title">{title}</h3>
			<p className="card__text">
				{description}
			</p>
			<div className="card__level">
				<div className="card__level__content">
					<p className="card__level__content__text">{levelLabel}</p>
					<p className="card__level__content__text">{percentage}%</p>
				</div>
				<div className="card__level__bar">
					<div 
						className="card__level__bar__fill"
						style={{ width: `${progress}%` }} 
					>
					</div>
				</div>
			</div>
		</div>
	)
};

export default Card;
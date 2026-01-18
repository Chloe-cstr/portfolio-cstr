import "./contact.scss";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import Button from "../../Button/Button";

const Contact = () =>{
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        const data = new FormData(form);
        const response = await fetch("https://formspree.io/f/xeogalvp", {
            method: "POST",
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            form.reset();
            setStatus("Votre message a bien été envoyé !");
        } else {
            setStatus("Une erreur est survenue. Veuillez réessayer.");
        }
    };

    return(
        <section className="contact" id="contact">
            <div className="contact-header">
                <span className="contact-label">RESTONS EN CONTACT</span>
                <h2 className="contact-title">Discutons de votre projet</h2>
                <p className="contact-subtitle">
                Vous avez un projet en tête ? N&apos;hésitez pas à me contacter.
                Je serai ravie d&apos;échanger avec vous.
                </p>
            </div>

            <div className="contact-grid">
                {/* Formulaire */}
                <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nom complet</label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Jean Dupont"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="jean.dupont@example.com"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="subject">Sujet</label>
                    <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Demande de collaboration"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                    id="message"
                    name="message"
                    placeholder="Parlez-moi de votre projet..."
                    rows={6}
                    />
                </div>

                <Button 
                    text="Envoyer le message" 
                    className="btn--primary" 
                    icon={<Send />}
                    iconPosition="right"
                    type="submit"
                />
                {status && <p className="form__status">{status}</p>}
                </form>

                {/* Infos contact */}
                <div className="contact-info">
                <div className="contact-card">
                    <div className="contact-icon">
                        <Mail />
                    </div>
                    <div>
                    <p className="contact-card-label">Email</p>
                    <p className="contact-card-value">chloe.casteran@gmail.com</p>
                    </div>
                </div>

                <div className="contact-card">
                    <div className="contact-icon">
                        <Phone />
                    </div>
                    <div>
                    <p className="contact-card-label">Téléphone</p>
                    <p className="contact-card-value">+33 6 14 63 84 50</p>
                    </div>
                </div>

                <div className="contact-card">
                    <div className="contact-icon">
                        <MapPin />
                    </div>
                    <div>
                    <p className="contact-card-label">Localisation</p>
                    <p className="contact-card-value">Toulouse, France</p>
                    </div>
                </div>

                {/* Disponibilité */}
                <div className="contact-availability">
                    <span className="availability-dot" />
                    <div>
                    <p className="availability-title">
                        Disponible pour de nouveaux projets
                    </p>
                    <p className="availability-text">
                        Je suis actuellement disponible pour des missions en freelance
                        ou des opportunités CDI. N&apos;hésitez pas à me contacter pour
                        discuter de votre projet.
                    </p>
                    </div>
                </div>

                {/* Temps de réponse */}
                <p className="contact-response-time">
                    <span className="response-time-icon">⚡</span>
                    <strong>Temps de réponse moyen : 24 heures</strong>
                </p>
                </div>
            </div>
        </section>
    )
};

export default Contact;
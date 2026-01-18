import PropTypes from 'prop-types';
import './button.scss';

const Button = ({ text, className = '', icon, iconPosition = 'left', href, onClick, type = 'button', ...props }) => {
    const baseClass = 'btn';
    const classes = className ? `${baseClass} ${className}` : baseClass;

    const content = iconPosition === 'right' ? (
        <>
            <span className="btn__text">{text}</span>
            {icon && <span className="btn__icon">{icon}</span>}
        </>
    ) : (
        <>
            {icon && <span className="btn__icon">{icon}</span>}
            <span className="btn__text">{text}</span>
        </>
    );

    if (href) {
        return (
            <a href={href} className={classes} {...props}>
                {content}
            </a>
        );
    }

    return (
        <button type={type} className={classes} onClick={onClick} {...props}>
            {content}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    icon: PropTypes.node,
    iconPosition: PropTypes.oneOf(['left', 'right']),
    href: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;


import PropTypes from 'prop-types';
import './button.scss'

const Button = ({text, className, icon, link}) =>{
    return(
        <div className={className}>
            <a href={link} className={`${className}__link`}>
                {icon && <span className={`${className}__link__icon`}>{icon}</span>}
                {text}
            </a>
        </div>
    )
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    className : PropTypes.string.isRequired,
    icon: PropTypes.node,
    link : PropTypes.string.isRequired,
};

export default Button;
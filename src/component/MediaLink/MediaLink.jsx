import "./mediaLink.scss";
import PropTypes from 'prop-types';

const MediaLink = ({className,link}) =>{
    return(
        <div className="media">
            <a href={link} className="media__link">
                <i className={`${className} media__link__icon`}></i>
            </a>
        </div>
    )
};

MediaLink.PropTypes = {
    className : PropTypes.string.isRequired,
    link : PropTypes.string.isRequired,
}

export default MediaLink;
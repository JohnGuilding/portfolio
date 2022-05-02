import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faLaptopCode, faCloud } from '@fortawesome/free-solid-svg-icons';

import './../styles/Card.scss';

const Card = ({ name, description, appLink, frontEndCodeLink, backEndCodeLink }) => {
    return (
        <div className="card">
            <h3>{name}</h3>
            <p>{description}</p>
            <div className='card__links'>
                <a 
                    href={appLink}
                    target='_blank'
                    rel='noreferrer'
                    className='card__icon'
                >
                    <FontAwesomeIcon icon={faRocket} />
                    <span className='card__icon-text'>Launch app</span>
                </a>
                <a 
                    href={frontEndCodeLink}
                    target='_blank'
                    rel='noreferrer'
                    className='card__icon'
                >
                    <FontAwesomeIcon icon={faLaptopCode} />
                    <span className='card__icon-text'>front end code</span>
                </a>
                <a 
                    href={backEndCodeLink}
                    target='_blank'
                    rel='noreferrer'
                    className='card__icon'
                >
                    <FontAwesomeIcon icon={faCloud} />
                    <span className='card__icon-text'>back end code</span>
                </a>
            </div>
        </div>
    );
}

export default Card;
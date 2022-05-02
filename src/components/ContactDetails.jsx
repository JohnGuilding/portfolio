import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitterSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import './../styles/ContactDetails.scss';

const ContactDetails = () => {
    return (
        <footer className='contact-details'>
            <a 
                href='https://github.com/johnguilding'
                target='_blank'
                rel='noreferrer'
                className='contact-details__icon'
            >
                <FontAwesomeIcon icon={faGithubSquare} />
            </a>
            <a 
                href='https://twitter.com/solleio'
                target='_blank'
                rel='noreferrer'
                className='contact-details__icon'
            >
            <FontAwesomeIcon icon={faTwitterSquare} />
            </a>
            <a 
                href='http://linkedin.com/in/johnguilding'
                target='_blank'
                rel='noreferrer'
                className='contact-details__icon'
            >
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
        </footer>
    );
}

export default ContactDetails;
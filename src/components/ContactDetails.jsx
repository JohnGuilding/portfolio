import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitterSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import './../styles/ContactDetails.scss';

const ContactDetails = () => {
    return (
        <footer className='contact-details'>
            <a href=''>
                <span>GitHub</span>
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href=''>
                <span>Twitter</span>
            <FontAwesomeIcon icon={faTwitterSquare} />
            </a>
            <a href=''>
                <span>LinkedIn</span>
                <FontAwesomeIcon icon={faGithubSquare} />
            </a>
        </footer>
    );
}

export default ContactDetails;
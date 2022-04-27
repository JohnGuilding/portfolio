import './../styles/Card.scss'

const Card = ({ name, description, link}) => {
    return (
        <div className="card">
            <h3>{name}</h3>
            <p>{description}</p>
            <a href={link}>Vist here</a>
        </div>
    );
}

export default Card;
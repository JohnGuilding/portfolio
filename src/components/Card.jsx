const Card = ({ name, description, link}) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>{description}</p>
            <a href={link}>Vist here</a>
        </div>
    );
}

export default Card;
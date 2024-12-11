import './Card.css';

const Card = ({ card, flipped, matched, onClick }) => {
    return (
        <div
            className={`card ${flipped || matched ? 'flipped' : ''}`}
            onClick={onClick}
        >
            {flipped || matched ? card : '❓'}
        </div>
    );
};

export default Card;

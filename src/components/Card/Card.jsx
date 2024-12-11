import './Card.css';

const Card = ({ card, flipped, matched, onClick }) => {
    return (
        <div className={`card ${flipped || matched ? 'flipped' : ''} ${matched ? 'matched' : ''}`} onClick={onClick}>
            {flipped || matched ? card : '❓'}
        </div>
    );
};


export default Card;

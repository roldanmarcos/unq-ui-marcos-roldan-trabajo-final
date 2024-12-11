import './Card.css';
import questionIcon from '../../assets/question.svg';

const Card = ({ card, flipped, matched, onClick }) => {
    return (
        <div className={`card ${flipped || matched ? 'flipped' : ''} ${matched ? 'matched' : ''}`} onClick={onClick}>
            {flipped || matched ? (
                card
            ) : (
                <img src={questionIcon} alt="Question Icon" />
            )}
        </div>
    );
};

export default Card;
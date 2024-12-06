import './Card.css'

function Card({ card, onClick, isFlipped }) {
    return (
      <div
        className={`card ${isFlipped ? 'flipped' : ''}`}
        onClick={() => onClick(card)}
      >
        {isFlipped ? <span>{card.value}</span> : <span>❓</span>}
      </div>
    );
  };

export default Card
import { useState, useEffect } from 'react';
import './MultiPlayerBoard.css';
import CongratulationsModal from '../CongratulationsModal/CongratulationsModal';
import { useNavigate } from 'react-router-dom';
import Card from '../Card/Card';

const MultiPlayerBoard = ({ boardSize }) => {
    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [currentPlayer, setCurrentPlayer] = useState(1);
    const [scores, setScores] = useState({ player1: 0, player2: 0 });
    const [gameWon, setGameWon] = useState(false);
    const [winnerMessage, setWinnerMessage] = useState('');

    const navigate = useNavigate();

    const emojiList = [
        "🍎", "🍌", "🍇", "🍉", "🍓", "🍒", "🍍", "🥝",
        "🍋", "🥭", "🍑", "🥥", "🌽", "🥕", "🍔", "🍕",
        "🍩", "🍪", "🍫", "🍿", "🥨", "🧁", "🍵", "🍷",
        "🌶️", "🧄", "🥬", "🥗", "🍤", "🍣", "🍛", "🍜",
        "🍝", "🌮",
    ];

    const generateBoard = (numCards) => {
        const numPairs = numCards / 2;
        const selectedEmojis = emojiList.slice(0, numPairs);
        const cardValues = [...selectedEmojis, ...selectedEmojis];
        const shuffledCards = cardValues.sort(() => Math.random() - 0.5);
    
        setCards(shuffledCards);
        setFlippedCards([]);
        setMatchedCards([]);
        setCurrentPlayer(1);
        setScores({ player1: 0, player2: 0 });
        setGameWon(false);
        setWinnerMessage('');
    };

    useEffect(() => {
        generateBoard(boardSize);
    }, [boardSize]);

    const handleCardClick = (index) => {
        if (flippedCards.length < 2 && !flippedCards.includes(index) && !matchedCards.includes(index)) {
            setFlippedCards((prev) => [...prev, index]);
        }
    };

    useEffect(() => {
        if (flippedCards.length === 2) {
            const [firstIndex, secondIndex] = flippedCards;
            if (cards[firstIndex] === cards[secondIndex]) {
                setMatchedCards((prev) => [...prev, firstIndex, secondIndex]);
                setScores((prevScores) => ({
                    ...prevScores,
                    [currentPlayer === 1 ? 'player1' : 'player2']: prevScores[currentPlayer === 1 ? 'player1' : 'player2'] + 1,
                }));
            } else {
                setTimeout(() => setCurrentPlayer((prev) => (prev === 1 ? 2 : 1)), 1000);
            }
            setTimeout(() => setFlippedCards([]), 1000);
        }
    }, [flippedCards, cards, currentPlayer]);

    useEffect(() => {
        if (matchedCards.length === cards.length && cards.length > 0) {
            setGameWon(true);
            if (scores.player1 > scores.player2) {
                setWinnerMessage('¡Jugador 1 gana!');
            } else if (scores.player2 > scores.player1) {
                setWinnerMessage('¡Jugador 2 gana!');
            } else {
                setWinnerMessage('¡Es un empate!');
            }
        }
    }, [matchedCards, cards, scores]);

    const handleRestart = () => {
        generateBoard(boardSize);
    };

    const handleChangeMode = () => {
        navigate('/options');
    };

    return (
        <div className="board-container">
            {gameWon && (
                <CongratulationsModal
                    title="¡Juego terminado!"
                    subtitle={winnerMessage} 
                    onRestart={handleRestart}
                    onChangeMode={handleChangeMode}
                />
            )}
            <div className="players-info">
                <div className='points-players'>
                    <p>Jugador 1: {scores.player1}</p>
                    <p>Jugador 2: {scores.player2}</p>
                </div>
                <h2>Turno actual: Jugador {currentPlayer}</h2>
            </div>
            <div
                className="board"
                style={{
                    gridTemplateColumns: `repeat(${Math.sqrt(cards.length)}, 1fr)`,
                }}
            >
                {cards.map((card, index) => (
                    <Card
                    key={index}
                    card={card}
                    flipped={flippedCards.includes(index)}
                    matched={matchedCards.includes(index)}
                    onClick={() => handleCardClick(index)}
                />
                ))}
            </div>
        </div>
    );
};

export default MultiPlayerBoard;
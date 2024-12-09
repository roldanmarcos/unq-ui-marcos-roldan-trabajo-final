import { useState, useEffect } from 'react';
import './SinglePlayerBoard.css';
import CongratulationsModal from '../CongratulationsModal/CongratulationsModal';
import { useNavigate } from 'react-router-dom';

const SinglePlayerBoard = ({ boardSize }) => {
    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [startTime, setStartTime] = useState(null);
    const [gameWon, setGameWon] = useState(false);
    const [timeTaken, setTimeTaken] = useState(null);

    const navigate = useNavigate();

    const emojiList = [
        "🍎", "🍌", "🍇", "🍉", "🍓", "🍒", "🍍", "🥝",
        "🍋", "🥭", "🍑", "🥥", "🌽", "🥕", "🍔", "🍕",
        "🍩", "🍪", "🍫", "🍿", "🥨", "🧁", "🍵", "🍷",
        "🎨", "🎹", "🎮", "🎲", "🎯", "🎤", "🎧", "🎵",
    ];

    const generateBoard = (numCards) => {
        const numPairs = numCards / 2;
        const selectedEmojis = emojiList.slice(0, numPairs);
        const cardValues = [...selectedEmojis, ...selectedEmojis];
        const shuffledCards = cardValues.sort(() => Math.random() - 0.5);
    
        setCards(shuffledCards);
        setFlippedCards([]);
        setMatchedCards([]);
        setStartTime(Date.now());
        setGameWon(false);
        setTimeTaken(null);
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
            }
            setTimeout(() => setFlippedCards([]), 1000);
        }
    }, [flippedCards, cards]);

    useEffect(() => {
        if (matchedCards.length === cards.length && cards.length > 0) {
            setGameWon(true);
            const endTime = Date.now();
            const duration = Math.floor((endTime - startTime) / 1000);
            setTimeTaken(duration);
        }
    }, [matchedCards, cards, startTime]);

    const handleRestart = () => {
        generateBoard(boardSize);
    };


    const handleChangeMode = () => {
        navigate('/options');
    };

    return (
        <div className="board-container">
            {gameWon && (<CongratulationsModal title="¡Ganaste!" subtitle={`Te tomó (${timeTaken}) segundos emparejar todas las cartas.`} onRestart={handleRestart} onChangeMode={handleChangeMode}/>)}
            <div
                className="board"
                style={{
                    gridTemplateColumns: `repeat(${Math.sqrt(cards.length)}, 1fr)`,
                }}
            >
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`card ${
                            flippedCards.includes(index) || matchedCards.includes(index) ? 'flipped' : ''
                        }`}
                        onClick={() => handleCardClick(index)}
                    >
                        {flippedCards.includes(index) || matchedCards.includes(index) ? card : '❓'}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SinglePlayerBoard;
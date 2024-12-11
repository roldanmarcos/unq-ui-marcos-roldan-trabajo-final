import { useState, useEffect } from 'react';
import './SinglePlayerBoard.css';
import CongratulationsModal from '../CongratulationsModal/CongratulationsModal';
import Card from '../Card/Card';
import { useNavigate } from 'react-router-dom';
import images from '../Images/Images';

const SinglePlayerBoard = ({ boardSize }) => {
    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [startTime, setStartTime] = useState(null);
    const [gameWon, setGameWon] = useState(false);
    const [timeTaken, setTimeTaken] = useState(null);

    const navigate = useNavigate();

    const generateBoard = (numCards) => {
        const numPairs = numCards / 2;
        const selectedImages = images.slice(0, numPairs);
        const cardValues = [...selectedImages, ...selectedImages];
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
            {gameWon && (
                <CongratulationsModal
                    title="¡Ganaste!"
                    subtitle={`Te tomó ${timeTaken} segundos emparejar todas las cartas.`}
                    onRestart={handleRestart}
                    onChangeMode={handleChangeMode}
                />
            )}
            <div
                className="board"
                style={{
                    gridTemplateColumns: `repeat(${Math.sqrt(cards.length)}, 1fr)`,
                }}
            >
                {cards.map((card, index) => (
                    <Card
                        key={`image-${index}`}
                        card={<img src={card} alt={`Card ${index}`} />}
                        flipped={flippedCards.includes(index)}
                        matched={matchedCards.includes(index)}
                        onClick={() => handleCardClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default SinglePlayerBoard;
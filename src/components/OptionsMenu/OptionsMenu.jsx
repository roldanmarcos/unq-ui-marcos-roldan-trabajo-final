import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import './OptionsMenu.css';

const OptionsMenu = () => {
    const [gameMode, setGameMode] = useState('');
    const [boardSize, setBoardSize] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleStartGame = () => {
        if (!gameMode && boardSize) {
            setErrorMessage("Por favor, selecciona el modo de juego.");
            return;
        }
        if (gameMode && !boardSize) {
            setErrorMessage("Por favor, selecciona el tamaño del tablero.");
            return;
        }
        if (!gameMode || !boardSize) {
            setErrorMessage("Por favor, selecciona el modo de juego y el tamaño del tablero.");
            return;
        }
        setErrorMessage('');
        navigate('/game', { state: { gameMode, boardSize } });
    };

    return (
        <div className='option-menu-container'>
            <h2>Selecciona el modo de juego:</h2>
            <div className='options-container'>
                <Button 
                    text="Solitario" 
                    onClick={() => setGameMode('Solitario')} 
                    className={gameMode === 'Solitario' ? 'selected' : ''}
                />
                <Button 
                    text="1 vs 1" 
                    onClick={() => setGameMode('1vs1')} 
                    className={gameMode === '1vs1' ? 'selected' : ''}
                />
            </div>
            <h2>Selecciona el tamaño del tablero:</h2>
            <div className='options-container'>
                <Button 
                    text="4 x 4" 
                    onClick={() => setBoardSize(16)} 
                    className={boardSize === 16 ? 'selected' : ''}
                />
                <Button 
                    text="6 x 6" 
                    onClick={() => setBoardSize(36)} 
                    className={boardSize === 36 ? 'selected' : ''}
                />
                <Button 
                    text="8 x 8" 
                    onClick={() => setBoardSize(64)} 
                    className={boardSize === 64 ? 'selected' : ''}
                />
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <Button text="Comenzar partida" onClick={handleStartGame} />
        </div>
    );
};

export default OptionsMenu;
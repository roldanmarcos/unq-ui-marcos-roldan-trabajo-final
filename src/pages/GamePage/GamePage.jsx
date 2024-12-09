import { useLocation } from 'react-router-dom';
import TemplatePage from '../TemplatePage/TemplatePage';
import SinglePlayerBoard from '../../components/Board/SinglePlayerBoard';
import MultiPlayerBoard from '../../components/Board/MultiPlayerBoard';

const GamePage = () => {
    const location = useLocation();
    const { gameMode, boardSize } = location.state || {};

    if (!gameMode || !boardSize) {
        return <div>Error: Faltan datos para el juego.</div>;
    }

    return (
      <TemplatePage>
        <div>
            {gameMode === 'Solitario' ? (
                <SinglePlayerBoard boardSize={boardSize} />
            ) : (
                <MultiPlayerBoard boardSize={boardSize} />
            )}
        </div>
      </TemplatePage>
    );
};

export default GamePage;
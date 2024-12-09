import './CongratulationsModal.css';
import Button from '../Button/Button';

const CongratulationsModal = ({ time, onRestart, onChangeMode }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h1>¡Ganaste!</h1>
                <p>Te tomó {time} segundos emparejar todas las cartas.</p>
                <div className='options'>
                    <Button text="Volver a jugar" onClick={onRestart} />
                    <Button text="Elegir otro modo" onClick={onChangeMode} />
                </div>
            </div>
        </div>
    );
};

export default CongratulationsModal;

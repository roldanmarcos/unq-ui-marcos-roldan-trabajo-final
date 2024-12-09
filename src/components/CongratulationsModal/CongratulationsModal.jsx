import './CongratulationsModal.css';
import Button from '../Button/Button';

const CongratulationsModal = ({ title, subtitle, onRestart, onChangeMode }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h1>{title}</h1>
                <p>{subtitle}</p>
                <div className='options'>
                    <Button text="Volver a jugar" onClick={onRestart} />
                    <Button text="Elegir otro modo" onClick={onChangeMode} />
                </div>
            </div>
        </div>
    );
};

export default CongratulationsModal;

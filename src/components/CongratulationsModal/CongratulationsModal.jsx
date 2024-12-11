import './CongratulationsModal.css';
import Button from '../Button/Button';
import { useEffect } from 'react';

const CongratulationsModal = ({ title, subtitle, onRestart, onChangeMode }) => {

    useEffect(() => {
        const myCanvas = document.createElement('canvas');
        document.body.appendChild(myCanvas);
        myCanvas.classList.add('confetti-canvas');

        const myConfetti = confetti.create(myCanvas, {
            resize: true,
            useWorker: true,
        });

        myConfetti({
            particleCount: 100,
            spread: 100,
            origin: { y: 0.4 },
        });

        return () => {
            myCanvas.remove();
        };
    }, []);

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

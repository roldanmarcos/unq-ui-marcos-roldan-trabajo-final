import './CongratulationsModal.css';
import Button from '../Button/Button';
import { useEffect } from 'react';

const CongratulationsModal = ({ title, subtitle, onRestart, onChangeMode }) => {

    useEffect(() => {
        // Crea un lienzo personalizado
        const myCanvas = document.createElement('canvas');
        document.body.appendChild(myCanvas);
        myCanvas.classList.add('confetti-canvas');

        const myConfetti = confetti.create(myCanvas, {
            resize: true, // Ajusta el tamaño del lienzo al cambiar el tamaño de la ventana
            useWorker: true, // Mejora el rendimiento en navegadores modernos
        });

        // Lanza confet
        myConfetti({
            particleCount: 100,
            spread: 100,
            origin: { y: 0.4 },
        });

        // Limpia el lienzo al desmontar el componente
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

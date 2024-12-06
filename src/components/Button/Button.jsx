import './Button.css';

function Button({ text, onClick, className }) {
    return (
        <button className={`button-container ${className}`} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;
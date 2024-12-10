import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/memotest-logo.svg';
import './WelcomePage.css';

const WelcomePage = () => {
    const navigate = useNavigate();
    const [isLogoMoved, setIsLogoMoved] = useState(false);
    const [isButtonMoved, setIsButtonMoved] = useState(false);

    const handlePlayClick = () => {
        setIsLogoMoved(true);
        setIsButtonMoved(true)
        setTimeout(() => navigate('/options'), 500);
    };

    return (
        <div className='welcomePageContainer'>
            <div className={`logo ${isLogoMoved ? 'move-up' : ''}`}>
                <img src={logo} alt="Logo" />
                <h1>MemoTest</h1>
            </div>
            <div className={`buttonJugar ${isButtonMoved ? 'move-down' : ''}`}> 
                <Button text="Jugar" onClick={handlePlayClick} />
            </div>
        </div>
    );
};

export default WelcomePage;
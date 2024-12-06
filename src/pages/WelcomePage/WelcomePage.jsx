import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/memotest-logo.svg';
import './WelcomePage.css';

const WelcomePage = () => {
    const navigate = useNavigate();
    const [isLogoMoved, setIsLogoMoved] = useState(false);

    const handlePlayClick = () => {
        setIsLogoMoved(true);
        setTimeout(() => navigate('/options'), 500);
    };

    return (
        <div className='welcomePageContainer'>
            <div className={`logo ${isLogoMoved ? 'move-up' : ''}`}>
                <img src={logo} alt="Logo" />
                <h1>MemoTest</h1>
            </div>
            <Button text="Jugar" onClick={handlePlayClick} />
        </div>
    );
};

export default WelcomePage;
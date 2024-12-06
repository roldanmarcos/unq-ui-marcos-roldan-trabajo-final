import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import './WelcomePage.css'

const WelcomePage = () => {
    const navigate = useNavigate();

    const handlePlayClick = () => {
        navigate('/options');
    };

    return (
        <div className='welcomePageContainer'>
            <p>Icono</p>
            <p>MemoTest</p>
            <Button text="Jugar" onClick={handlePlayClick}/>
        </div>
    )
};

export default WelcomePage;
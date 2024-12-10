import './Header.css'
import backIcon from '../../assets/backIcon.svg'
import { useNavigate } from 'react-router-dom';

function Header({ showBackButton = true }) {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className='header-container'>
      {showBackButton && <img src={backIcon} onClick={handleBackClick} alt="Back" />}
      <h1>Memotest</h1>
    </div>
  );
}

export default Header;
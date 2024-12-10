import './TemplatePage.css'
import Header from '../../components/Header/Header'

const TemplatePage = ({ children, showBackButton = true }) => {
  return (
    <div className='page-container'>
      <Header showBackButton={showBackButton} />
      <div className='body-container'>
        {children}
      </div>
    </div>
  );
}

export default TemplatePage;
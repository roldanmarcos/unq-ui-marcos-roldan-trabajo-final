import Header from '../../components/Header/Header'
import './TemplatePage.css'

const TemplatePage = ({ children }) => {
  return (
    <div className='page-container'>
      <Header />
      <div className='body-container'>
        {children}
      </div>
    </div>
  );
}

export default TemplatePage
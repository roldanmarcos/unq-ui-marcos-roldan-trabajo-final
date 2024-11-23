import Header from '../../components/Header/Header'
import OptionsMenu from '../../components/OptionsMenu/OptionsMenu'
import Tablero from '../../components/Tablero/Tablero'
import './TemplatePage.css'

function TemplatePage() {
    return (
        <div className='page-container'>
            <Header />
            <div className='body-container'>
                <OptionsMenu />
                <Tablero />
            </div>
        </div>
    )
}

export default TemplatePage
import './OptionPage.css'
import TemplatePage from '../TemplatePage/TemplatePage';
import OptionsMenu from '../../components/OptionsMenu/OptionsMenu'
import { useNavigate } from 'react-router-dom';

const OptionsPage = () => {
    const navigate = useNavigate();

    return (
        <TemplatePage>
            <OptionsMenu />
        </TemplatePage>
    )
};

export default OptionsPage;
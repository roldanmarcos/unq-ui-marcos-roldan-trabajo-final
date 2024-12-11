import TemplatePage from '../TemplatePage/TemplatePage';
import OptionsMenu from '../../components/OptionsMenu/OptionsMenu'

const OptionsPage = () => {
    return (
        <TemplatePage showBackButton={false}>
            <OptionsMenu />
        </TemplatePage>
    )
};

export default OptionsPage;
//export defaults import without curly braces
import { Container } from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';

const CampsitesDirectoryPage = () => {

    return (
        <Container>

            <CampsitesList />

        </Container>
    );
}

export default CampsitesDirectoryPage;
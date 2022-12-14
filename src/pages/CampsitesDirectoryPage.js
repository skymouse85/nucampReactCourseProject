//export defaults import without curly braces
import { Container, Row, Col } from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import { useState } from 'react';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import SubHeader from '../components/SubHeader';

const CampsitesDirectoryPage = () => {
    const [campsiteId, setCampsiteId] = useState(0);
    const selectedCampsite = selectCampsiteById(campsiteId);

    return (
        <Container>
            <Row>
                <SubHeader current='Directory' />

                <Col sm='5' md='12'>
                    <CampsitesList setCampsiteId={setCampsiteId} />
                </Col>
                {/* <Col sm='7' md='5'>
                    <CampsiteDetail campsite={selectedCampsite} />
                </Col> */}

            </Row>
        </Container>
    );
}

export default CampsitesDirectoryPage;
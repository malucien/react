import {Container, Row, Col, Button} from 'reactstrap';
import CampsiteDetail from '../features/campsites/CampsitesDetail';
import CampsitesList from '../features/campsites/CampsitesList';
import { selectRandomCampsite } from '../features/campsites/campsitesSlice';

const CampsitesDirectoryPage = () => {
  let selectedCampsite = selectRandomCampsite();

  const toggleCampsite = () => {
    selectedCampsite = selectRandomCampsite();
    console.log(selectedCampsite);
  };

  return (
    <Container>
      <button onClick={() => toggleCampsite()}>
        Select Random Campsite
      </button>
      <Row>
        <Col sm = '5' md = '7'>
          <CampsitesList/>
        </Col>
        <Col sm = '7' md = '5'>
          <CampsiteDetail campsite = {selectedCampsite}/>
        </Col>
      </Row>
    </Container>
  );
};

export default CampsitesDirectoryPage
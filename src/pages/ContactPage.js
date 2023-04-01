import {Container, Col, Row} from 'reactstrap';
import SubHeader from "../components/SubHeader";

const ContactPage = () => {
  return (
    <Container>
      <SubHeader current="Contact Us"/>
      <Row className='row-content align-items-center'>
        <Col>
          <h5>Our Address</h5>
          <address>
            1 Nucamp Way
            <br />
            Seattle, WA 98001
            <br />
            U.S.A.
          </address>
        </Col>
        <Col>
        
        </Col>
      </Row>
      <Row className='row-content'>

      </Row>
    </Container>
  )
};

export default ContactPage;
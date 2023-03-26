import {Col, Row} from 'reactstrap';
import DisplayCard from './DisplayCard';
import {selectFeactedCampsite} from '../campsites/campsitesSlice';
import {selectFeaturedPromotion} from '../promotions/PromotionsSlice';

const DisplayList = () => {
  const items = [selectFeatureCampsite(), selectFeaturedPromotion()];

  return (
    <Row>
      {items.map((item, idx) => {
        return (
          <Col md className='m-1' key={idx}>
            <DisplayCad item={item} />
          </Col>
        )
      })}
    </Row>
  );
};

export default DisplayList;
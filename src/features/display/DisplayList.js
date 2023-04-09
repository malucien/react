import { useSelector } from 'react-redux';
import {Col, Row} from 'reactstrap';
import DisplayCard from './DisplayCard';
import {selectFeaturedCampsite} from '../campsites/campsitesSlice';
import {selectFeaturedPromotion} from '../promotions/PromotionsSlice';
import { selectFeaturedPartner } from '../partners/PartnersSlice';

const DisplayList = () => {
  const items = useSelector((state)[ selectFeaturedCampsite(state), selectFeaturedPromotion(state), selectFeaturedPartner(state)]);

  return (
    <Row>
      {items.map((item, idx) => {
        return (
          <Col md className='m-1' key={idx}>
            <DisplayCard item={item} />
          </Col>
        )
      })}
    </Row>
  );
};

export default DisplayList;
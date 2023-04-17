import { useSelector } from 'react-redux';
import {Col, Row} from 'reactstrap';
import DisplayCard from './DisplayCard';
import {selectFeaturedCampsite} from '../campsites/campsitesSlice';
import {selectFeaturedPromotion} from '../promotions/PromotionsSlice';
import { selectFeaturedPartner } from '../partners/PartnersSlice';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const DisplayList = () => {
  const items = useSelector((state) => [ 
    selectFeaturedCampsite(state),
    selectFeaturedPromotion(state), 
    selectFeaturedPartner(state)]
  );

  console.log('display items:', items);

  return (
    <Row>
      {items.map((item, idx) => {
        const { featuredItem, isLoading, errMsg} = item;
        if (isLoading) {
          return <Loading key={idx}/>
        }
        if (errMsg) {
          return <Error errMsg={errMsg} key={idx} />
        }
        return (
          item && (
            <Col md className='m-1' key={idx}>
              <DisplayCard item={featuredItem} />
            </Col>
          )
        )
      })}
    </Row>
  );
};

export default DisplayList;
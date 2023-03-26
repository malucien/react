import react from "react";
import { Card, CardImg, CardImgOverlay, CardTitle} from "reactstrap";
import {Link} from 'react-router-dom';


const campsiteCard = ({campsite}) => {
  const {id, image, name } = campsite;
  return(
    <Link to={`${id}`}>
      <Card>
        <CardImg with = "100%" src={image} alt={name}/>
        <CardImgOverlay>
          <CardTitle>{name}</CardTitle>
        </CardImgOverlay>
      </Card>
    </Link>
  );
};
export default campsiteCard;
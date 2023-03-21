import react from "react";
import { Card, CardImg, CardImgOverlay, CardTitle} from "reactstrap";


const campsiteCard = ({campsite}) => {
  const {image, name } = campsite;
  return(
    <Card>
      <CardImg with = "100%" src={image} alt={name}/>
      <CardImgOverlay>
        <CardTitle>{name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
};
export default campsiteCard;
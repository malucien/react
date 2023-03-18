import react from "react";
import { Card, CardImg, CardImgOverlay, CardTitle} from "reactstrap";


const campsiteCard = (props) => {
  return(
    <Card>
      <CardImg with = "100%" src={props.campsite.image} alt={props.campsite.name}/>
      <CardImgOverlay>
        <CardTitle>{props.campsite.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
};
export default campsiteCard;
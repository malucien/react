import { Col, Row, Breadcrumb, breadCrumbImg, BreadcrumbItem} from 'reactstrap';
import {Link } from 'react-router-dom';

const SubHeader = ({ current, detail}) => {
  return (
    <Row>
      <Breadcrumb> 
        <BreadcrumbItem>
          <Link to='/'>Home</Link>
        </BreadcrumbItem>
        {detail && (
          <BreadcrumbItem>
            <Link to='/directory'>Directory</Link>
          </BreadcrumbItem>
        )}
        <BreadcrumbItem active>{current}</BreadcrumbItem>
      </Breadcrumb>
      <h2>{current}</h2>
      <hr />
    </Row>
  );
};

export default SubHeader;
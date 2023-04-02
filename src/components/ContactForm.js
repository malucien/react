import {Button, Label, Col, FormGroup} from 'reactstrap';
import {Formik, Field, Form} from 'formik';

const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        firstName:'',
        lastName:'',
        phoneNum:'',
        email:'',
        egree:false,
        contactType:'By Phone',
        feedBack:'',
      }}
    >
      <Form>
        <FormGroup row>
          <Label>

          </Label>
          <Col md="10">
          
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label>

          </Label>
          <Col md="10">
          
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label>

          </Label>
          <Col md="10">
          
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label>

          </Label>
          <Col md="10">
          
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label>

          </Label>
          <Col md="4">
          
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label>

          </Label>
          <Col md="10">
          
          </Col>
        </FormGroup>
        <FormGroup row>
          
        </FormGroup>
        
      </Form>
    </Formik>
  )
};

export default ContactForm;
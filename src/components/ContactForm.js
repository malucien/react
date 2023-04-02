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
          <Label htmlFor="firstName" md="2">
            First Name
          </Label>
          <Col md="10">
            <Field
              name="firstName"
              ClassName="form-control" 
            />

          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="lastName" md="2">
            Last Name
          </Label>
          <Col md="10">
            <Field
              name="lastName"
              ClassName="form-control" 
            />

          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="phoneNum" md="2">
            Phone
          </Label>
          <Col md="10">
            <Field
              name="phoneNum"
              ClassName="form-control" 
            />

          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="email" md="2">
            Email
          </Label>
          <Col md="10">
            <Field
              name="email"
              ClassName="form-control" 
            />

          </Col>
        </FormGroup>
        <FormGroup row>
          <Label check md={{size:4, offset:2}}>
            May we contact you?
          </Label>
          <Col md="4">
            <Field
              ClassName="form-control" 
            />

          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="feedBack" md="2">
            Your Feedback
          </Label>
          <Col md="10">
            <Field
              ClassName="form-control" 
            />

          </Col>
        </FormGroup>
        <FormGroup row>
          <Field
              ClassName="form-control" 
            />
        </FormGroup>
        
      </Form>
    </Formik>
  )
};

export default ContactForm;
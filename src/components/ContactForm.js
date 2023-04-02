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
              placeholder="First Name"
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
              placeholder="Last Name"
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
              placeholder="Phone Number"
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
              placeholder="Email Address"
              tyoe="email"
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
              name="contactType"
              as="select"
              ClassName="form-control" 
            >
              <option>By Phone</option>
              <option>By Email</option>
            </Field>

          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="feedBack" md="2">
            Your Feedback
          </Label>
          <Col md="10">
            <Field
              name="feedBack"
              as="textarea"
              rows="12"
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
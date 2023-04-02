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
          
        </FormGroup>
        <FormGroup row>

        </FormGroup>
        <FormGroup row>

        </FormGroup>
        <FormGroup row>

        </FormGroup>
        <FormGroup row>

        </FormGroup>
        <FormGroup row>

        </FormGroup>
        <FormGroup row>

        </FormGroup>
      </Form>
    </Formik>
  )
};

export default ContactForm;
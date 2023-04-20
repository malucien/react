import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label, Container } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateCommentForm } from '../../utils/validateCommentForm';
import { postComment } from '../comments/CommentsSlice';
import { useDispatch } from 'react-redux';

const CommentForm = ({ campsiteId }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = values => {
    const comment = {
      campsiteId: parseInt(campsiteId),
      rating: values.rating,
      author: values.author,
      text: values.commentText,
      date: values.date
    };
    dispatch(postComment(comment));
    setModalOpen(false);
  };

  return (
    <Container>
      <Button outline onClick={() => setModalOpen(true)}>
        <i className='fa fa-pencil fa-lg' /> Add Comment
      </Button>
      <Modal isOpen={modalOpen}>
        <ModalHeader toggle={() => setModalOpen(false)}>
          Add Comment
        </ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{
              rating: undefined,
              author: '',
              commentText: '',
              date:''
            }}
            onSubmit={handleSubmit}
            validate = {validateCommentForm}
          >
            <Form>
              <FormGroup>
                <Label htmlFor='rating'>Rating</Label>
                <Field name='rating' as='select' className='form-control'>
                  <option>Select...</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  
                </Field>
                <ErrorMessage name="rating">{(msg) => <p className="text-danger">{msg}</p>}</ErrorMessage>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='author'>Your Name</Label>
                <Field
                  name='author'
                  placeholder='Your Name'
                  className='form-control'
                />
                <ErrorMessage name="author">{(msg) => <p className="text-danger">{msg}</p>}</ErrorMessage>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='commentText'>Comment</Label>
                <Field
                  name='commentText'
                  as='textarea'
                  rows='12'
                  className='form-control'
                />
              </FormGroup>
              <Button type='submit' color='primary'>
                Submit
              </Button>
            </Form>
          </Formik>
        </ModalBody>
      </Modal>
    </Container>
  );
};

export default CommentForm;

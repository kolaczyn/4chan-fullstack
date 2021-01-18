import axios from 'axios';
import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Button,
} from 'reactstrap';
import { useHistory } from 'react-router-dom';
import apiEndpoint from '../../const/apiEndpoint';
import useBoard from '../../hooks/useBoard';
import CheckboxFormField from './CheckboxFormField';
import TextFormField from './TextFormField';

const initialValues = {
  name: '',
  subject: '',
  comment: '',
  notARobot: false,
};

export default function CreateThreadForm({ setIsFormOpen }) {
  const { boardSlug } = useBoard();
  const history = useHistory();

  const handleSubmit = (value) => {
    setTimeout(() => {
      const link = `${apiEndpoint}/threads/${boardSlug}`;
      axios.post(link, value).then((res) => {
        const { id } = res.data;
        history.push(`/${boardSlug}/thread/${id}`);
      });
    }, 1000);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <TextFormField id="name" name="name" placeholder="Anonymous">Name</TextFormField>
          <TextFormField id="subject" name="subject">Subject</TextFormField>
          <TextFormField rows="5" type="textarea" id="comment" name="comment">Comment</TextFormField>
          <CheckboxFormField id="notARobot" name="notARobot">I am not a robot</CheckboxFormField>
          <Button disabled={isSubmitting} type="submit" color="primary" className="mr-2">
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
          <Button
            disabled={isSubmitting}
            outline
            color="danger"
            onClick={() => setIsFormOpen(false)}
          >
            Cancel
          </Button>
        </Form>
      )}
    </Formik>
  );
}

CreateThreadForm.propTypes = {
  setIsFormOpen: PropTypes.func.isRequired,
};

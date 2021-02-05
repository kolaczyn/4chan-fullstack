import axios from 'axios';
import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import * as yup from 'yup';
import {
  Button,
} from 'reactstrap';
import { useHistory } from 'react-router-dom';

import apiEndpoint from '../../static/const/apiEndpoint';
import useBoard from '../../hooks/useBoard';
import CheckboxFormField from './CheckboxFormField';
import TextFormField from './TextFormField';

const initialValues = {
  name: '',
  comment: '',
  notARobot: false,
};

const validationSchema = yup.object({
  name: yup
    .string()
    .optional()
    .max(24),
  comment: yup
    .string()
    .required('You need at least some text in your reply')
    .max(1000),
  notARobot: yup.bool().required().oneOf([true], 'You must not be a robot to start a new thread'),
});

export default function CreateThreadForm({ setIsFormOpen }) {
  const { boardSlug, threadId } = useBoard();
  const history = useHistory();

  const handleSubmit = (value) => {
    setTimeout(() => {
      const link = `${apiEndpoint}/threads/${boardSlug}/${threadId}`;
      axios.post(link, value).then((res) => {
        history.go(0);
      });
    }, 1000);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, isValid, ...rest }) => (
        // I don't like it that the Submit button can be disabled before errors are shown
        // e.g. when tab over to Subject
        <Form>
          <TextFormField id="name" name="name" placeholder="Anonymous" autoComplete="off">Name</TextFormField>
          <TextFormField rows="5" type="textarea" id="comment" name="comment">Comment</TextFormField>
          <CheckboxFormField id="notARobot" name="notARobot">I am not a robot</CheckboxFormField>
          <Button disabled={isSubmitting || !isValid} type="submit" color="primary" className="mr-2">
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

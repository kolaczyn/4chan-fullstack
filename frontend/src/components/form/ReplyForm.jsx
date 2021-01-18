// I should probably re-enable these in the future
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */

// TODO
// this component is 90% similar to CreateThreadForm.jsx
// find a way to share the logic these two components
// maybe higher order components?

import axios from 'axios';
import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Button,
} from 'reactstrap';
import apiEndpoint from '../../const/apiEndpoint';
import useBoard from '../../hooks/useBoard';
import CheckboxFormField from './CheckboxFormField';
import TextFormField from './TextFormField';

const initialValues = {
  name: '',
  comment: '',
  notARobot: false,
};

export default function CreateReplyForm({ setIsFormOpen }) {
  const { boardSlug } = useBoard();
  const handleSubmit = (value) => {
    setTimeout(() => {
      console.log(value);
      const link = `${apiEndpoint}/threads${boardSlug}`;
      axios.post(link, value).then((res) => console.log(res));
    },
    1000);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <TextFormField id="name" name="name" placeholder="Anonymous">Name</TextFormField>
          <TextFormField id="comment" name="comment">Comment</TextFormField>
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

CreateReplyForm.propTypes = {
  setIsFormOpen: PropTypes.func.isRequired,
};

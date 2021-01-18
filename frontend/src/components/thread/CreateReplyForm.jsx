// I should probably re-enable these in the future
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */

// TODO
// this component is 90% similar to CreateThreadForm.jsx
// find a way to share the logic these two components
// maybe higher order components?

import axios from 'axios';
import { Form as FormikForm, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Button,
} from 'reactstrap';
import apiEndpoint from '../../const/apiEndpoint';
import CheckboxFormField from '../form/CheckboxFormField';
import TextFormField from '../form/TextFormField';

// for a future reference';';';
// https://stackoverflow.com/questions/56149756/reactjs-how-to-handle-image-file-upload-with-formik

const initialValues = {
  name: '',
  comment: '',
  notARobot: false,
};

export default function CreateReplyForm({ setIsFormOpen }) {
  const boardSlug = useLocation().pathname;
  const handleSubmit = (value) => {
  // console.log(value);
    const link = `${apiEndpoint}/threads${boardSlug}`;
    axios.post(link, value).then((res) => console.log(res));
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <FormikForm>
        <TextFormField id="name" name="name" placeholder="Anonymous">Name</TextFormField>
        <TextFormField id="comment" name="comment">Comment</TextFormField>
        <CheckboxFormField id="notARobot" name="notARobot">I am not a robot</CheckboxFormField>
        <Button type="submit" color="primary" className="mr-2">Post</Button>
        <Button
          outline
          color="danger"
          onClick={() => setIsFormOpen(false)}
        >
          Cancel
        </Button>
      </FormikForm>
    </Formik>
  );
}

CreateReplyForm.propTypes = {
  setIsFormOpen: PropTypes.func.isRequired,
};

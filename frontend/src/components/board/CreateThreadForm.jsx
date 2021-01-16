// I should probably re-enable these in the future
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Form as BootstrapForm, FormGroup, Label, Input, CustomInput,
} from 'reactstrap';
import {
  Formik, Form as FormikForm, Field, ErrorMessage, useField,
} from 'formik';
import axios from 'axios';

import { useLocation } from 'react-router-dom';
import CheckboxFormField from '../form/CheckboxFormField';
import TextFormField from '../form/TextFormField';
import apiEndpoint from '../../const/apiEndpoint';
// for a future reference';';';
// https://stackoverflow.com/questions/56149756/reactjs-how-to-handle-image-file-upload-with-formik

const initialValues = {
  name: '',
  subject: '',
  comment: '',
  notARobot: false,
};

export default function CreateThreadForm({ setIsFormOpen }) {
  const boardSlug = useLocation().pathname;
  const handleSubmit = (value) => {
  // console.log(value);
    const link = `${apiEndpoint}/threads${boardSlug}`;
    console.log(link);
    axios.post(link, value).then((res) => console.log(res));
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <FormikForm>
        <TextFormField id="name" name="name" placeholder="Anonymous">Name</TextFormField>
        <TextFormField id="subject" name="subject">Subject</TextFormField>
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

CreateThreadForm.propTypes = {
  setIsFormOpen: PropTypes.func.isRequired,
};

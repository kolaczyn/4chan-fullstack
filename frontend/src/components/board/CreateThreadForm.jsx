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
  subject: '',
  comment: '',
  notARobot: false,
};

export default function CreateThreadForm({ setIsFormOpen }) {
  const boardSlug = useLocation().pathname;
  const handleSubmit = (value) => {
    const link = `${apiEndpoint}/threads${boardSlug}`;
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

/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import {
  FormFeedback, FormGroup, Input, Label,
} from 'reactstrap';

export default function TextFormField({
  type, id, children, placeholder, ...rest
}) {
  const [field, meta] = useField(id);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <FormGroup>
      <Label htmlFor={id}>{children}</Label>
      <Input
        invalid={!!errorText}
        placeholder={placeholder}
        {...field}
        {...rest}
        id={id}
        type={type}
      />
      {/* {meta.error && <FormFeedback>{meta.error}</FormFeedback>} */}
      <FormFeedback>{errorText}</FormFeedback>
    </FormGroup>
  );
}

TextFormField.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  placeholder: PropTypes.string,
};

TextFormField.defaultProps = {
  type: 'text',
  placeholder: '',
};

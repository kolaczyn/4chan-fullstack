/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import { FormGroup, Input, Label } from 'reactstrap';

export default function TextFormField({
  type, id, children, placeholder,
}) {
  const [field, meta] = useField(id);
  return (
    <FormGroup>
      <Label htmlFor={id}>{children}</Label>
      <Input placeholder={placeholder} {...field} id={id} type={type} />
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

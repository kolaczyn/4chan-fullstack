/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Input, Label } from 'reactstrap';
import { useField } from 'formik';

export default function CheckboxFormField({
  children, id,
}) {
  const [field] = useField(id);
  return (

    <FormGroup check>
      <Input id={id} type="checkbox" {...field} />
      <Label htmlFor={id}>{children}</Label>
    </FormGroup>
  );
}

CheckboxFormField.propTypes = ({
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
});

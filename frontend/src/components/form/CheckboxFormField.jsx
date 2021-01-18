/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import {
  FormFeedback, FormGroup, Input, Label,
} from 'reactstrap';
import { useField } from 'formik';

export default function CheckboxFormField({
  children, id,
}) {
  const [field, meta] = useField(id);
  // stolen from Ben Awad's formik tutorial
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
  // I add mb classes, because the default padding looks akward
    <FormGroup className="mb-2" check>
      <Input invalid={!!errorText} id={id} type="checkbox" {...field} />
      <Label className="mb-0" htmlFor={id}>{children}</Label>
      {/* the feedback is in an akward position  */}
      <FormFeedback>{meta.error}</FormFeedback>
    </FormGroup>
  );
}

CheckboxFormField.propTypes = ({
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
});

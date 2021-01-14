import React from 'react'
import { Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap'

export default function CreateThreadForm({setIsFormOpen}) {
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input name="name" type="text" id="name" placeholder="Anonymous" />
      </FormGroup>
      <FormGroup>
        <Label for="subject">Subject</Label>
        <Input name="subject" type="text" id="subject" />
      </FormGroup>
      <FormGroup>
        <Label for="comment">Comment</Label>
        <Input name="comment" rows="5" type="textarea" id="comment" />
      </FormGroup>
      <FormGroup check>
        <Input type="checkbox" id="robot" />
        <Label name="robot" for="robot">I am not a robot</Label>
      </FormGroup>
      <FormGroup>
        <Label for="file">File</Label>
        <CustomInput name="file" type="file" id="file"/>
      </FormGroup>
      <Button color="primary" className="mr-2">Post</Button>
      <Button outline color="danger" onClick={() => setIsFormOpen(false)}>Cancel</Button>
    </Form>
  )
}

import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

import { title, body } from '../../fixtures/robot.json';

// It's pretty dumb name, change it later

export default function TheToast() {
  return (
    <div className="p-3 my-2 rounded">
      <Toast>
        <ToastHeader>{title}</ToastHeader>
        <ToastBody>{body}</ToastBody>
      </Toast>
    </div>
  );
}

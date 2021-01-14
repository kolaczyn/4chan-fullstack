import React from 'react'
import { Toast, ToastBody, ToastHeader } from 'reactstrap'

// It's pretty dumb name, change it later

export default function TheToast() {
  return (
    <div className="p-3 my-2 rounded">
      <Toast>
        <ToastHeader>You're not a robot?</ToastHeader>
        <ToastBody>I don't have any way to verify that you're actually a human, so I'll just have to trust you on that one c:</ToastBody>
      </Toast>
    </div>
  )
}

import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Thread() {
  const [, board, , threadId] = useLocation().pathname.split('/');
  return (
    <div>
      <h2>Welcome on {board}</h2>
      <h4>You are viewing thread no. {threadId}</h4>
    </div>
  )
}

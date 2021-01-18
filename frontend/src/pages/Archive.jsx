import React from 'react';
import useBoard from '../hooks/useBoard';

export default function Archive() {
  const { boardName } = useBoard();
  return (
    <div>
      <h1>{`Welcome to ${boardName}'s Archive`}</h1>
    </div>
  );
}

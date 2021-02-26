import React from 'react';

export default function greentextify(text) {
  const lines = text.split('\n');
  const regex = /^>\S+.*$/;
  return lines.map((line) => (regex.test(line) ? (
    <>
      <span className="greentext">{line}</span>
      <br />
    </>
  ) : (
    <>
      {line}
      <br />
    </>
  )));
}

/* eslint-disable react/jsx-props-no-spreading */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

import ReplyCard from '../components/thread/ReplyCard';
import apiEndpoint from '../const/apiEndpoint';

export default function Thread() {
  const [replies, setReplies] = useState([]);
  const [, board, , threadId] = useLocation().pathname.split('/');

  useEffect(() => {
    const link = `${apiEndpoint}/threads/g`;
    axios.get(link).then((res) => {
      setReplies(res.data);
    });
  }, []);

  return (
    <>
      <div>
        <h2>
          Welcome on
          {board}
        </h2>
        <h4>
          You are viewing thread no.
          {threadId}
        </h4>
      </div>
      <Container>
        {replies.map((reply) => <ReplyCard {...reply} />)}
      </Container>
    </>
  );
}

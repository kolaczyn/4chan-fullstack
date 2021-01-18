/* eslint-disable react/jsx-props-no-spreading */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

import ReplyCard from '../components/thread/ReplyCard';
import apiEndpoint from '../const/apiEndpoint';
import useBoard from '../hooks/useBoard';

export default function Thread() {
  const [replies, setReplies] = useState([]);
  const { boardSlug, boardName, threadId } = useBoard();
  // const [, board, , threadId] = useLocation().pathname.split('/');

  useEffect(() => {
    const link = `${apiEndpoint}/threads/g`;
    axios.get(link).then((res) => {
      setReplies(res.data);
    });
  }, []);
  const siteTitle = `/${boardSlug}/ - ${boardName} - No. ${threadId} - 4chan`;

  return (
    <>
      <Helmet>
        <title>{siteTitle}</title>
      </Helmet>
      <div>
        <h2>
          Welcome on
          {boardName}
        </h2>
        <h4>
          You are viewing thread no.
          {threadId}
        </h4>
      </div>
      <Container>
        {replies.map((reply) => <ReplyCard key={reply.id} {...reply} />)}
      </Container>
    </>
  );
}

/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import {
  Button, Col, Container, Row,
} from 'reactstrap';
import SectionWrapper from '../components/common/SectionWrapper';
import ReplyForm from '../components/form/ReplyForm';

import ReplyCard from '../components/thread/ReplyCard';
import apiEndpoint from '../const/apiEndpoint';
import useBoard from '../hooks/useBoard';

export default function Thread() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [replies, setReplies] = useState([]);
  const [subject, setSubject] = useState('');
  const { boardSlug, boardName, threadId } = useBoard();

  useEffect(() => {
    // FIXME fetch a thread, not a board
    const link = `${apiEndpoint}/threads/${boardSlug}/${threadId}`;
    axios.get(link).then((res) => {
      setSubject(res.data.subject);
      setReplies(res.data.replies);
    });
  }, []);
  const toggleFormOpen = () => setIsFormOpen((old) => !old);
  const siteTitle = `/${boardSlug}/ - ${boardName} - No. ${threadId} - 4chan`;

  return (
    <>
      <Helmet>
        <title>{siteTitle}</title>
      </Helmet>
      <Container>
        <SectionWrapper title={siteTitle}>
          {isFormOpen ? <ReplyForm setIsFormOpen={setIsFormOpen} /> : (
            <Button
              color="primary"
              onClick={toggleFormOpen}
            >
              Post a Reply
            </Button>
          )}
        </SectionWrapper>
      </Container>
      <Container>
        {replies.map((reply, idx) => (
          <ReplyCard
            key={reply._id}
            board={reply.board}
            comment={reply.comment}
            _id={reply._id}
          >
            {/* put subject in the first reply */}
            {idx === 0 && <b>{subject}</b>}
            { ' '}
            {reply.comment}
          </ReplyCard>
        ))}
      </Container>
    </>
  );
}

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
  const { boardSlug, boardName, threadId } = useBoard();

  useEffect(() => {
    const link = `${apiEndpoint}/threads/${boardSlug}`;
    axios.get(link).then((res) => {
      setReplies(res.data);
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
              Start a New Thread
            </Button>
          )}
        </SectionWrapper>
      </Container>
      <Container>
        {replies.map((reply) => <ReplyCard key={reply.id} {...reply} />)}
      </Container>
    </>
  );
}

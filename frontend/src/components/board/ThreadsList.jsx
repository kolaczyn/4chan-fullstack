/* eslint-disable react/jsx-props-no-spreading */
import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import axios from 'axios';

import apiEndpoint from '../../const/apiEndpoint';
import ThreadCard from './ThreadCard';

export default function ThreadsList() {
  const [threads, setThreads] = useState([]);
  const boardSlug = useLocation().pathname;
  useEffect(() => {
    const link = `${apiEndpoint}/threads${boardSlug}`;
    axios.get(link).then((res) => {
      setThreads(res.data);
    });
  }, []);
  return (
    <Container fluid>
      <Row>
        {threads.map((thread) => <Col key={`${thread.board}-${thread.id}`} xl="2" md="3" sm="4" xs="6"><ThreadCard {...thread} /></Col>)}
      </Row>
    </Container>
  );
}

/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import axios from 'axios';

import apiEndpoint from '../../const/apiEndpoint';
import SectionWrapper from '../common/SectionWrapper';
import ThreadCard from '../board/ThreadCard';

export default function PopularThreads() {
  const [isLoading, setIsLoading] = useState(true);
  const [popularThreads, setPopularThreads] = useState([]);

  useEffect(() => {
    // link is a dumb name
    const link = `${apiEndpoint}/threads/popular`;
    axios.get(link).then((res) => {
      setPopularThreads(res.data);
      setIsLoading(false);
    });
  }, []);

  return (
    !isLoading
    && (
    <Container>
      <SectionWrapper title="Popular Threads">
        <Row>
          {popularThreads.map((thread) => <Col lg="3" md="6" xs="12" key={`${thread.board}-${thread.id}`}><ThreadCard {...thread} /></Col>)}
        </Row>
      </SectionWrapper>
    </Container>
    )
  );
}

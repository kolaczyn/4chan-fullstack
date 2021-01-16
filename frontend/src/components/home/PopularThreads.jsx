/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import axios from 'axios';

import PopularThread from './PopularThread';
import HomeCard from './HomeCard';
import apiEndpoint from '../../const/apiEndpoint';

export default function PopularThreads() {
  const [popularThreads, setPopularThreads] = useState([]);

  useEffect(() => {
    // link is a dumb name
    const link = `http://${apiEndpoint}/popular`;
    axios.get(link).then((res) => {
      setPopularThreads(res.data);
    }).catch((err) => console.error(err));
  }, []);

  return (
    <Container>
      <HomeCard title="Popular Threads">
        <Row>
          {popularThreads.map((thread) => <Col lg="3" md="6" xs="12" key={`${thread.board}-${thread.id}`}><PopularThread {...thread} /></Col>)}
        </Row>
      </HomeCard>
    </Container>
  );
}

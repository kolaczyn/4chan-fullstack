/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import PopularThread from '../PopularThread';
import HomeCard from '../HomeCard';
import threads from '../../fixtures/threads.json';

const popularThreads = threads.slice(0, 8);

export default function PopularThreads() {
  // const [popularThreads, setPopularThreads] = useState();

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

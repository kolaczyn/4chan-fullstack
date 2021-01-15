import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import HomeCard from '../HomeCard';
import { totalPosts, currentUsers, activeContent } from '../../fixtures/stats.json';

const numberWithCommas = (str) => str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
// stole from Stack Overflow

export default function Stats() {
  return (
    <Container>
      <HomeCard title="Stats">
        <Row className="text-center">
          <Col>
            Total Posts:
            {numberWithCommas(totalPosts)}
          </Col>
          <Col>
            Current Users:
            {numberWithCommas(currentUsers)}
          </Col>
          <Col>
            Active Content:
            {activeContent}
          </Col>
        </Row>
      </HomeCard>
    </Container>
  );
}

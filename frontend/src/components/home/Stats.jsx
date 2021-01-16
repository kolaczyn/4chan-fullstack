import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Col, Container, Row } from 'reactstrap';

import HomeCard from '../common/SectionWrapper';
import { totalPosts, currentUsers, activeContent } from '../../fixtures/stats.json';
import apiEndpoint from '../../const/apiEndpoint';

const numberWithCommas = (str) => str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
// stole from Stack Overflow

export default function Stats() {
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState({});

  useEffect(() => {
    const link = `${apiEndpoint}/stats`;
    axios.get(link).then((res) => {
      setStats(res.data);
      setIsLoading(false);
    });
  }, []);

  return (
    !isLoading && (
      <Container>
        <HomeCard title="Stats">
          <Row className="text-center">
            <Col>
              {'Total Posts: '}
              {numberWithCommas(totalPosts)}
            </Col>
            <Col>
              {'Current Users; '}
              {numberWithCommas(currentUsers)}
            </Col>
            <Col>
              {'Active Content: '}
              {activeContent}
            </Col>
          </Row>
        </HomeCard>
      </Container>
    )
  );
}

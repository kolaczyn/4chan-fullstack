import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Col, Container, Row } from 'reactstrap';

import SectionWrapper from '../common/SectionWrapper';
import apiEndpoint from '../../const/apiEndpoint';

// stolen from Stack Overflow
const numberWithCommas = (str) => str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export default function Stats() {
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState({});

  useEffect(() => {
    const link = `${apiEndpoint}/misc/stats`;
    axios.get(link).then((res) => {
      setStats(res.data);
      setIsLoading(false);
    });
  }, []);
  const { activeContent, currentUsers, totalPosts } = stats;

  return (
    !isLoading && (
      <Container>
        <SectionWrapper title="Stats">
          <Row className="text-center">
            <Col>
              {'Total Posts: '}
              {numberWithCommas(totalPosts)}
            </Col>
            <Col>
              {'Current Users: '}
              {numberWithCommas(currentUsers)}
            </Col>
            <Col>
              {'Active Content: '}
              {activeContent}
            </Col>
          </Row>
        </SectionWrapper>
      </Container>
    )
  );
}

import React from 'react';
import { Container } from 'reactstrap';

import HomeCard from '../common/SectionWrapper';

import { title, p1, p2 } from '../../fixtures/whatIs.json';

export default function WhatIs() {
  return (
    <Container>
      <HomeCard title={title}>
        <p>{p1}</p>
        <p>{p2}</p>
      </HomeCard>
    </Container>
  );
}

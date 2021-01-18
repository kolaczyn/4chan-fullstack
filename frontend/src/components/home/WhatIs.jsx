import React from 'react';
import { Container } from 'reactstrap';

import CloseableSectionWrapper from '../common/CloseableSectionWrapper';

import { title, p1, p2 } from '../../fixtures/whatIs.json';

export default function WhatIs() {
  return (
    <Container>
      <CloseableSectionWrapper title={title}>
        <p>{p1}</p>
        <p>{p2}</p>
      </CloseableSectionWrapper>
    </Container>
  );
}

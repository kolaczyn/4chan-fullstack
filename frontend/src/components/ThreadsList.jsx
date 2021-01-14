import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import threads from '../fixtures/threads.json'
import ThreadCard from './ThreadCard'


export default function ThreadsList() {
  return (
    <Container fluid={true}>
      <Row>
        {threads.map(thread => <Col key={`${thread.board}-${thread.id}`} xl="2" md="3" sm="4" xs="6"><ThreadCard {...thread} /></Col>)}
      </Row>
    </Container>
  )
}

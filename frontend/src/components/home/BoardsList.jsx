import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

import boards from '../../fixtures/boards.json';
import slugToName from '../../const/slugToName.json';
import HomeCard from './HomeCard';

export default function BoardsList() {
  return (
    <Container>
      <HomeCard title="Boards">
        <Row>
          {boards.map((boardGroup) => (
            <Col sm="4" xs="12" lg="2" key={boardGroup.category}>
              <h6>{boardGroup.category}</h6>
              {boardGroup.list.map((board) => <Link key={board} style={{ display: 'block' }} to={`${board}/`}>{slugToName[board]}</Link>)}
            </Col>
          ))}
        </Row>
      </HomeCard>
    </Container>
  );
}

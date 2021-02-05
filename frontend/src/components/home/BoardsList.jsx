import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

import boards from '../../static/fixtures/boards.json';
import slugToName from '../../static/const/slugToName';
import SectionWrapper from '../common/SectionWrapper';

// make sure that the user is on top of the site after selecting a board
const scrollToTheTop = () => {
  window.scrollTo(0, 0);
};

const to = (board) => ({
  pathname: `${board}/`,
  state: board,
});

export default function BoardsList() {
  return (
    <Container>
      <SectionWrapper title="Boards">
        <Row>
          {boards.map((boardGroup) => (
            <Col sm="4" xs="12" lg="2" key={boardGroup.category}>
              <h6>{boardGroup.category}</h6>
              {boardGroup.list.map((board) => (
                <Link
                  onClick={scrollToTheTop}
                  key={board}
                  style={{ display: 'block' }}
                  to={to(board)}
                >
                  {slugToName[board]}
                </Link>
              ))}
            </Col>
          ))}
        </Row>
      </SectionWrapper>
    </Container>
  );
}

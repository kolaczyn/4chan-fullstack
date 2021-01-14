import React from "react";
import { Col, Container, Row } from "reactstrap";
import styled from "styled-components/macro";
import {Link} from 'react-router-dom'

import HomeCard from "../components/HomeCard";
import PopularThread from '../components/PopularThread'

import whatIs from "../fixtures/whatIs.json";
import boards from '../fixtures/boards.json';
import popularThreads from '../fixtures/popularThreads.json';
import { totalPosts, currentUsers, activeContent } from '../fixtures/stats.json'

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Body = styled.main`
  background-color: #eef2ff;
`;

export default function Home() {
  return (
    <Body className="min-vh-100 py-5">
      <Container>
        <HomeCard title={whatIs.title}>
          <p>{whatIs.p1}</p>
          <p>{whatIs.p2}</p>
        </HomeCard>

        <HomeCard title="Boards">
          <Row>
            {boards.map((boardGroup, idx) =>
              <Col key={idx}>
                <h6>{boardGroup.category}</h6>
                {boardGroup.data.map((board) => <Link key={board.slug} style={{ display: 'block' }} to={board.slug}>{board.name}</Link>)}
              </Col>
            )}
          </Row>
        </HomeCard>

        <HomeCard title="Popular Threads">
          <Row>
            {popularThreads.map((thread, idx) =>
              <Col key={idx} xs="3"><PopularThread {...thread} /></Col>
            )}

          </Row>
        </HomeCard>

        <HomeCard title="Stats">
          <Row className="text-center">
            <Col>Total Posts: {numberWithCommas(totalPosts)}</Col>
            <Col>Current Users: {numberWithCommas(currentUsers)}</Col>
            <Col>Active Content: {activeContent}</Col>
          </Row>
        </HomeCard>

        <HomeCard title="FAQ">
          <Link to="/faq">FAQ</Link>
        </HomeCard>
      </Container>
    </Body>
  );
}

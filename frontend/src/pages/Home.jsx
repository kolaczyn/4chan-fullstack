import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import HomeCard from "../components/HomeCard";
import PopularThread from '../components/PopularThread'
import slugToName from '../const/slugToName.json'

import whatIs from "../fixtures/whatIs.json";
import boards from '../fixtures/boards.json';
import threads from '../fixtures/threads.json';
import { totalPosts, currentUsers, activeContent } from '../fixtures/stats.json'

const popularThreads = threads.slice(0, 8);

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>4chan</title>
      </Helmet>

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
                {boardGroup.list.map((board) => <Link key={board} style={{ display: 'block' }} to={`${board}/`}>{slugToName[board]}</Link>)}
              </Col>
            )}
          </Row>
        </HomeCard>

        <HomeCard title="Popular Threads">
          <Row>
            {popularThreads.map((thread, idx) =>
              <Col lg="3" md="6" xs="12" key={idx}><PopularThread {...thread} /></Col>
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
    </>

  );
}

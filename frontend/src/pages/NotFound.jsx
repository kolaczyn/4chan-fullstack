import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Jumbotron } from 'reactstrap';

export default function NotFound() {
  return (
    <Jumbotron>
      <Container>

        <h1>Page not found</h1>
        <p className="lead">It&apos;s probably because the you typed something wrong or you have a dead link</p>
        <Link to="/">
          <Button color="primary">Go to home page</Button>
        </Link>
      </Container>
    </Jumbotron>
  );
}

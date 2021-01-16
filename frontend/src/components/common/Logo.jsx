import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import logoImg from '../../static/logo-transparent.png';

// I have no idea why the logo changes position when the content of a webpage doesn't fill 100vh

export default function Header() {
  return (
    <header>
      <Container>
        <Link to="/">
          <img src={logoImg} alt="4chan logo" className="mx-auto d-block" />
        </Link>
      </Container>
    </header>
  );
}

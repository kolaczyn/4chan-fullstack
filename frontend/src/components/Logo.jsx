import React from 'react'
import { Link } from 'react-router-dom'

// I have no idea why the logo changes position when the content of a webpage doesn't fill 100vh

export default function Header() {
  const logo = 'img/misc/logo-transparent.png';
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="4chan logo" className="mx-auto d-block" />
      </Link>
    </header>
  )
}

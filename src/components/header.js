import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <h1>Piotr Trustori</h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/blog'>Blog</Link>
        </li>
        <li>
          <Link to='/about'>About me</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
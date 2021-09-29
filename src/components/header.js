import React from "react"

import { Link } from "gatsby"

import * as headerStyles from './header.module.scss'

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to='/'>Piotr Trustori</Link>
      </h1>
      <ul>
        <li>
          <Link className={headerStyles.link} to='/'>Home</Link>
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
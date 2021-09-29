import React from "react"

import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutMe = () => {
  return (
    <Layout>
      <h1>About me</h1>
      <p>This section is about me</p>
      <p>If you found it interesting feel free to ask me any questions. My contact details are <Link to='/contact'>here.</Link></p>
    </Layout>
  )
}

export default AboutMe
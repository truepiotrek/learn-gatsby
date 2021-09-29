import React from "react";

import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello,</h1>
      <h3>whatever, do what you like</h3>
      <p>You REALLY need an intern? <Link to='/contact'>I'm all ears!</Link></p>
    </Layout>
  )
}

export default IndexPage
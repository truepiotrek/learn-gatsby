import React from "react"

import Layout from "../components/layout"

import { graphql, Link, useStaticQuery } from "gatsby"

import * as blogStyles from './blog.module.scss'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Blog</h1>
        <ol className={blogStyles.posts}>
          {data.allMarkdownRemark.edges.map((edge) => {
            return (
              <li key={edge.node.fields.slug} className={blogStyles.post}>
                <Link to={`/blog/${edge.node.fields.slug}`}>
                  <h2>{edge.node.frontmatter.title}</h2>
                  <p>{edge.node.frontmatter.date.slice(0, 10)}</p>
                </Link>
              </li>
              )
          })}
        </ol>
    </Layout>
  )
}

export default BlogPage
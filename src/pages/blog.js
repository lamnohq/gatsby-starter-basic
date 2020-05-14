import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const posts = data.allMdx.nodes

  return (
    <Layout>
      <h1>Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.parent.name}>
            <Link to={`/${post.parent.sourceInstanceName}/${post.parent.name}`}>
              {post.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const pageQuery = graphql`
  query blogIndex {
    allMdx {
      nodes {
        frontmatter {
          title
        }
        parent {
          ... on File {
            name
            sourceInstanceName
          }
        }
      }
    }
  }
`

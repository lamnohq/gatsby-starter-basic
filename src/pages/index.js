import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1>Home</h1>
    <p>Welcome to Lamno's site</p>

    <Image fluid={data.file.childImageSharp.fluid} />
  </Layout>
)

export const pageQuery = graphql`
  query randomImage {
    file(absolutePath: { regex: "/random-unsplash/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

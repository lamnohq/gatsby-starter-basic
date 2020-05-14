import React from "react"
import Layout from "../components/layout"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import Image from "gatsby-image"

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 300px;
  grid-gap: 10px;
  max-width: 100%;
`
export default ({ data }) => {
  const photos = data.allInstaNode.nodes

  return (
    <Layout>
      <h1>Gallery</h1>
      <Gallery>
        {photos.map(photo => (
          <Image key={photo.id} fluid={photo.localFile.childImageSharp.fluid} />
        ))}
      </Gallery>
    </Layout>
  )
}

export const pageQuery = graphql`
  query instaImages {
    allInstaNode {
      nodes {
        id
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

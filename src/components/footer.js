import React from "react"
import styled from "@emotion/styled"

const Footer = styled.footer`
  text-align: center;
  font-size: 0.75rem;
  padding-top: 20px;
`

export default () => (
  <Footer>
    Crafted with &hearts; in Sydney using{" "}
    <a href="https://www.gatsbyjs.org/"> Gatsby</a>
  </Footer>
)

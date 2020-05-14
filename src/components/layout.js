import React from "react"
import styled from "@emotion/styled"
import Header from "./header"
import Footer from "./footer"

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const Main = styled.main`
  flex-grow: 1;
`

export default ({ children }) => (
  <Container>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Container>
)

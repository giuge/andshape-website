import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Container = styled.div`
  max-width: 1030px;
  margin: 9.333333333333334rem auto 0 auto;
  position: relative;
  text-align: center;
`

const Title = styled.h1`
  font-family: "Nunito Sans", sans-serif;
  color: #1ececb;
  font-weight: bold;
  font-size: 13vw;
  margin-bottom: 2.6666666666666665rem;

  @media (min-width: 580px) {
    font-size: 3.3333333333333335rem;
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <Title>Not Found</Title>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </Layout>
)

export default NotFoundPage

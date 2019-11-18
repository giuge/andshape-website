import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

const Container = styled.footer`
  max-width: 1030px;
  margin: 9.333333333333334rem auto 0 auto;
  display: flex;
  flex-direction: column;
  padding: 2.6666666666666665rem 0 1.6666666666666667rem 0;
`

const Logo = styled.img`
  opacity: 0.7;
  margin-bottom: 1rem;
`

const Text = styled.p`
  opacity: 0.4;
  color: #fff;
  text-align: center;
  font-size: 0.6666666666666666rem;
  line-height: 140%;
`

const LogoQuery = graphql`
  {
    file(relativePath: { eq: "logo.svg" }) {
      relativePath
      name
      publicURL
    }
  }
`

const Footer = () => (
  <StaticQuery
    query={LogoQuery}
    render={data => (
      <Container>
        <Logo src={data.file.publicURL} alt="Andshape logo" />
        <Text>
          © 2019 Andshape Srl · Via Torre Pellice 17, 10156 Torino – Italy · VAT
          IT11874050013
        </Text>
      </Container>
    )}
  />
)

export default Footer

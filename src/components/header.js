import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

const Container = styled.header`
  max-width: 1030px;
  margin: 0 auto;
  padding: 40px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Contact = styled.a`
  color: #fff;
  font-size: 0.8333333333333334rem;
  transition all .2s;
  
  :hover {
  color: #1ececb;
  }
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

const Header = ({ siteTitle }) => (
  <StaticQuery
    query={LogoQuery}
    render={data => (
      <Container>
        <Link to="/">
          <img src={data.file.publicURL} alt="Andshape logo" />
        </Link>
        <Contact href="mailto:hello@andshape.com">Contact</Contact>
      </Container>
    )}
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

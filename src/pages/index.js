import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/contact"

const Container = styled.div`
  max-width: 1030px;
  margin: 9.333333333333334rem auto 0 auto;
  position: relative;
`

const BackgroundPattern = styled.img`
  position: absolute;
  z-index: -10;
  right: -25%;
  display: none;

  @media (min-width: 1024px) {
    display: inline;
    font-size: 3.3333333333333335rem;
  }
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

const SmallTitle = styled.h2`
  font-family: "Nunito Sans", sans-serif;
  color: #1ececb;
  font-weight: bold;
  font-size: 16vw;
  margin-bottom: 2.6666666666666665rem;

  @media (min-width: 580px) {
    font-size: 3rem;
  }
`

const SubTitle = styled.h3`
  font-family: "Nunito Sans", sans-serif;
  color: #25ce7b;
  font-weight: 800;
  text-transform: uppercase;
  line-height: 140%;
`

const Text = styled.p`
  line-height: 140%;
  color: #e4ebfc;
`

const Technologies = styled.div`
  margin-top: 3rem;
  opacity: 0.6;

  display: grid;
  align-items: center;
  justify-items: center;
  grid-column-gap: 1rem;
  grid-row-gap: 4rem;

  @media (min-width: 500px) {
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    grid-row-gap: 2rem;
  }

  @media (min-width: 1030px) {
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto auto auto auto;
    grid-column-gap: 3rem;
    grid-row-gap: 0;
  }

  img {
    width: 80%;
    @media (min-width: 1030px) {
      width: 100%;
      margin-bottom: 0;
    }
  }
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.6666666666666667rem;

  @media (min-width: 1030px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

const Card = styled.div`
  border-radius: 10px;
  padding: 0.6666666666666666rem;
  margin-bottom: 1rem;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.25);
  background: ${props => `url(${props.bg}) no-repeat 95% 0.6666666666666666rem`}
    #414e59;

  @media (min-width: 1030px) {
    max-width: 32%;
    margin-bottom: 0;
  }

  img {
    margin-bottom: 1rem;
  }

  h3 {
    font-family: "Nunito Sans", sans-serif;
    font-weight: 800;
    font-size: 0.8333333333333334rem;
    margin-bottom: 0.6666666666666666rem;
    color: ${props => props.accent || "#E4EBFC"};
  }

  p {
    font-size: 0.6666666666666666rem;
    opacity: 0.8;
  }
`

const PortfolioImages = styled.div`

  img {
  width: 100%;
  }

  @media (min-width: 1030px) {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    align-items: center;
    justify-items: center;

    img {
      transition all .2s;

      &.big {
        width: 100%;
      }

      &.big:nth-child(odd) {
        margin-left: -2rem;
      }

      &.big:nth-child(even) {
        margin-right: -2rem;
      }

      &.small {
        width: 75%;
      }

      :hover {
        transform: scale(1.1);
      }
    }
  }
`

const IndexPage = () => {
  const allImages = useStaticQuery(graphql`
    {
      images: allFile(filter: { extension: { eq: "svg" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
      portfolio: allFile(filter: { extension: { eq: "png" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)

  const assets = allImages.images.edges
    .filter(x => x.node.name !== "logo")
    .reduce((acc, x) => {
      acc[x.node.name] = {
        publicURL: x.node.publicURL,
      }
      return acc
    }, {})

  const types = "big,small,small,big,"
    .repeat(allImages.portfolio.edges.length)
    .split(",")
    .filter(x => x !== "")

  const portfolio = allImages.portfolio.edges
    .filter(x => x.node.name !== "favicon")
    .reduce((acc, x, idx) => {
      acc.push({
        name: x.node.name,
        publicURL: x.node.publicURL,
        type: types[idx],
      })
      return acc
    }, [])

  return (
    <Layout>
      <SEO />
      <Container style={{ marginTop: "5.166666666666667rem" }}>
        <Title>A creative agency for entrepreneurs</Title>
        <Text style={{ maxWidth: 680 }}>
          Helping you connect with your customers by mixing art and science to
          create awesome digital experiences.
        </Text>
        <BackgroundPattern
          src={assets.ellipses.publicURL}
          alt="Dots Background Image"
          style={{ top: "67%" }}
        />
      </Container>
      <Container style={{ marginTop: "6rem" }}>
        <SubTitle>Things we do well</SubTitle>
        <CardContainer>
          <Card accent="#FF8570" bg={assets.polygons.publicURL}>
            <img src={assets["strategy-icon"].publicURL} alt="Strategy Icon" />
            <h3>Strategy</h3>
            <Text>
              We align client expectations with your business goals using a data
              driven approach.
            </Text>
          </Card>
          <Card accent="#FEA81B" bg={assets.polygons.publicURL}>
            <img src={assets["design-icon"].publicURL} alt="Design Icon" />
            <h3>Design</h3>
            <Text>
              We design web and mobile applications, websites and brand
              collaterals.
            </Text>
          </Card>
          <Card accent="#1ECECB" bg={assets.polygons.publicURL}>
            <img
              src={assets["development-icon"].publicURL}
              alt="Development Icon"
            />
            <h3>Development</h3>
            <Text>
              We develop fast, secure and scalable websites using innovative
              techonlogies.
            </Text>
          </Card>
        </CardContainer>
      </Container>
      <Container>
        <SmallTitle>Make it simple but significant</SmallTitle>
        <PortfolioImages>
          {portfolio.map(entry => (
            <img
              key={entry.name}
              src={entry.publicURL}
              alt={entry.name}
              className={entry.type}
            />
          ))}
        </PortfolioImages>
      </Container>
      <Container>
        <SmallTitle>Safe, reliable, perfomant</SmallTitle>
        <Text style={{ maxWidth: 680 }}>
          We use the JAMStack a modern architecture that let us create websites
          that are fast, secure, rank better on search engines and are a lot
          cheaper to host.
        </Text>
        <BackgroundPattern
          src={assets.waves.publicURL}
          alt="Dots Background Image"
          style={{ top: "24%" }}
        />
        <Container style={{ marginTop: "4rem" }}>
          <SubTitle>Technologies we use</SubTitle>
          <Technologies>
            <img src={assets.sanity.publicURL} alt="Sanity" />
            <img src={assets.gatsby.publicURL} alt="Gatsby" />
            <img src={assets.react.publicURL} alt="React" />
            <img src={assets.netlify.publicURL} alt="Netlify" />
          </Technologies>
        </Container>
      </Container>
      <Contact />
    </Layout>
  )
}

export default IndexPage

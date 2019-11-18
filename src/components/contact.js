import React from 'react'
import styled from 'styled-components'

const Background = styled.div`
  background: #2e393f;
  transform: ${props => `rotate(${props.deg}deg)`};
  width: 100%;
  height: 160%;
  position: absolute;
  top: -30%;
  right: 0;
  z-index: -10;
  border-radius: 20px;
  opacity: 0;

  @media (min-width: 800px) {
    opacity: 0.3;
  }
`

const Container = styled.div`
  max-width: 1030px;
  margin: 7rem auto 7rem auto;
  position: relative;
  text-align: left;

  @media (min-width: 800px) {
    text-align: center;
    margin: 14rem auto 7rem auto;
  }
`

const Title = styled.h1`
  font-family: 'Nunito Sans', sans-serif;
  color: #fff;
  font-weight: bold;
  font-size: 13vw;
  margin-bottom: 0;

  @media (min-width: 800px) {
    font-size: 2.5833333333333335rem;
  }
`

const Text = styled.p`
  line-height: 140%;
  color: #e4ebfc;
`

const Button = styled.a`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 900;
  text-align: center;
  background: #1ececb;
  color: #1c252c;
  text-transform: uppercase;
  padding: 1rem 1.3333333333333333rem;
  border-radius: 6px;
  text-decoration: none;
  display: block;
  margin: 2.6666666666666665rem auto 0 auto;
  transition all .2s;

  :hover {
  transform: scale(1.1);
  }
  
  @media (min-width: 800px) {
    display: inline-block;
  }
`
const Contact = () => (
  <Container>
    <Title>Let's build together</Title>
    <Text
      style={{
        maxWidth: 680,
        opacity: 0.8,
        margin: '1rem auto 0 auto',
        display: 'block',
      }}
    >
      We’re very approachable, just tell us more about your project and we’ll
      figure things out.
    </Text>
    <Background deg={4} />
    <Background deg={-4} />
    <Button href="mailto:hello@andshape.com">Get in touch</Button>
  </Container>
)

export default Contact

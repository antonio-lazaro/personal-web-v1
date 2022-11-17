import * as React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding-top: 39px;
  padding-bottom: 39px;
`

const StyledText = styled.p`
  font-size: 17px;
  font-weight: 400;
  font-family: Avenir;
  color: #9a9a9a;

  a {
    font-weight: 500;
    color: var(--dark-grey);
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #4c4c4c;
    }
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <StyledText>
        Explore it on{' '}
        <a href="https://github.com/antonio-lazaro/personal-web-v1">GitHub</a>
      </StyledText>
    </StyledFooter>
  )
}

export default Footer

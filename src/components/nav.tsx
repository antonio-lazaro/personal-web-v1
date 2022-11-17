import * as React from 'react'
import styled from 'styled-components'
import DownloadCVButton from './download-button'
import Logo from './icons/Logo'
import SocialLinks from './social'

const StyledNavBarContainer = styled.div`
  padding-left: 39px;
  padding-right: 39px;
  width: 100%;
  height: 87px;
`

const StyledFlexDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const StyledLeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  padding-left: 10px;
`

const StyledFillDiv = styled.div`
  flex: 1;
  height: 100%;
  padding-left: 10px;
`

const StyledRightContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 38px;
`

const NavBar = () => {
  return (
    <StyledNavBarContainer>
      <StyledFlexDiv>
        <StyledLeftContainer>
          <a href="/">
            <Logo />
          </a>
        </StyledLeftContainer>

        <StyledFillDiv />

        <StyledRightContainer>
          <SocialLinks />
          <DownloadCVButton />
        </StyledRightContainer>
      </StyledFlexDiv>
    </StyledNavBarContainer>
  )
}

export default NavBar

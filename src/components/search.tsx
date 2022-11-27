import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Results from './results'
import SearchInput from './search-input'

const StyledSearch = styled.div`
  flex: 1;
  margin: 0 auto;
  width: 1015px;
  max-width: 1240px;
  padding: 0 22px;
  padding-top: 50px;

  @media (${({ theme }) => theme.bp.desktopS}) {
    margin: 0;
    width: auto;
    padding: 0 35px;
    padding-top: 17px;
  }

  @media (${({ theme }) => theme.bp.desktopS}) and (orientation: landscape) {
    padding-top: 20px;
  }

  @media (${({ theme }) => theme.bp.tabletS}) {
    padding: 0 20px;
    padding-top: 30px;
  }
`

const Intro = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 10.5px;

  @media (${({ theme }) => theme.bp.tabletS}) {
    gap: 5px;
    flex-direction: column;
  }
`

const Greeting = styled.p`
  font-size: 26px;
  font-weight: 400;

  span {
    font-weight: 600;
  }

  @media (${({ theme }) => theme.bp.desktopS}) {
    font-size: 19px;
  }

  @media (${({ theme }) => theme.bp.tabletS}) {
    font-size: 19px;
  }
`

const Profession = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondaryText};
  letter-spacing: 0.03px;

  @media (${({ theme }) => theme.bp.tabletS}) {
    font-size: 12px;
  }
`

const Search = () => {
  const [searchText, setSearchText] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  return (
    <StyledSearch>
      <Intro>
        <Greeting>
          Hello World, I&apos;m <span>Antonio Lázaro</span>
        </Greeting>
        <Profession>SOFTWARE / ML ENGINEER</Profession>
      </Intro>

      <SearchInput
        onChange={(text) => setSearchText(text)}
        onStartTyping={() => setIsTyping(true)}
        onEndTyping={() => setIsTyping(false)}
      />

      <Results searchText={searchText} isTyping={isTyping} />
    </StyledSearch>
  )
}

export default Search

import * as React from 'react'
import styled from 'styled-components'
import Results from './results'
import SearchInput from './search-input'

const StyledSearch = styled.div`
  flex: 1;
  margin: 0 auto;
  width: 1015px;
  max-width: 1240px;
  padding-left: 22px;
  padding-right: 22px;
`

const Intro = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 10.5px;
  margin-top: 70px;
`

const Greeting = styled.p`
  font-size: 26px;
  font-weight: 400;

  span {
    font-weight: 600;
  }
`

const Profession = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #c3c3c3;
  letter-spacing: 0.03px;
`

const Search = () => {
  return (
    <StyledSearch>
      <Intro>
        <Greeting>
          Hello World, I&apos;m <span>Antonio Lázaro</span>
        </Greeting>
        <Profession>SOFTWARE / ML ENGINEER</Profession>
      </Intro>

      <SearchInput />

      <Results />
    </StyledSearch>
  )
}

export default Search

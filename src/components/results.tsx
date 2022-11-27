import * as React from 'react'
import styled from 'styled-components'
import LoadingIcon from './icons/LoadingIcon'

const StyledResults = styled.div`
  width: 100%;
  margin-top: 46px;
  padding-bottom: 30px;

  @media (${({ theme }) => theme.bp.tabletS}) {
    margin-top: 36px;
  }
`

const Answer = styled.p`
  width: 100%;
  font-size: 22px;
  line-height: 33px;

  @media (${({ theme }) => theme.bp.desktopS}) {
    font-size: 18px;
  }

  @media (${({ theme }) => theme.bp.tabletS}) {
    font-size: 18px;
    line-height: 33px;
  }
`

interface Props {
  isTyping: boolean
  searchText: string
}

const Results = ({ isTyping, searchText }: Props) => {
  return (
    <StyledResults>
      {searchText === '' ? (
        <Answer>
          Ask me any thing. Well... not ANY THING, but you got me.
        </Answer>
      ) : isTyping ? (
        <LoadingIcon />
      ) : (
        <Answer>Answer</Answer>
      )}
    </StyledResults>
  )
}

export default Results

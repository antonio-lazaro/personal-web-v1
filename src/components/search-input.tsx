import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const StyledSearchInput = styled.div`
  width: 100%;
  margin-top: 17px;

  @media (${({ theme }) => theme.bp.tabletS}) {
    margin-top: 15px;
  }
`
const TextArea = styled.textarea`
  width: 100%;
  outline: none;
  border: none;
  font-family: var(--font-sans);
  font-size: 70px;
  font-weight: 700;
  resize: none;
  overflow-y: hidden;

  &::placeholder {
    color: #d1d1d1;
  }

  @media (${({ theme }) => theme.bp.desktopS}) {
    font-size: 41px;
  }

  @media (${({ theme }) => theme.bp.desktopS}) and (orientation: landscape) {
    font-size: 50px;
  }

  @media (${({ theme }) => theme.bp.tabletS}) {
    font-size: 41px;
  }
`

const SuggestionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 11px;
  margin-top: 26px;
  flex-wrap: wrap;
`

const Suggestion = styled.button`
  height: 30px;
  border-radius: 15px;
  padding-left: 14px;
  padding-right: 14px;
  border: none;
  color: #3e3e3e;
  background-color: #ededed;
  font-size: 12px;
  font-weight: 550;
  cursor: pointer;

  &.selected {
    color: var(--white);
    background-color: #4694ff;
  }
`

const SUGGESTIONS = [
  'What did you study?',
  'What do you work on?',
  'What the hell are you doing?',
]

const SearchInput = () => {
  const [searchText, setSearchText] = useState('')
  const textAreaRef = useRef(null)

  const resizeTextArea = () => {
    if (textAreaRef.current) {
      ;(textAreaRef.current as HTMLTextAreaElement).style.height = 'auto'
      ;(textAreaRef.current as HTMLTextAreaElement).style.height =
        (textAreaRef.current as HTMLTextAreaElement).scrollHeight + 'px'
    }
  }

  useEffect(resizeTextArea, [searchText])

  return (
    <StyledSearchInput>
      <TextArea
        ref={textAreaRef}
        placeholder="Write what you want to know..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        rows={1}
      />

      <SuggestionsContainer>
        {SUGGESTIONS.map((text) => (
          <Suggestion
            key={text}
            onClick={() => setSearchText(text === searchText ? '' : text)}
            className={text === searchText ? 'selected' : ''}
          >
            {text}
          </Suggestion>
        ))}
      </SuggestionsContainer>
    </StyledSearchInput>
  )
}

export default SearchInput

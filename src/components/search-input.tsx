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
  background-color: transparent;
  padding: 0;
  color: ${({ theme }) => theme.colors.primaryText};

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
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
  color: ${({ theme }) => theme.colors.suggestionText};
  background-color: ${({ theme }) => theme.colors.suggestionBg};
  font-size: 12px;
  font-weight: 550;
  cursor: pointer;

  &.selected {
    color: #fff;
    background-color: #4694ff;
  }
`

const SUGGESTIONS = [
  'What did you study?',
  'What do you work on?',
  'What the hell are you doing?',
]

interface Props {
  onChange?: (text: string) => void
  onStartTyping?: () => void
  onEndTyping?: () => void
}

const SearchInput = ({ onChange, onStartTyping, onEndTyping }: Props) => {
  const [searchText, setSearchText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const textAreaRef = useRef(null)

  const resizeTextArea = () => {
    if (textAreaRef.current) {
      ;(textAreaRef.current as HTMLTextAreaElement).style.height = 'auto'
      ;(textAreaRef.current as HTMLTextAreaElement).style.height =
        (textAreaRef.current as HTMLTextAreaElement).scrollHeight + 'px'
    }
  }

  useEffect(resizeTextArea, [searchText])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(false)
      if (onEndTyping) onEndTyping()
    }, 500)
    return () => clearTimeout(timer)
  }, [searchText])

  return (
    <StyledSearchInput>
      <TextArea
        ref={textAreaRef}
        placeholder="Write what you want to know..."
        value={searchText}
        onChange={(e) => {
          if (!isTyping) {
            setIsTyping(true)
            if (onStartTyping) onStartTyping()
          }
          setSearchText(e.target.value)
          if (onChange) onChange(e.target.value)
        }}
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

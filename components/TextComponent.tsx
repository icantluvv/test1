import React from "react"
import styled from "styled-components"

interface BigTitleProps {
  text: string
  type: string
}

const breakpoints = {
  mobile: "768px",
  tablet: "1024px"
}

const ReadableLight = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.darkGray};

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.5rem;
  }
  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    font-size: 2rem;
  }
`

const ButtonText = styled.p`
  font-size: 1rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.7rem;
  }
  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    font-size: 1.2rem;
  }
`

const TextComponent = ({ text, type }: BigTitleProps) => {
  switch (type) {
    case "p-light":
      return <ReadableLight>{text}</ReadableLight>

    case "button":
      return <ButtonText>{text}</ButtonText>
    default:
      return null
  }
}

export default TextComponent

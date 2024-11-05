import React from "react"
import styled from "styled-components"
import TextComponent from "./TextComponent"

const FooterComponent = styled.footer`
  height: 20vh;
  width: 100%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${({ theme }) => theme.colors.darkGray};
`

const Footer = () => {
  return (
    <FooterComponent>
      <TextComponent text={"Some Company 2024"} type={"h2"}></TextComponent>
    </FooterComponent>
  )
}

export default Footer

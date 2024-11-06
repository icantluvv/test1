import React from "react"
import styled from "styled-components"

const FooterComponent = styled.footer`
  height: 7vh;
  width: 100%;
  position: fixed;
  bottom: 0;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${({ theme }) => theme.colors.darkGray};
`

const Footer = () => {
  return (
    <FooterComponent>
      <h2>Some Company 2024</h2>
    </FooterComponent>
  )
}

export default Footer

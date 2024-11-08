import React from "react"
import styled from "styled-components"

const FooterComponent = styled.footer`
  width: 100%;
  height: 8vh;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${({ theme }) => theme.colors.darkGray};
`

const Footer = () => {
  return (
    <FooterComponent>
      <h3>Some Company 2024</h3>
    </FooterComponent>
  )
}

export default Footer

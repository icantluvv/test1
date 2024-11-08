import React from "react"
import styled from "styled-components"
import Button from "./Button"
import Link from "next/link"

const HeaderContainer = styled.header`
  position: fixed;
  background: white;
  box-sizing: border-box;
  width: 100%;
  height: 8vh;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkGray};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 2%;
  padding-left: 2%;
`

const Header = () => (
  <HeaderContainer>
    <Link href={"/"}>
      <h3>Some Company</h3>
    </Link>
    <Button type="contactUs" text="contact us"></Button>
  </HeaderContainer>
)

export default Header

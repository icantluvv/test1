import React from "react"
import styled from "styled-components"
import Button from "./Button"
import TextComponent from "./TextComponent"
import Link from "next/link"

const HeaderContainer = styled.header`
  position: fixed;
  background: white;
  box-sizing: border-box;
  width: 100%;
  height: 10vh;
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
      <TextComponent text={"Some Company"} type={"h2"}></TextComponent>
    </Link>
    <Button type="contactUs" text="contact us"></Button>
  </HeaderContainer>
)

export default Header

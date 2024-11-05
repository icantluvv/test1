import React from "react"
import styled from "styled-components"
import TextComponent from "./TextComponent"

const breakpoints = {
  mobile: "768px",
  tablet: "1024px"
}

const CardComponent = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  max-width: 31%;
  padding-left: 5%;
  padding-right: 5%;

  @media (max-width: ${breakpoints.tablet}) {
    min-width: 95%;
    align-items: center;
    text-align: center;
  }
`

const Card = () => {
  return (
    <CardComponent>
      <TextComponent text={"Title"} type={"h2"}></TextComponent>
      <TextComponent
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum"
        }
        type={"p-light"}
      ></TextComponent>
    </CardComponent>
  )
}

export default Card

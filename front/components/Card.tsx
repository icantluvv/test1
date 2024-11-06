import React from "react"
import styled from "styled-components"

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
const CardText = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
`

const Card = () => {
  return (
    <CardComponent>
      <h2>Title</h2>
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis,
        leo et condimentum
      </CardText>
    </CardComponent>
  )
}

export default Card

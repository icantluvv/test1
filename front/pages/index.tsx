import Footer from "@/components/Footer"
import Header from "@/components/Header"
import styled from "styled-components"
import TextComponent from "@/components/TextComponent"
import Card from "@/components/Card"
import Button from "@/components/Button"

const breakpoints = {
  mobile: "768px",
  tablet: "1024px"
}

const PageContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
`
const MainContainer = styled.main`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding-top: 10vh;
  gap: 3vh 0vh;
  width: 100%;
`

const BannerSection = styled.section`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  justify-content: space-between;
  padding-right: 5vw;
  padding-left: 5vw;
  padding-top: 5vh;
  padding-bottom: 5vh;
  min-height: 30vh;
  background: ${({ theme }) => theme.colors.lightGray};

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
`

const BannerTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`

const VideoContainer = styled.div`
  width: 45%;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`

const BannerVideo = styled.iframe`
  width: 100%;
  height: 100%;
  min-height: 40vh;
  border: none; /* Убираем рамку */

  @media (max-width: ${breakpoints.mobile}) {
    min-height: 25vh;
  }

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    min-height: 32vh;
  }
`

const CardSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3vh 0vh;
  width: 100%;
  box-sizing: border-box;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    align-items: center;
    text-align: center;
    padding-left: 5%;
    padding-right: 5%;
  }
`

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10vh 0vh;
  margin-bottom: 3vh;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    gap: 3vh 0vh;
  }
`

const AdsSection = styled.section`
  background: ${({ theme }) => theme.colors.lightGray};
  min-height: 20vh;
  padding-top: 5vh;
  padding-bottom: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center
  width: 100%;


  @media (max-width: ${breakpoints.tablet}) {
  text-align:center;
    padding-left: 5%;
    padding-right: 5%;
  }
`

export default function Home() {
  return (
    <PageContainer>
      <MainContainer>
        <BannerSection>
          <BannerTextContainer>
            <TextComponent
              text={"Most important title on the page"}
              type="h1"
            ></TextComponent>

            <TextComponent
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt ante"
              }
              type="p"
            ></TextComponent>
          </BannerTextContainer>
          {/* Banner Text */}

          <VideoContainer>
            <BannerVideo
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></BannerVideo>
          </VideoContainer>
        </BannerSection>

        {/* Banner */}
        <CardSection>
          <TextComponent
            text={"Also very important title"}
            type={"h1"}
          ></TextComponent>
          {/* cards title */}

          <CardContainer>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </CardContainer>
          {/* cards */}

          <Button type="contactUs" text="contact us"></Button>
          {/* card button */}
        </CardSection>
        {/* Cards container*/}

        <AdsSection>
          <TextComponent
            text={"Less important title"}
            type={"h1"}
          ></TextComponent>
          <Button type="contactUs" text="contact us"></Button>
        </AdsSection>
        {/* ads container */}
      </MainContainer>
      {/* Content container */}
    </PageContainer>
  )
}

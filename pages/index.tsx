import styled from "styled-components"
import Card from "@/components/Card"
import Button from "@/components/Button"
import PageHead from "@/components/PageHead"

const breakpoints = {
  mobile: "768px",
  tablet: "1024px"
}

const PageContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding-top: 8vh;
  width: 100%;
`
const MainContainer = styled.main`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
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
    gap: 2vh 0vh;
  }
`

const BannerTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;

  @media (max-width: ${breakpoints.mobile}) {
    width: 80%;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 90%;
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
    gap: 10px 0vh;
    margin-bottom: 0vh;
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
    <>
      <PageHead
        title="Panteleev Test"
        description="This is main page"
        keywords="test task, next js, styled components"
      />
      <PageContainer>
        <MainContainer>
          <BannerSection>
            <BannerTextContainer>
              <h1>Most important title on the page</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                mattis, leo et condimentum ultricies, sem urna convallis metus,
                vel suscipit nibh lacus tincidunt ante
              </p>
            </BannerTextContainer>
            {/* Banner Text */}

            <VideoContainer>
              <BannerVideo
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Informative promotional video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></BannerVideo>
            </VideoContainer>
          </BannerSection>

          {/* Banner */}
          <CardSection>
            <h2>Also very important title</h2>
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
            <h2>Less important title</h2>
            <Button type="contactUs" text="contact us"></Button>
          </AdsSection>
          {/* ads container */}
        </MainContainer>
        {/* Content container */}
      </PageContainer>
    </>
  )
}

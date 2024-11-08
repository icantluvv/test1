import Footer from "@/components/Footer"
import Header from "@/components/Header"
import type { AppProps } from "next/app"
import { createGlobalStyle, ThemeProvider } from "styled-components"

const breakpoints = {
  mobile: "768px",
  tablet: "1024px"
}

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html { 
    font-size: 16px;
  }

  h1 {
    font-size: 3rem;

    @media (max-width: ${breakpoints.mobile}){
      font-size: 2rem;
    }

    @media (min-width: 768px) and (max-width: ${breakpoints.tablet}) {
      font-size: 5rem;
    }
  }

  p {
    font-size: 1rem;
    
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 1rem;
    }

    @media (min-width: 768px) and (max-width: ${breakpoints.tablet}) {
      font-size: 2rem;
    }

  }

  h2 {
    font-size: 2rem;
     
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 1.7rem;
    }

    @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
      font-size: 4rem;
    }

  }

  h3 {
    font-size: 1.5rem;
     
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 1.2rem;
    }

    @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
      font-size: 3rem;
    }

  }

  button{ 
     font-size: 1rem;
    
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 1.5rem;
    }

    @media (min-width: 768px) and (max-width: ${breakpoints.tablet}) {
      font-size: 1.8rem;
    }
  }

  a {
    color: black;
    text-decoration: none;

  }

  input, textarea {
    touch-action: manipulation; 
    font-size: 16px; 
  }
`

interface ThemeInterface {
  colors: {
    primary: string
    darkGray: string
    lightGray: string
  }
}

const theme: ThemeInterface = {
  colors: {
    primary: "#2C2C2C",
    darkGray: "#D9D9D9",
    lightGray: "#f5f5f5"
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header></Header>
        <Component {...pageProps} />
        <Footer></Footer>
      </ThemeProvider>
    </>
  )
}

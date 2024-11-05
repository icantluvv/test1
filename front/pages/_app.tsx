import Footer from "@/components/Footer"
import Header from "@/components/Header"
import type { AppProps } from "next/app"
import { createGlobalStyle, ThemeProvider } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html { 
    font-size: 16px;
  }

  a {
    color: black;
    text-decoration: none;

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

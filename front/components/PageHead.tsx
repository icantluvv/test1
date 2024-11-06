import React from "react"
import { Helmet } from "react-helmet"

const PageHead = () => {
  return (
    <Helmet>
      <title>test panteleev Sergey</title>
      <meta
        name="description"
        content="Тестовое задание выполненное Пантелеевым Сергеем"
      />
      <meta name="keywords" content="test, test, assignment, resume" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="test panteleev Sergey" />
      <meta
        property="og:description"
        content="Тестовое задание выполненное Пантелеевым Сергеем"
      />
      <meta
        property="og:image"
        content="https://www.w3schools.com/w3images/lights.jpg"
      />
      <meta property="og:url" content="https://github.com/icantluvv" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="test panteleev Sergey" />
      <meta
        name="twitter:description"
        content="Тестовое задание выполненное Пантелеевым Сергеем"
      />
      <meta
        name="twitter:image"
        content="https://www.w3schools.com/w3images/lights.jpg"
      />
      <link rel="icon" href="/path/to/favicon.ico" />
    </Helmet>
  )
}

export default PageHead

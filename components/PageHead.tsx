import React from "react"
import { Helmet } from "react-helmet"

const PageHead = ({
  title = "Default Title",
  description = "Default description for the site",
  keywords = "default, keywords",
}) => {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Standart meta tag for SEO */}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="https://avatars.yandex.net/get-music-content/9867886/f33d360b.a.28514782-1/m1000x1000"
      />
      <meta property="og:type" content="website" />

      {/* Open Graph meta tags for SEO */}


      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content="https://avatars.yandex.net/get-music-content/9867886/f33d360b.a.28514782-1/m1000x1000"
      />

      {/* TWITTER meta tags for SEO */}

      <link rel="icon" href="/path/to/favicon.ico" />

      {/* Some WebSite Image for browser bookmark and smth */}
    </Helmet>
  )
}

export default PageHead

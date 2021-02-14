import React from 'react'
import { default as DefaultHead } from 'next/head'

const Head = ({ title }: { title?: string }) => (
  <DefaultHead>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="title" content="Mainstreet — Shopping but social" />
    <meta name="description" content="Follow. Share. Shop. Mainstreet is a social shopping platform designed to bring your favourite brands to one place" />

    <title>{title || 'Mainstreet — Shopping but social'}</title>

    {/* TODO: fix favicon icons */}
    <link rel="shortcut icon" href="/logo.svg" />

  {/* <meta property="og:type" content="website">
  <meta property="og:url" content="https://metatags.io/">
  <meta property="og:title" content="Mainstreet — Shopping but social">
  <meta property="og:description" content="Follow. Share. Shop. Mainstreet is a social shopping platform designed to bring your favourite brands to one place">
  <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png">

  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://metatags.io/">
  <meta property="twitter:title" content="Mainstreet — Shopping but social">
  <meta property="twitter:description" content="Follow. Share. Shop. Mainstreet is a social shopping platform designed to bring your favourite brands to one place">
  <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"></meta> */}
  </DefaultHead>
)

export default Head

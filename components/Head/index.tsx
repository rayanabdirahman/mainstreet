import React from 'react'
import { default as DefaultHead } from 'next/head'

const Head: React.FC<{ title?: string }> = ({ title }) => (
  <DefaultHead>
    {/* Primary Meta Tags */}
    <title>{ title || 'Mainstreet | The online shopping mall' }</title>
    <meta name="title" content="Mainstreet | The online shopping mall" />
    <meta name="description" content="Shop the high street stores you love from one place." />
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link rel="shortcut icon" href="/favicon.svg" />
  </DefaultHead>
)

export default Head

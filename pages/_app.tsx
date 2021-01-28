import type { AppProps } from 'next/app'
import 'remixicon/fonts/remixicon.css'
import 'tailwindcss/tailwind.css'
import '../styles/index.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

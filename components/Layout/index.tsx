import React, { ReactNode } from 'react'
import Head from '../Head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title }: Props) => (
  <div>
    <Head title={title} />
    { children }
  </div>
)

export default Layout

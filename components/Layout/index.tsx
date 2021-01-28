import React, { ReactNode } from 'react'
import Head from '../Head'

type Props = {
  children?: ReactNode
  title?: string
}

export const Layout: React.FC = ({ children, title }: Props) => (
  <div>
    <Head title={title} />
    {children}
    <footer>
    </footer>
  </div>
)

export const PageContainer: React.FC = ({ children }: Props) => (
  <React.Fragment>
    {children}
  </React.Fragment>
)

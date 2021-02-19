import React, { ReactNode } from 'react'

export const PageTitle = ({ children }: { children?: ReactNode }) => (
  <h1 className="font-serif">{ children }</h1>
)


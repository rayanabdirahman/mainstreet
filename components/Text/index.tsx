import React, { ReactNode } from 'react'

export const Title = ({ children }: { children: ReactNode}) => (
  <h1 className="font-bold text-black text-2xl mb-2">{ children }</h1>
)

export const Text = ({ children }: { children: ReactNode}) => (
  <p className="font-normal text-gray-500 text-base">{ children }</p>
)

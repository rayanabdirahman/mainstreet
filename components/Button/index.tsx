import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode,
  disabled?: boolean,
  success?: boolean
}

const Button = ({ children, disabled, success }: Props) => (
  <button
    className={
      `${ disabled ? 'bg-gray-300' : (success ? 'bg-green-500' : 'bg-black') } 
      text-white p-4 w-full rounded-full`
    }
    disabled={disabled}>{ children }</button>
)

export default Button

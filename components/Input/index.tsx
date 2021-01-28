import React from 'react'

type Props = {
  icon?: string,
  placeholder: string,
  type?: string
}

const Input = ({ icon, placeholder, type }: Props) => (
  <label className="mb-12 flex items-center flex-row border-b border-gray-300" htmlFor="">
    { icon && <i className={`ri-${icon}-line ri-1x mr-3 pb-3 text-gray-400`}></i> }
    <input className="pb-3 w-full text-base" type={ type || "text" } placeholder={placeholder} />
  </label>
)

export default Input

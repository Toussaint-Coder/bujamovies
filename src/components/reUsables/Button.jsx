import React from "react"

const Button = ({children, className, onClick}) => {
  return (
    <button
      className={`rounded-lg px-2 py-1 bg-assets text-xs text-white ${className} hover:bg-assets/50`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
export default Button

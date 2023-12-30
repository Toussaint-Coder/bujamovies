import React from "react"

const BackDrop = ({children, className, onClick}) => {
  return (
    <div
      className={`${className} w-full h-full fixed bg-primary left-0 z-20 overflow-auto`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
export default BackDrop

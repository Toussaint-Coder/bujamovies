import React from "react"

const Card = ({children, className}) => {
  return (
    <>
      <div
        className={`p-2 bg-secondary border-white/15 flex flex-col gap-2 rounded-normal ${className} border border-white/15`}
      >
        {children}
      </div>
    </>
  )
}
export default Card

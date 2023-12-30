import React from "react"

const FlexCard = ({className, children}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>{children}</div>
  )
}

export default FlexCard

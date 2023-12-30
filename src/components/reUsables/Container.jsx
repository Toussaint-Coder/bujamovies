import React from "react"

const Container = ({children, className}) => {
  return <div className={`mx-auto max-w-4xl ${className} my-6`}>{children}</div>
}
export default Container

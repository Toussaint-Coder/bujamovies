import React from "react"
import Container from "../reUsables/Container"

const Tittle = ({children}) => {
  return (
    <Container>
      <div className="font-bold text-white text-lg">{children}</div>
    </Container>
  )
}
export default Tittle

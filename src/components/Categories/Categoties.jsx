import React from "react"
import Button from "../reUsables/Button"
import Container from "../reUsables/Container"

const Categories = () => {
  return (
    <Container>
      <div className="flex flex-wrap gap-2 justify-center">
        <Button>Films Francais</Button>
        <Button>Series Francais</Button>
        <Button>Series Agasobanuye</Button>
        <Button>Films Agasobanuye</Button>
      </div>
    </Container>
  )
}
export default Categories

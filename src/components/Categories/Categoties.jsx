import React from "react"
import Button from "../reUsables/Button"
import Container from "../reUsables/Container"

const Categories = () => {
  const Url = document.location
  const Slice = Url.toString().split("/")
  const GetPage = Slice[Slice.length - 1]
  console.log(GetPage)

  return (
    <Container>
      <div className="w-full">
        <ul className="grid grid-cols-4 items-center border border-white/15 rounded-normal overflow-hidden">
          <li
            className={`w-full border-r-2 border-white/15 text-white text-center ${
              !GetPage ? "bg-assets" : ""
            }`}
          >
            accueil
          </li>
          <li className="w-full border-r-2 border-white/15 text-white text-center">
            Films
          </li>
          <li className="w-full border-r-2 border-white/15 text-white text-center">
            Serie
          </li>
          <li className="w-full text-white text-center">Marché</li>
        </ul>
      </div>
    </Container>
  )
}
export default Categories

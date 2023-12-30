import React, {useEffect, useState} from "react"
import home from "../../assets/close.svg"
import Container from "../reUsables/Container"
import frenchFlag from "../../assets/france.svg"
import rwandaFlag from "../../assets/rwanda.svg"
import Button from "../reUsables/Button"
import Tittle from "../Title/Title"
import Movies from "../Movies/French/SeriesSection"
import Footer from "../Footer/Footer"
import {useParams} from "react-router-dom"
import Menu from "../Menu/Menu"
import bookMark from "../../assets/bookmark.svg"

const Buy = ({
  className,
  movieName,
  cover,
  description,
  code,
  size,
  type,
  saison,
  price,
  Categorie,
}) => {
  const [usersPosition, setUsersPosition] = useState(null)
  window.scrollTo(0, 0)
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((Position) => {
      if (Position.coords) {
        setUsersPosition({
          lat: Position.coords.latitude,
          long: Position.coords.latitude,
        })
      }
    })
  }, [])
  const Url = document.location
  //info
  const MovieInfo = `Code : ${code}\nNom : ${movieName}\nUrl : ${Url}\nPrix : ${price}\n${
    usersPosition
      ? `Localisation : https://www.google.com/maps?q=${usersPosition.lat},${usersPosition.long}`
      : ""
  }
`

  return (
    <Container className={`z-40 ${className}`}>
      <div className="text-white font-bold text-4xl my-8 flex items-center justify-between p-3">
        <h1>{movieName}</h1>
      </div>
      <div className="flex items-start gap-8 leading-6  flex-col">
        <div className="sm:w-2/3 lg:w-1/3">
          <div>
            <img src={cover} alt="cover" className="w-full rounded-normal" />
          </div>
        </div>
        <div className="w-full space-y-8">
          <div className="text-white">
            <div className="text-white font-bold text-xl">
              <h1>Histoire</h1>
            </div>
            <p>
              {description ? (
                description
              ) : (
                <span className="text-assets">
                  L'histoire n'est pas disponible
                </span>
              )}
            </p>
          </div>
          <div className="text-white mt-4">
            <ul className="space-y-2">
              <li>code : {code}</li>
              <li>Nom : {movieName}</li>
              <li>Type : {type}</li>
              {type === "Serie" && <li>Saison : {saison}</li>}
              <li>Prix : {price}</li>
              <li className="flex items-center gap-2">
                <span>Categorie : </span>
                {Categorie === "agasobanuye" && (
                  <img src={rwandaFlag} alt="flag" className="w-4" />
                )}

                {Categorie === "Francais" && (
                  <img src={frenchFlag} alt="flag" className="w-4" />
                )}
                <span>{Categorie}</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-baseline gap-2">
            <Button>
              <img src={bookMark} alt="Icon" className="w-5" />
            </Button>
            <a
              href={`https://wa.me/+25777850081?text=${encodeURIComponent(
                MovieInfo.trim()
              )}`}
              target="_blank"
            >
              <Button>Acheter</Button>
            </a>
            <Button>bande annonce</Button>
          </div>
        </div>
      </div>
      <Tittle>Serie Recommandé</Tittle>
      <Movies />
      <br />
    </Container>
  )
}
export default Buy

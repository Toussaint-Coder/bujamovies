import React from "react"
import Card from "../reUsables/Card"
import FrenchFrag from "../../assets/france.svg"
import RwandaFrag from "../../assets/rwanda.svg"
import emoji from "../../assets/emoji.svg"
import {Link} from "react-router-dom"
import Button from "../reUsables/Button"
import Container from "../reUsables/Container"

const Cart = () => {
  const CartItems = JSON.parse(localStorage.getItem("BookMarks")) || []
  console.log(CartItems)
  return (
    <Container>
      <div className="text-white font-bold text-4xl my-8 flex items-center justify-between p-3 w-full">
        <div>
          <h1>Votre Panier</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button className="text-lg">Vider le Panier</Button>
          <Button className="text-lg">Acheter Tout</Button>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 gap-6 md:grid-cols-3 sm:grid-cols-1">
        {CartItems.length > 0 &&
          CartItems.map((Movie) => (
            <Card key={Math.random().toString()}>
              <div className="h-64 overflow-hidden rounded-normal relative ">
                <img
                  src={Movie.MovieCover}
                  alt={Movie.Name}
                  className="w-full"
                />
              </div>
              <div className="text-white text-center flex justify-center items-center gap-1 text-sm">
                {Movie.MovieCategorie === "Francais" && (
                  <img src={FrenchFrag} alt="Icon" className="w-4" />
                )}
                {Movie.MovieCategorie === "agasobanuye" && (
                  <img src={RwandaFrag} alt="Icon" className="w-4" />
                )}
                <p>{Movie.Name}</p>
              </div>
              <div className="flex items-center gap-1 justify-center">
                <Link to={`/Buy_French_serie/${Movie.MovieCode}`}>
                  <Button>Acheter</Button>
                </Link>
                <Button>bande annonce</Button>
              </div>
            </Card>
          ))}
      </div>
      {CartItems.length === 0 && (
        <div className="flex items-center justify-center flex-col gap-4">
          <img src={emoji} alt="emoji" className="w-24" />
          <span className="text-assets">Votre Panier et Vide!</span>
        </div>
      )}
    </Container>
  )
}

export default Cart

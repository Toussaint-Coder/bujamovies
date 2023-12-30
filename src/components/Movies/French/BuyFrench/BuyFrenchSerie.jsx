import React, {useState} from "react"
import Buy from "../../../Buy/Buy"
import MoviesData from "../Series"
import {useParams} from "react-router-dom"

const BuyFrenchSerie = () => {
  const {code} = useParams()
  const selectMovie = MoviesData.find(
    (film) => film.Code === parseInt(code, 10)
  )

  return (
    <div>
      <Buy
        movieName={selectMovie.Tittle}
        cover={selectMovie.Cover}
        description={selectMovie.description}
        code={selectMovie.Code}
        size={selectMovie.Volume}
        type={selectMovie.Type}
        price={selectMovie.price}
        Categorie={selectMovie.Categorie}
      />
    </div>
  )
}
export default BuyFrenchSerie

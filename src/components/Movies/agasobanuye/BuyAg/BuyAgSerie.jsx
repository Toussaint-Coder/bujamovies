import React, {useState} from "react"
import Buy from "../../../Buy/Buy"
import Series from "../series"
import {useParams} from "react-router-dom"

const BuyAgSerie = () => {
  const {code} = useParams()
  const selectMovie = Series.find((film) => film.Code === parseInt(code, 10))

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
export default BuyAgSerie

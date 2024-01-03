import React from "react"
import "./App.css"
import Menu from "./components/Menu/Menu"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./components/Home/Home"
import Buy from "./components/Buy/Buy"
import BuyAg from "./components/Movies/agasobanuye/BuyAg/BuyAgFIlm"
import Footer from "./components/Footer/Footer"
import BuyAgSerie from "./components/Movies/agasobanuye/BuyAg/BuyAgSerie"
import BuyFrenchFilm from "./components/Movies/French/BuyFrench/BuyFrenchFilm"
import BuyFrenchSerie from "./components/Movies/French/BuyFrench/BuyFrenchSerie"
import Cart from "./components/Cart/Cart"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Menu />}>
            <Route path="/" element={<Home />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Buy_agasobanuye_films/:code" element={<BuyAg />} />
            <Route
              path="/Buy_agasobanuye_series/:code"
              element={<BuyAgSerie />}
            />
            <Route path="/Buy_French_film/:code" element={<BuyFrenchFilm />} />
            <Route
              path="/Buy_French_serie/:code"
              element={<BuyFrenchSerie />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App

import React, {useEffect, useState} from "react"
import Container from "../reUsables/Container"
import Logo from "../../assets/bujamovies.png"
import bookMark from "../../assets/bookmark.svg"
import Search from "../../assets/search.svg"
import {Outlet} from "react-router-dom"
import SearchCard from "../reUsables/searchCard"
import FilmsData from "../Movies/agasobanuye/Films"
import Series from "../Movies/agasobanuye/series"
import FilmsDataFr from "../Movies/French/Films"
import MoviesData from "../Movies/French/Series"

const Menu = () => {
  const [query, setQuery] = useState(null)
  const [type, setType] = useState(null)
  const [searchResult, setSearchResult] = useState([])

  //search algorithm
  useEffect(() => {
    let searchData = []

    if (query && type) {
      switch (type) {
        case "FIlm-agasobanuye":
          FilmsData.forEach((Movie) => {
            if (Movie.Tittle.toLowerCase().indexOf(query.toLowerCase()) > -1) {
              searchData.push(Movie)
              setSearchResult(searchData)
            }
          })
          break
        case "Serie-agasobanuye":
          Series.forEach((Movie) => {
            if (Movie.Tittle.toLowerCase().indexOf(query.toLowerCase()) > -1) {
              searchData.push(Movie)
              setSearchResult(searchData)
            } 
          })
          break
        case "Film-Francais":
          FilmsDataFr.forEach((Movie) => {
            if (Movie.Tittle.toLowerCase().indexOf(query.toLowerCase()) > -1) {
              searchData.push(Movie)
              setSearchResult(searchData)
            } 
          })
          break
        case "Serie-Francais":
          MoviesData.forEach((Movie) => {
            if (Movie.Tittle.toLowerCase().indexOf(query.toLowerCase()) > -1) {
              searchData.push(Movie)
              setSearchResult(searchData)
            } 
          })
          break
        default:
          setSearchResult([])
          break
      }
    }
  }, [query, type])
  return (
    <Container>
      <div className="w-full bg-secondary flex relative justify-between p-2 rounded-normal items-center border border-white/15">
        <div className="flex items-center gap-1">
          <img src={Logo} alt="Icon" className="w-24" />
        </div>
        <div className="flex items-center gap-1 max-w-64 w-full border border-white/15 px-2 py-1 rounded-lg">
          <img src={Search} alt="Icon" className="w-3" />
          <input
            type="text"
            className="bg-primary/15 w-full text-xs text-white outline-none"
            placeholder="chercher un film..."
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="max-w-20 w-full">
            <select
              className="bg-secondary w-full text-xs text-white outline-none space-y-2 cursor-pointer"
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">Trié par</option>
              <option value="Film-Francais">Film Francais</option>
              <option value="Serie-Francais">Serie Francais</option>
              <option value="FIlm-agasobanuye">Films agasobanuye</option>
              <option value="Serie-agasobanuye">Serie agasobanuye</option>
            </select>
          </div>

          {query && type ? (
            <div className="absolute bg-secondary border border-white/15 rounded-normal top-12 p-3 max-w-96 w-full space-y-2 z-30">
              {searchResult.length === 0 && (
                <p className="text-assets">
                  Pas de resultat a votre recherche '{query}'
                </p>
              )}
              {searchResult.map((Movie) => (
                <SearchCard
                  key={Math.random().toString()}
                  code={Movie.Code}
                  name={Movie.Tittle}
                  categorie={Movie.Categorie}
                  cover={Movie.Cover}
                  type={Movie.Type}
                />
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="relative cursor-pointer md:block sm:hidden">
          <div className="w-8 h-8 rounded-full border-white/15 overflow-hidden font-bold">
            <div className="text-white bg-assets rounded-full absolute px-[0.3rem] py-[0.1rem] text-xs ">
              0
            </div>
            <img src={bookMark} alt="Icon" className="w-full h-full" />
          </div>
        </div>
      </div>
      <Outlet />
    </Container>
  )
}
export default Menu

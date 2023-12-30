import React from "react"
import FlexCard from "./FlexCard"
import Button from "./Button"
import frenchFlag from "../../assets/france.svg"
import rwandaFlag from "../../assets/rwanda.svg"
const SearchCard = ({cover, name, code, type, categorie}) => {
  return (
    <FlexCard className="w-full bg-white/5 rounded-normal p-3 gap-2 items-stretch">
      <div>
        <img src={cover} alt="cover" className="w-20 rounded-normal" />
      </div>
      <div className={"text-white justify-start items-start flex-col"}>
        <div>Code : {code}</div>
        <div className="text-lg">Nom : {name}</div>
        <div>Type : {type}</div>
        <div className="flex items-center gap-2">
          Categorie :
          <span className="flex gap-2 items-center">
            {categorie === "agasobanuye" && (
              <>
                {categorie} <img src={rwandaFlag} alt="flag" className="w-4" />
              </>
            )}
            {categorie === "Francais" && (
              <>
                {categorie} <img src={frenchFlag} alt="flag" className="w-4" />
              </>
            )}
          </span>{" "}
        </div>
        <div className="mt-2">
          <Button>Acheter</Button>
        </div>
      </div>
    </FlexCard>
  )
}
export default SearchCard

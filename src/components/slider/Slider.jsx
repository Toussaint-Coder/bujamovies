import React from "react"
import Container from "../reUsables/Container"
import Button from "../reUsables/Button"
import Franch from "../../assets/france.svg"

const Slider = () => {
  return (
    <>
      <Container>
        <div className="w-full min-h-72 rounded-normal bg-gradient p-8 flex items-center border border-white/15 text-white/50">
          <div className="max-w-96 w-full space-y-4">
            <h1 className="font-bold text-4xl text-white">
              Bel Air <br />
              Saison 1 & 2
            </h1>
            <p className="text-xs">
              C'est l'histoire de Will, un ado de 20 ans, qui vivait dans une
              zone à risque de Philadelphie et qui, pour s'éviter des ennuis,
              vit désormais chez son oncle et sa tante dans une villa à Bel-Air.
              Evidemment, le conflit des classes amène des situations
              hilarantes.
            </p>
            <div className="flex gap-1 items-center text">
              <img src={Franch} alt="icon" className="w-4" />
              <span className="text-xs">Francais</span>
            </div>
            <div className="flex items-center gap-1">
              <Button>Acheter</Button>
              <Button>bande annonce</Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
export default Slider

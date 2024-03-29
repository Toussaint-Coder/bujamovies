import Container from "../reUsables/Container";
import Button from "../reUsables/Button";
import Franch from "../../assets/france.svg";

const Slider = () => {
  return (
    <>
      <Container>
        <div className="w-full min-h-[526px] rounded-normal bg-gradient px-8 md:px-16 py-4 md:py-8 flex items-center">
          <div className="max-w-[500px] w-full space-y-8">
            <div>
              <h1 className="font-bold text-4xl text-white">
                Bel Air <br />
                Saison 1 & 2
              </h1>
              <p className="text-base text-white/50 mt-4">
                C&apos;est l&apos;histoire de Will, un ado de 20 ans, qui vivait
                dans une zone à risque de Philadelphie et qui, pour
                s&apos;éviter des ennuis, vit désormais chez son oncle et sa
                tante dans une villa à Bel-Air. Evidemment, le conflit des
                classes amène des situations hilarantes.
              </p>
              <div className="flex gap-2 items-center mt-4">
                <img src={Franch} alt="icon" className="w-4" />
                <span className="text-xs text-white">Francais</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button>Acheter</Button>
              <Button>bande annonce</Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Slider;

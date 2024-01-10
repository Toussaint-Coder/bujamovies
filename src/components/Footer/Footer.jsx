import Container from "../reUsables/Container";
import waveImg from "../../assets/wave.svg";
import Logo from "../../assets/bujamovies.png";
import Facebook from "../../assets/facebook.svg";
import Youtube from "../../assets/youtube.svg";
const Footer = () => {
  return (
    <Container classname="mt-12">
      <div className="min-h-96 overflow-hidden rounded-normal  bg-secondary relative px-8 py-12 flex gap-12 items-start justify-around flex-wrap">
        <img src={waveImg} alt="" className="absolute bottom-0" />
        <div className="flex flex-wrap">
          <div className="flex flex-col gap-4">
            <div className="text-white font-bold">
              <p>En savoir Plus</p>
            </div>
            <ul className="space-y-4 text-sm text-white/50">
              <li>(+257) 77 850 081</li>
              <li>bujamovies@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="flex flex-col gap-4">
            <div className="text-white font-bold">
              <p>Autres Pages</p>
            </div>
            <ul className="space-y-4 text-sm text-white/50">
              <li>A propos</li>
              <li>Aide</li>
              <li>Accueil</li>
              <li>Films</li>
              <li>Series</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <img src={Logo} alt="Logo" className="w-32" />
          <div className="flex items-center gap-2 cursor-pointer text-white/50 text-sm">
            <img src={Facebook} alt="facebook" className="w-5 opacity-50" />
            <p>Buja Movies Trailers</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer text-white/50 text-sm">
            <img src={Youtube} alt="facebook" className="w-5 opacity-50" />
            <p>Buja Movies</p>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Footer;

import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import PropTypes from "prop-types";

import Container from "../reUsables/Container";
import frenchFlag from "../../assets/france.svg";
import rwandaFlag from "../../assets/rwanda.svg";
import Button from "../reUsables/Button";
import Tittle from "../Title/Title";
import Movies from "../Movies/French/SeriesSection";

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
  const [usersPosition, setUsersPosition] = useState(null);
  const [isBookMarked, setIsBookMarked] = useState();
  let [added, setAdded] = useState(false);
  window.scrollTo(0, 0);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(Position => {
      if (Position.coords) {
        setUsersPosition({
          lat: Position.coords.latitude,
          long: Position.coords.latitude,
        });
      }
    });
  }, []);
  const Url = document.location;
  //info
  const MovieInfo = `Code : ${code}\nNom : ${movieName}\nUrl : ${Url}\nPrix : ${price}\n${
    usersPosition
      ? `Localisation : https://www.google.com/maps?q=${usersPosition.lat},${usersPosition.long}`
      : ""
  }
`;
  let Data = JSON.parse(localStorage.getItem("BookMarks")) || [];
  useEffect(() => {
    const checkIsBookMarked = Data.some(movie => movie.MovieCode === code);
    setIsBookMarked(checkIsBookMarked);
  }, [Data, code]);

  const handlerBookMark = () => {
    const CheckisExist = Data.some(movie => movie.MovieCode === code);
    if (!CheckisExist) {
      Data.push({
        Name: movieName,
        MovieCover: cover,
        MovieCode: code,
        MovieUrl: Url.pathname,
        MovieCategorie: Categorie,
      });
      localStorage.setItem("BookMarks", JSON.stringify(Data));
      setAdded(true);

      toast.success("ajouté à votre panier!", {
        position: "bottom-center",
        style: {
          background: "",
        },
      });
    }
    setAdded(false);
  };

  return (
    <Container className={`z-40`}>
      {added && <Toaster />}
      <div className="text-white font-bold text-4xl my-8 flex items-center justify-between p-3 flex-col">
        <h1>{movieName}</h1>
      </div>
      <div className="flex items-start gap-8 max-lg:flex-col leading-6">
        <div className="lg:max-h-96 h-[500px] overflow-hidden rounded-normal lg:max-w-sm w-full sm:flex-col">
          <img src={cover} alt="cover" className="object-cover w-full" />
        </div>
        <div className="">
          <div className="text-white">
            <div className="text-white font-bold text-xl">
              <h1>Histoire</h1>
            </div>
            <p>
              {description ? (
                description
              ) : (
                <span className="text-assets">
                  L&apos;histoire n&apos;est pas disponible
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
          <div className="flex items-stretch gap-2 mt-4">
            <Button onClick={handlerBookMark}>
              {isBookMarked ? "retirer du" : "ajouter au"} panier
            </Button>
            <a
              href={`https://wa.me/+25777850081?text=${encodeURIComponent(
                MovieInfo.trim()
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              <Button>Acheter</Button>
            </a>
            <Button className="text-sm">bande annonce</Button>
          </div>
        </div>
      </div>
      <Tittle>Serie Recommandé</Tittle>
      <Movies />
      <br />
    </Container>
  );
};

// Props Validation
Buy.propTypes = {
  className: PropTypes.string,
  movieName: PropTypes.string,
  cover: PropTypes.string,
  description: PropTypes.string,
  code: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  saison: PropTypes.string,
  price: PropTypes.string,
  Categorie: PropTypes.string,
};

export default Buy;

import Buy from "../../../Buy/Buy";
import FilmsData from "../Films";
import { useParams } from "react-router-dom";

const BuyFrenchFilm = () => {
  const { code } = useParams();
  const selectMovie = FilmsData.find(film => film.Code === parseInt(code, 10));

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
  );
};
export default BuyFrenchFilm;

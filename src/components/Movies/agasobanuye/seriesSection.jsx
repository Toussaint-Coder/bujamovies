import Container from "../../reUsables/Container.jsx";
import Card from "../../reUsables/Card.jsx";
import Button from "../../reUsables/Button.jsx";
import rwandaFlag from "../../../assets/rwanda.svg";
import Series from "./series.js";
import { Link } from "react-router-dom";

const SerieSectionAg = () => {
  return (
    <Container>
      <div className="grid lg:grid-cols-4 gap-6 md:grid-cols-3 sm:grid-cols-1">
        {Series.map(Movie => (
          <Card key={Math.random().toString()}>
            <div className="h-64 overflow-hidden rounded-normal relative ">
              <img src={Movie.Cover} alt={Movie.Tittle} className="w-full" />
            </div>
            <div className="text-white text-center flex justify-center items-center gap-1 text-sm">
              <img src={rwandaFlag} alt="Icon" className="w-4" />
              <p className="text-lg font-semibold">{Movie.Tittle}</p>
            </div>
            <div className="flex items-center gap-4 justify-center flex-wrap mb-2">
              <Link to={`/Buy_agasobanuye_series/${Movie.Code}`}>
                <Button>Acheter</Button>
              </Link>
              <Button>bande annonce</Button>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
};
export default SerieSectionAg;

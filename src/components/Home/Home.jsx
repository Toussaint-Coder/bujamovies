import Slider from "../slider/Slider";
import Categories from "../Categories/Categoties";
import Tittle from "../Title/Title";
import Movies from "../Movies/French/SeriesSection";
import FilmsSection from "../Movies/French/FilmsSection";
import FilmsSectionAg from "../Movies/agasobanuye/FilmsSection";
import SerieSectionAg from "../Movies/agasobanuye/seriesSection";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Categories />
      <Slider />
      <Tittle>Series Francais</Tittle>
      <Movies />
      <Tittle>Films Francais</Tittle>
      <FilmsSection />
      <Tittle>Films Agasobanuye</Tittle>
      <FilmsSectionAg />
      <Tittle>Series Agasobanuye</Tittle>
      <SerieSectionAg />
      <div className="h-10"></div>
      <Footer />
    </>
  );
};
export default Home;

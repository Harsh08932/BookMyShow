import { Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DefaultHOC from "./HOC/Default.hoc";
import Movie from "./pages/Movie.page";
import Plays from "./pages/Plays.page";
import HomePage from "./pages/Home.page";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;
function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
      <MovieHOC path="/movie/:id" exact component={Movie} />
      <DefaultHOC path="/plays" exact component={Plays} />
    </>
  );
}

export default App;

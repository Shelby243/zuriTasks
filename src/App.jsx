import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorPage } from "./components";
import { HomePage, MovieDetails } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:movie_id" element={<MovieDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;

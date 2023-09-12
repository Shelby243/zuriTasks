import HomePage from "./pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MovieDetails } from "./components";

const router = createBrowserRouter([
  {
    index: true,
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/movies/:movie_id",
    element: <MovieDetails />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;

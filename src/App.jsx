import { Header, FeaturedMovie, Footer } from "./section";
const App = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <FeaturedMovie />
      <Footer />
    </div>
  );
};
export default App;

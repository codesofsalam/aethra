import Challenges from "./components/Challenges";
import Expanding from "./components/Expanding";
import Footer from "./components/Footer";
import Highlights from "./components/Highlights";
import KeyFeatures from "./components/KeyFeatures";
import NavHero from "./components/NavHero";
import Newsletter from "./components/Newsletter";
import ShapingFuture from "./components/ShapingFuture";
import Working from "./components/Working";

function App() {
  return (
    <>
      <NavHero />
      <Challenges />
      <Working />
      <KeyFeatures />
      <Expanding />
      <Highlights />
      <Newsletter />
      <ShapingFuture />
      <Footer />
    </>
  );
}

export default App;

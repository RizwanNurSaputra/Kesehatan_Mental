import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Page from "./components/Page";
import Layanan from "./components/Layanan";
import Rating from "./components/Rating";
import Keunggulan from "./components/Keunggulan";
import Faq from "./components/FAQ";
import Accordion from "./components/Accordion";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Page />
      <Layanan />
      <Rating />
      <Keunggulan />
      <Faq />
      <Accordion />
    </div>
  );
}

export default App;

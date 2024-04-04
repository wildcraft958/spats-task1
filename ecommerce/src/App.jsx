import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Navbar />
      <Card />
      <div className="b-0">
        <Footer />
      </div>
    </>
  );
}

export default App;

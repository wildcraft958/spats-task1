import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Bsell from "./components/Bsell";
import Intro from "./components/Intro";
import Review from "./components/Review";
import Our_collection from "./components/Our_collection";
import Contact from "./components/Contact";
import Scroll from "./components/Scroll-btn";

function App() {
  return (
    <>
      <Navbar />
      <div>

      <Intro />
      </div>
      <hr className="m-8 h-1 bg-slate-800 rounded-full" />

      <Bsell/>
      <hr className="m-8 h-1 bg-slate-800 rounded-full" />

      <Our_collection/>
      <Review/>
      <Contact/>
      <Scroll/>
      <div className="b-0">
        <Footer />
      </div>
    </>
  );
}

export default App;

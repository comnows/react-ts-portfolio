import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="max-lg:mt-[50px] lg:ml-[350px]">
      <Navbar />
      <div className="max-lg:h-[calc(100vh-50px)] h-screen overflow-x-hidden overflow-y-auto [perspective:1px] scroll-smooth">
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;

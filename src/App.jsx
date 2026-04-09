import Nav from "./components/Nav.jsx";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Project from "./components/Project.jsx";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="font-poppins">
        <Nav />
        <Header />
        <About />
        <Experience />
        <Project />
      </div>
    </BrowserRouter>
  );
};

export default App;

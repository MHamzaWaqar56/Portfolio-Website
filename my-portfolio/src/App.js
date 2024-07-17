import { Routes, Route, useLocation } from "react-router-dom";
import "./App.scss";
import Home from "./Containers/Home/Index";
import Skills from "./Containers/Skills/Index";
import Resume from "./Containers/Resume/Index";
import Projects from "./Containers/Projects/Index";
import About from "./Containers/About/Index";
import NavBar from "./Components/NavBar/Index";
import ParticlesBackground from "./utils/ParticlesBackground";

function App() {
  const loaction = useLocation();
  console.log(loaction);

  const renderParticlesJs = loaction.pathname === "/";

  return (
    <div className="App">
      {/* Particles js */}
      {renderParticlesJs && <ParticlesBackground />}

      {/* Navbar */}
      <NavBar />

      {/* Main Page Content */}

      <div className="App__main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

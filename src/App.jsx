import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Banner from "./components/banner";
import About from "./components/about";
import Skills from "./components/skill";
import Project from "./components/Project";
import Testimonial from "./components/testimonial";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Resume from "./components/resume";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Banner />
            <About />
            <Skills />
            <Project />
            <Testimonial />
            <Contact />
            <Footer />
          </>
        }
      />

      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
}

export default App;

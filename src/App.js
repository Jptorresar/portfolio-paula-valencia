import "./App.css";
import React, { useState } from "react";
import Header from "./components/header";
import Welcome from "./components/welcome";
import About from "./components/about";
import CurrentWork from "./components/currentWork";
import Resume from "./components/resume";

function App() {
  const [currentPage, setCurrentPage] = useState("welcome");
  function renderPage() {
    switch (currentPage) {
      case "welcome":
        return <Welcome />;
      case "about":
        return <About />;
      case "current Work":
        return <CurrentWork />;
        case "resume":
        return <Resume />;
      default:
        return null;
    }
  }
  return (
    <div className="portfolio-page-wrapper">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="portfolio-main-content">{renderPage()}</main>
    </div>
  );
}

export default App;

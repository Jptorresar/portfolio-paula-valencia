import "./App.css";
import React, { useState } from "react";
import Header from "./components/header";
import Welcome from "./components/welcome";
import About from "./components/about";
import CurrentWork from "./components/currentWork";

function App() {
  const [currentPage, setCurrentPage] = useState("welcome");
  function renderPage() {
    switch (currentPage) {
      case "welcome":
        return <Welcome />;
      case "about me":
        return <About />;
      case "current Work":
        return <CurrentWork />;
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

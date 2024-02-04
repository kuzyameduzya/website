import "./App.css";
import logo from "./meduzya universe2.svg";
import React from "react";
function App() {
  return (
    <>
      <div className="container-logo">
        <a href="#">
          <img className="logo" src={logo}></img>
        </a>
      </div>

      <header className="header">
        <ul className="header_links">
          <li className="header__link">Соцсети</li>
          <li className="header__link">Телефон</li>
          <li className="header__link">Обо мне</li>
        </ul>
      </header>
    </>
  );
}

export default App;

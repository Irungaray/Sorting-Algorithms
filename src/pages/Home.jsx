import React from "react";

import "./styles/Home.css";

import Buttons from "../components/ButtonsHome";

function Home() {
  return (
    <body>
      <header>Sort Algorithms</header>

      <main>
        <h1>Select an Algorithm to see how it works:</h1>
        <Buttons />
      </main>

      <footer>Irungaray</footer>
    </body>
  );
}

export default Home;

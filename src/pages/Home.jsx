import React from "react";
import { Link } from "react-router-dom";

import "../styles/Buttons.css";
import "./styles/Home.css";

function Home() {
  return (
    <body>
      <header>Sort Algorithms</header>

      <main>
        <h1>Select an Algorithm to see how it works:</h1>

        <div class="buttons">
          <Link to="/Bubble">
            <button>Bubble Sort</button>
          </Link>
          <Link to="/BubbleRecursive">
            <button>Recursive Bubble Sort</button>
          </Link>
          <Link to="/Insertion">
            <button>Insertion Sort</button>
          </Link>
          <Link to="/InsertionRecursive">
            <button>Recursive Insertion Sort</button>
          </Link>
          <Link to="/Merge">
            <button>Merge Sort</button>
          </Link>
          <Link to="/MergeIterative">
            <button>Iterative Merge Sort</button>
          </Link>
          <Link to="/Quick">
            <button>Quick Sort</button>
          </Link>
          <Link to="/Selection">
            <button>Selection Sort</button>
          </Link>
        </div>
      </main>

      <footer>Irungaray</footer>
    </body>
  );
}

export default Home;

import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import RandomAttributes from "./Components/RandomAttributes/RandomAttributes";

function App() {
  const [stats, setStats] = useState({
    str: {
      name: "STR",
      value: 8,
    },
    dex: {
      name: "DEX",
      value: 8,
    },
    con: {
      name: "CON",
      value: 8,
    },
    int: {
      name: "INT",
      value: 8,
    },
    wis: {
      name: "WIS",
      value: 8,
    },
    cha: {
      name: "CHA",
      value: 8,
    },
  });
  const [hasStat, setHasStat] = useState(false);
  const [stat, setStat] = useState({
    id: "hello",
    value: 0,
  });

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <RandomAttributes
              stats={stats}
              setStats={setStats}
              hasStat={hasStat}
              setHasStat={setHasStat}
              stat={stat}
              setStat={setStat}
            />
          }
        />
      </Routes>
    </main>
  );
}

export default App;

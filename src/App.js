import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import RandomAttributes from "./Components/RandomAttributes/RandomAttributes";

function App() {
  const [strength, setStrength] = useState(8);
  const [dexterity, setDexterity] = useState(8);
  const [constitution, setConstitution] = useState(8);
  const [intelligence, setIntelligence] = useState(8);
  const [wisdom, setWisdom] = useState(8);
  const [charisma, setCharisma] = useState(8);
  const [hasStat, setHasStat] = useState(false);
  const [points, setPoints] = useState(27);
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
              hasStat={hasStat}
              setHasStat={setHasStat}
              stat={stat}
              setStat={setStat}
              points={points}
              setPoints={setPoints}
              strength={strength}
              setStrength={setStrength}
              dexterity={dexterity}
              setDexterity={setDexterity}
              constitution={constitution}
              setConstitution={setConstitution}
              intelligence={intelligence}
              setIntelligence={setIntelligence}
              wisdom={wisdom}
              setWisdom={setWisdom}
              charisma={charisma}
              setCharisma={setCharisma}
            />
          }
        />
      </Routes>
    </main>
  );
}

export default App;

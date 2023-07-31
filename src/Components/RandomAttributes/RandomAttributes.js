import "./RandomAttributes.css";
const data = require("../../data/PBarray.json");

const RandomAttributes = (props) => {
  const dataHolder = data;
  const dataLength = dataHolder.length;
  let swapStat = "strength";
  let swapValue = 8;
  let swapState = false;
  let statName;
  let selectedStat;

  const randomizeAttributes = () => {
    props.setHasStat(false);
    const data2 = [...data];
    const dataLength = data2.length;
    const randomNum = Math.floor(Math.random() * dataLength);

    let newStats = data2[randomNum];
    let oldAtts = [...newStats];
    let newAtts = [];

    for (let i = 6; i > 0; i--) {
      let slot = Math.floor(Math.random() * oldAtts.length);
      newAtts.push(oldAtts[slot]);

      let index = oldAtts.indexOf(oldAtts[slot]);
      if (index !== -1) {
        oldAtts.splice(index, 1);
      }
    }

    props.setStrength(newAtts[0]);
    props.setDexterity(newAtts[1]);
    props.setConstitution(newAtts[2]);
    props.setIntelligence(newAtts[3]);
    props.setWisdom(newAtts[4]);
    props.setCharisma(newAtts[5]);
    props.setPoints(0);
  };

  const minusClick = (e) => {
    let f = e.target.id.slice(0, 3);
    if (f == "str") {
      if (props.strength > 8 && props.strength < 14) {
        props.setStrength(props.strength - 1);
        props.setPoints(props.points + 1);
      } else if (props.strength > 13) {
        props.setStrength(props.strength - 1);
        props.setPoints(props.points + 2);
      }
    } else if (f == "dex") {
      if (props.dexterity > 8 && props.dexterity < 14) {
        props.setDexterity(props.dexterity - 1);
        props.setPoints(props.points + 1);
      } else if (props.dexterity > 13) {
        props.setDexterity(props.dexterity - 1);
        props.setPoints(props.points + 2);
      }
    } else if (f == "con") {
      if (props.constitution > 8 && props.constitution < 14) {
        props.setConstitution(props.constitution - 1);
        props.setPoints(props.points + 1);
      } else if (props.constitution > 13) {
        props.setConstitution(props.constitution - 1);
        props.setPoints(props.points + 2);
      }
    } else if (f == "int") {
      if (props.intelligence > 8 && props.intelligence < 14) {
        props.setIntelligence(props.intelligence - 1);
        props.setPoints(props.points + 1);
      } else if (props.intelligence > 13) {
        props.setIntelligence(props.intelligence - 1);
        props.setPoints(props.points + 2);
      }
    } else if (f == "wis") {
      if (props.wisdom > 8 && props.wisdom < 14) {
        props.setWisdom(props.wisdom - 1);
        props.setPoints(props.points + 1);
      } else if (props.wisdom > 13) {
        props.setWisdom(props.wisdom - 1);
        props.setPoints(props.points + 2);
      }
    } else if (f == "cha") {
      if (props.charisma > 8 && props.charisma < 14) {
        props.setCharisma(props.charisma - 1);
        props.setPoints(props.points + 1);
      } else if (props.charisma > 13) {
        props.setCharisma(props.charisma - 1);
        props.setPoints(props.points + 2);
      }
    }
  };

  const plusClick = (e) => {
    let f = e.target.id.slice(0, 3);
    if (f == "str") {
      if (props.strength > 7 && props.strength < 13 && props.points > 0) {
        props.setStrength(props.strength + 1);
        props.setPoints(props.points - 1);
      } else if (
        props.strength > 12 &&
        props.strength < 15 &&
        props.points > 1
      ) {
        props.setStrength(props.strength + 1);
        props.setPoints(props.points - 2);
      }
    } else if (f == "dex") {
      if (props.dexterity > 7 && props.dexterity < 13 && props.points > 0) {
        props.setDexterity(props.dexterity + 1);
        props.setPoints(props.points - 1);
      } else if (
        props.dexterity > 12 &&
        props.dexterity < 15 &&
        props.points > 1
      ) {
        props.setDexterity(props.dexterity + 1);
        props.setPoints(props.points - 2);
      }
    } else if (f == "con") {
      if (
        props.constitution > 7 &&
        props.constitution < 13 &&
        props.points > 0
      ) {
        props.setConstitution(props.constitution + 1);
        props.setPoints(props.points - 1);
      } else if (
        props.constitution > 12 &&
        props.constitution < 15 &&
        props.points > 1
      ) {
        props.setConstitution(props.constitution + 1);
        props.setPoints(props.points - 2);
      }
    } else if (f == "int") {
      if (
        props.intelligence > 7 &&
        props.intelligence < 13 &&
        props.points > 0
      ) {
        props.setIntelligence(props.intelligence + 1);
        props.setPoints(props.points - 1);
      } else if (
        props.intelligence > 12 &&
        props.intelligence < 15 &&
        props.points > 1
      ) {
        props.setIntelligence(props.intelligence + 1);
        props.setPoints(props.points - 2);
      }
    } else if (f == "wis") {
      if (props.wisdom > 7 && props.wisdom < 13 && props.points > 0) {
        props.setWisdom(props.wisdom + 1);
        props.setPoints(props.points - 1);
      } else if (props.wisdom > 12 && props.wisdom < 15 && props.points > 1) {
        props.setWisdom(props.wisdom + 1);
        props.setPoints(props.points - 2);
      }
    } else if (f == "cha") {
      if (props.charisma > 7 && props.charisma < 13 && props.points > 0) {
        props.setCharisma(props.charisma + 1);
        props.setPoints(props.points - 1);
      } else if (
        props.charisma > 12 &&
        props.charisma < 15 &&
        props.points > 1
      ) {
        props.setCharisma(props.charisma + 1);
        props.setPoints(props.points - 2);
      }
    }
  };

  const swap = (e) => {
    swapStat = e.target.id;
    if (swapState == false) {
      statName = swapStat;
      selectedStat = document.getElementById(swapStat);
      selectedStat.classList.add("selectedStat");
      if (swapStat == "strength") {
        swapValue = props.strength;
      } else if (swapStat == "dexterity") {
        swapValue = props.dexterity;
      } else if (swapStat == "constitution") {
        swapValue = props.constitution;
      } else if (swapStat == "intelligence") {
        swapValue = props.intelligence;
      } else if (swapStat == "wisdom") {
        swapValue = props.wisdom;
      } else if (swapStat == "charisma") {
        swapValue = props.charisma;
      }
      swapState = true;
    } else {
      selectedStat.classList.remove("selectedStat");
      if (swapStat == "strength") {
        if (statName == "dexterity") {
          props.setDexterity(props.strength);
          props.setStrength(swapValue);
        } else if (statName == "constitution") {
          props.setConstitution(props.strength);
          props.setStrength(swapValue);
        } else if (statName == "intelligence") {
          props.setIntelligence(props.strength);
          props.setStrength(swapValue);
        } else if (statName == "wisdom") {
          props.setWisdom(props.strength);
          props.setStrength(swapValue);
        } else if (statName == "charisma") {
          props.setCharisma(props.strength);
          props.setStrength(swapValue);
        }
      } else if (swapStat == "dexterity") {
        if (statName == "strength") {
          props.setStrength(props.dexterity);
          props.setDexterity(swapValue);
        } else if (statName == "constitution") {
          props.setConstitution(props.dexterity);
          props.setDexterity(swapValue);
        } else if (statName == "intelligence") {
          props.setIntelligence(props.dexterity);
          props.setDexterity(swapValue);
        } else if (statName == "wisdom") {
          props.setWisdom(props.dexterity);
          props.setDexterity(swapValue);
        } else if (statName == "charisma") {
          props.setCharisma(props.dexterity);
          props.setDexterity(swapValue);
        }
      } else if (swapStat == "constitution") {
        if (statName == "dexterity") {
          props.setDexterity(props.constitution);
          props.setConstitution(swapValue);
        } else if (statName == "strength") {
          props.setStrength(props.constitution);
          props.setConstitution(swapValue);
        } else if (statName == "intelligence") {
          props.setIntelligence(props.constitution);
          props.setConstitution(swapValue);
        } else if (statName == "wisdom") {
          props.setWisdom(props.constitution);
          props.setConstitution(swapValue);
        } else if (statName == "charisma") {
          props.setCharisma(props.constitution);
          props.setConstitution(swapValue);
        }
      } else if (swapStat == "intelligence") {
        if (statName == "dexterity") {
          props.setDexterity(props.intelligence);
          props.setIntelligence(swapValue);
        } else if (statName == "strength") {
          props.setStrength(props.intelligence);
          props.setIntelligence(swapValue);
        } else if (statName == "constitution") {
          props.setConstitution(props.intelligence);
          props.setIntelligence(swapValue);
        } else if (statName == "wisdom") {
          props.setWisdom(props.intelligence);
          props.setIntelligence(swapValue);
        } else if (statName == "charisma") {
          props.setCharisma(props.intelligence);
          props.setIntelligence(swapValue);
        }
      } else if (swapStat == "wisdom") {
        if (statName == "dexterity") {
          props.setDexterity(props.wisdom);
          props.setWisdom(swapValue);
        } else if (statName == "strength") {
          props.setStrength(props.wisdom);
          props.setWisdom(swapValue);
        } else if (statName == "constitution") {
          props.setConstitution(props.wisdom);
          props.setWisdom(swapValue);
        } else if (statName == "intelligence") {
          props.setIntelligence(props.wisdom);
          props.setWisdom(swapValue);
        } else if (statName == "charisma") {
          props.setCharisma(props.wisdom);
          props.setWisdom(swapValue);
        }
      } else if (swapStat == "charisma") {
        if (statName == "dexterity") {
          console.log("hi");
          props.setDexterity(props.charisma);
          props.setCharisma(swapValue);
        } else if (statName == "strength") {
          props.setStrength(props.charisma);
          props.setCharisma(swapValue);
        } else if (statName == "constitution") {
          props.setConstitution(props.charisma);
          props.setCharisma(swapValue);
        } else if (statName == "wisdom") {
          props.setWisdom(props.charisma);
          props.setCharisma(swapValue);
        } else if (statName == "intelligence") {
          props.setIntelligence(props.charisma);
          props.setCharisma(swapValue);
        }
      }
      swapState = false;
    }
  };

  return (
    <div className="container">
      <h1>Attributes</h1>
      {/* <button onClick={getAttributes}>click me!</button> */}
      <div id="btnAndNumContainer">
        <button className="randomBtn" onClick={randomizeAttributes}>
          Randomize!
        </button>
        <div className="points">Point Buy: {props.points}</div>
      </div>

      <div id="statsContainer">
        <div>STR</div>
        <div id="strMinus" onClick={minusClick}>
          -
        </div>
        <div id="strength" onClick={swap}>
          {props.strength}
        </div>
        <div id="strPlus" onClick={plusClick}>
          +
        </div>
        <div>DEX</div>
        <div id="dexMinus" onClick={minusClick}>
          -
        </div>
        <div id="dexterity" onClick={swap}>
          {props.dexterity}
        </div>
        <div id="dexPlus" onClick={plusClick}>
          +
        </div>
        <div>CON</div>
        <div id="conMinus" onClick={minusClick}>
          -
        </div>
        <div id="constitution" onClick={swap}>
          {props.constitution}
        </div>
        <div id="conPlus" onClick={plusClick}>
          +
        </div>
        <div>INT</div>
        <div id="intMinus" onClick={minusClick}>
          -
        </div>
        <div id="intelligence" onClick={swap}>
          {props.intelligence}
        </div>
        <div id="intPlus" onClick={plusClick}>
          +
        </div>
        <div>WIS</div>
        <div id="wisMinus" onClick={minusClick}>
          -
        </div>
        <div id="wisdom" onClick={swap}>
          {props.wisdom}
        </div>
        <div id="wisPlus" onClick={plusClick}>
          +
        </div>
        <div>CHA</div>
        <div id="chaMinus" onClick={minusClick}>
          -
        </div>
        <div id="charisma" onClick={swap}>
          {props.charisma}
        </div>
        <div id="chaPlus" onClick={plusClick}>
          +
        </div>
      </div>
    </div>
  );
};

export default RandomAttributes;

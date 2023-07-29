import "./RandomAttributes.css";
const data = require("../../data/PBarray.json");

const RandomAttributes = (props) => {
  const dataHolder = data;
  const dataLength = dataHolder.length;

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
  };

  return (
    <div>
      <h1>Randomize Attributes</h1>
      {/* <button onClick={getAttributes}>click me!</button> */}
      <div id="btnAndNumContainer">
        <button onClick={randomizeAttributes}>click me!</button>
        <div>
          <div>Point Buy: </div>
          <div>{props.points}</div>
        </div>
      </div>

      <div id="statsContainer">
        <div>STR</div>
        <div id="strMinus">-</div>
        <div id="strength">{props.strength}</div>
        <div id="strPlus">+</div>
        <div>DEX</div>
        <div id="dexMinus">-</div>
        <div id="dexterity">{props.dexterity}</div>
        <div id="dexPlus">+</div>
        <div>CON</div>
        <div id="conMinus">-</div>
        <div id="constitution">{props.constitution}</div>
        <div id="conPlus">+</div>
        <div>INT</div>
        <div id="intMinus">-</div>
        <div id="intelligence">{props.intelligence}</div>
        <div id="intPlus">+</div>
        <div>WIS</div>
        <div id="wisMinus">-</div>
        <div id="wisdom">{props.wisdom}</div>
        <div id="wisPlus">+</div>
        <div>CHA</div>
        <div id="chaMinus">-</div>
        <div id="charisma">{props.charisma}</div>
        <div id="chaPlus">+</div>
      </div>
    </div>
  );
};

export default RandomAttributes;

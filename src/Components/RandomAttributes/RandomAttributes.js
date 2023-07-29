import "./RandomAttributes.css";
const data = require("../../data/PBarray.json");

const RandomAttributes = (props) => {
  const dataHolder = data;
  const dataLength = dataHolder.length;
  let firstRunChecker = true;
  let oldAttsExist = false;

  //   const getAttributes = () => {
  //     var element = document.querySelectorAll(".stats");
  //     // console.log(element.length);
  //     const swapAtts = () => {
  //       console.log("hola");
  //     };

  //     const shuffleAtts = (e) => {
  //       //   console.log(e);
  //       let oldAtts = [...e];
  //       let newAtts = [];
  //       for (let i = e.length; i > 0; i--) {
  //         let slot = Math.floor(Math.random() * oldAtts.length);
  //         newAtts.push(oldAtts[slot]);

  //         let index = oldAtts.indexOf(oldAtts[slot]);
  //         if (index !== -1) {
  //           oldAtts.splice(index, 1);
  //         }
  //       }

  //       const clearOldAtts = () => {
  //         if (oldAttsExist === true) {
  //           document.querySelectorAll(".stats").forEach((e) => e.remove());
  //           oldAttsExist = false;
  //           clearOldAtts();
  //         } else {
  //           console.log(newAtts);
  //           let strDiv = document.createElement("div");
  //           strDiv.innerHTML = newAtts[0];
  //           strDiv.classList.add("stats");
  //           containerDiv.appendChild(strDiv);
  //           let dexDiv = document.createElement("div");
  //           dexDiv.innerHTML = newAtts[1];
  //           dexDiv.classList.add("stats");
  //           containerDiv.appendChild(dexDiv);
  //           let conDiv = document.createElement("div");
  //           conDiv.innerHTML = newAtts[2];
  //           conDiv.classList.add("stats");
  //           containerDiv.appendChild(conDiv);
  //           let intDiv = document.createElement("div");
  //           intDiv.innerHTML = newAtts[3];
  //           intDiv.classList.add("stats");
  //           containerDiv.appendChild(intDiv);
  //           let wisDiv = document.createElement("div");
  //           wisDiv.innerHTML = newAtts[4];
  //           wisDiv.classList.add("stats");
  //           containerDiv.appendChild(wisDiv);
  //           let chaDiv = document.createElement("div");
  //           chaDiv.innerHTML = newAtts[5];
  //           chaDiv.classList.add("stats");
  //           containerDiv.appendChild(chaDiv);
  //           oldAttsExist = true;
  //         }
  //       };
  //       clearOldAtts();
  //     };

  //     const containerDiv = document.getElementById("attributesGrid");
  //     let randomNum = Math.floor(Math.random() * dataLength);
  //     if (firstRunChecker === true) {
  //       let strDiv = document.createElement("div");
  //       strDiv.innerHTML = "STR";
  //       containerDiv.appendChild(strDiv);
  //       let dexDiv = document.createElement("div");
  //       dexDiv.innerHTML = "DEX";
  //       containerDiv.appendChild(dexDiv);
  //       let conDiv = document.createElement("div");
  //       conDiv.innerHTML = "CON";
  //       containerDiv.appendChild(conDiv);
  //       let intDiv = document.createElement("div");
  //       intDiv.innerHTML = "INT";
  //       containerDiv.appendChild(intDiv);
  //       let wisDiv = document.createElement("div");
  //       wisDiv.innerHTML = "WIS";
  //       containerDiv.appendChild(wisDiv);
  //       let chaDiv = document.createElement("div");
  //       chaDiv.innerHTML = "CHA";
  //       containerDiv.appendChild(chaDiv);
  //       firstRunChecker = false;
  //     }
  //     shuffleAtts(dataHolder[randomNum]);
  //     if (element.length > 0) {
  //       console.log("here");
  //       for (let i = element.length - 1; i >= 0; i--) {
  //         console.log(element[i]);
  //         element[i].addEventListener("click", function () {
  //           console.log("hola");
  //         });
  //       }
  //       //   element.addEventListener("click", function () {
  //       //     console.log("hola");
  //       //   });
  //     }
  //   };

  const randomizeAttributes = () => {
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

    // console.log(data2[randomNum][0]);
    props.setStats({
      str: {
        name: "STR",
        value: newAtts[0],
      },
      dex: {
        name: "DEX",
        value: newAtts[1],
      },
      con: {
        name: "CON",
        value: newAtts[2],
      },
      int: {
        name: "INT",
        value: newAtts[3],
      },
      wis: {
        name: "WIS",
        value: newAtts[4],
      },
      cha: {
        name: "CHA",
        value: newAtts[5],
      },
    });
  };

  const click = (e) => {
    // console.log(e.target.id);
    if (!props.hasStat) {
      props.setStat({
        id: e.target.id,
        value: e.target.innerText,
      });
      props.setHasStat(true);
    } else {
      const f = document.getElementById(props.stat.id);
      f.innerText = e.target.innerText;
      e.target.innerText = props.stat.value;
      props.setHasStat(false);
    }
  };

  return (
    <div>
      <h1>Randomize Attributes</h1>
      {/* <button onClick={getAttributes}>click me!</button> */}
      <button onClick={randomizeAttributes}>click me!</button>

      <div id="statsContainer">
        <div>STR</div>
        <div id="str" onClick={click}>
          {props.stats.str.value}
        </div>
        <div>DEX</div>
        <div id="dex" onClick={click}>
          {props.stats.dex.value}
        </div>
        <div>CON</div>
        <div id="con" onClick={click}>
          {props.stats.con.value}
        </div>
        <div>INT</div>
        <div id="int" onClick={click}>
          {props.stats.int.value}
        </div>
        <div>WIS</div>
        <div id="wis" onClick={click}>
          {props.stats.wis.value}
        </div>
        <div>CHA</div>
        <div id="cha" onClick={click}>
          {props.stats.cha.value}
        </div>
      </div>
    </div>
  );
};

export default RandomAttributes;

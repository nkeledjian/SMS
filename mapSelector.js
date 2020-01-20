// var maps = require("./maps.js")

// SEV - CHANGED FROM INDIVIDIAL VARS TO 1 MAIN VARIABLE CONTAINING ALL CONTENT
var allMaps = {
  pvp: [
    {
      name: "Abyssal Caverns",
      url: "https://i.imgur.com/bAhCSld.jpg"
    },
    {
      name: "Backwater Gulch",
      url: "https://i.imgur.com/X6OEBdu.jpg"
    },
    {
      name: "Central Protocol",
      url: "https://imgur.com/En33iIu.jpg"
    },
    {
      name: "Cerulean Fall",
      url: "https://imgur.com/kkZ9Kwf.jpg"
    },
    {
      name: "Daedalus Point",
      url: "https://imgur.com/ElBw4Nq.jpg"
    },
    {
      name: "Ephemeron",
      url: "https://imgur.com/utF5AtO.jpg"
    },
    {
      name: "Expedition Lost",
      url: "https://imgur.com/99e9mis.jpg"
    },
    {
      name: "Incineration Zone",
      url: "https://imgur.com/h3lSeaS.jpg"
    },
    {
      name: "Jungle Basin",
      url: "https://imgur.com/Ij6EXad.jpg"
    },
    {
      name: "Korhal City",
      url: "https://i.imgur.com/ZaZP8ul.jpg"
    },
    {
      name: "Kulas Ravine",
      url: "https://i.imgur.com/m1EOYNY.jpg"
    },
    {
      name: "Metalopolis",
      url: "https://i.imgur.com/8evMh1K.jpg"
    },
    {
      name: "New Repugnancy",
      url: "https://i.imgur.com/keE8MFX.jpg"
    },
    {
      name: "Newkirk District",
      url: "https://i.imgur.com/rlgSoVp.jpg"
    },
    {
      name: "Tal-Darim Altar",
      url: "https://i.imgur.com/qklu3rY.jpg"
    },
    {
      name: "Yeonsu",
      url: "https://i.imgur.com/0lvFIbI.jpg"
    }
  ],
  pvt: [
    {
      name: "Antiga Shipyard",
      url: "https://i.imgur.com/GVOBc1O.jpg"
    },
    {
      name: "Bridgehead",
      url: "https://i.imgur.com/YeXE2xD.jpg"
    },
    {
      name: "Cloud Kingdom",
      url: "https://i.imgur.com/SiRp7em.jpg"
    },
    {
      name: "Dusk Towers",
      url: "https://i.imgur.com/OfK2vlD.jpg"
    },
    {
      name: "Fracture",
      url: "https://i.imgur.com/ffAxuAk.jpg"
    },
    {
      name: "Habitation Station",
      url: "https://i.imgur.com/XJaJYo9.jpg"
    },
    {
      name: "Heavy Rain",
      url: "https://i.imgur.com/G993bkG.jpg"
    },
    {
      name: "King Sejong Station",
      url: "https://i.imgur.com/q3N9l03.jpg"
    },
    {
      name: "Lost and Found",
      url: "https://i.imgur.com/miz1XEU.jpg"
    },
    {
      name: "Newkirk Precinct",
      url: "https://i.imgur.com/GNM3YL2.jpg"
    },
    {
      name: "Proxima Station",
      url: "https://i.imgur.com/e8uZzfJ.jpg"
    },
    {
      name: "Ruins of Endion",
      url: "https://i.imgur.com/i3blZkm.jpg"
    },
    {
      name: "Secret Spring",
      url: "https://i.imgur.com/CotFQxg.jpg"
    },
    {
      name: "Star Station",
      url: "https://i.imgur.com/uqri6Sq.jpg"
    },
    {
      name: "Ulrena",
      url: "https://i.imgur.com/qmtnuzv.jpg"
    },
    {
      name: "Xel Naga Caverns",
      url: "https://i.imgur.com/weEmtuC.jpg"
    }
  ],
  tvt: [
    {
      name: "Abiogenesis",
      url: "https://i.imgur.com/IrCMf5y.jpg"
    },
    {
      name: "Arid Plateau",
      url: "https://i.imgur.com/1dJmiXd.jpg"
    },
    {
      name: "Blood Boil",
      url: "https://i.imgur.com/swiiaEb.jpg"
    },
    {
      name: "Darkness Sanctuary",
      url: "https://i.imgur.com/DnQAv9a.jpg"
    },
    {
      name: "Dasan Station",
      url: "https://i.imgur.com/06W3Duv.jpg"
    },
    {
      name: "Desert Oasis",
      url: "https://i.imgur.com/xRv9j69.jpg"
    },
    {
      name: "Howling Peak",
      url: "https://i.imgur.com/NphM7C0.jpg"
    },
    {
      name: "Incineration Zone",
      url: "https://i.imgur.com/hXEcQSg.jpg"
    },
    {
      name: "Klontas Mire",
      url: "https://i.imgur.com/Qu5ZP4k.jpg"
    },
    {
      name: "Korhal Carnage Knockout",
      url: "https://i.imgur.com/pMCPuBH.jpg"
    },
    {
      name: "Lost Temple",
      url: "https://i.imgur.com/GqM6z8E.jpg"
    },
    {
      name: "Nezarim Crypt",
      url: "https://i.imgur.com/KGsbvLb.jpg"
    },
    {
      name: "Newkirk Precinct",
      url: "https://i.imgur.com/5cuWfoE.jpg"
    },
    {
      name: "Odyssey",
      url: "https://i.imgur.com/aJ9QWLD.jpg"
    },
    {
      name: "Prion Terraces",
      url: "https://i.imgur.com/FLNTXjo.jpg"
    },
    {
      name: "Stasis",
      url: "https://i.imgur.com/A9eDh3Q.jpg"
    }
  ],
  tvz: [
    {
      name: "Akilon Wastes",
      url: "https://i.imgur.com/wGZYc4Z.jpg"
    },
    {
      name: "Bridgehead",
      url: "https://i.imgur.com/YiZRSSS.jpg"
    },
    {
      name: "Catallena",
      url: "https://i.imgur.com/a12pC3m.jpg"
    },
    {
      name: "Cerulean Fall",
      url: "https://i.imgur.com/BjNUgwr.jpg"
    },
    {
      name: "Coda",
      url: "https://i.imgur.com/cwaQDU4.png"
    },
    {
      name: "Dasan Station",
      url: "https://i.imgur.com/8W1TKT7.jpg"
    },
    {
      name: "Dash and Terminal",
      url: "https://i.imgur.com/T1VvxJE.jpg"
    },
    {
      name: "Foxtrot Labs",
      url: "https://i.imgur.com/QJvOZzF.jpg"
    },
    {
      name: "Fracture",
      url: "https://i.imgur.com/QKkXKAS.jpg"
    },
    {
      name: "Iron Fortress",
      url: "https://i.imgur.com/mhWlI1r.png"
    },
    {
      name: "Korhal Sky Island",
      url: "https://i.imgur.com/VsjmsMp.jpg"
    },
    {
      name: "Mech Depot",
      url: "https://i.imgur.com/EH66fDt.jpg"
    },
    {
      name: "Merry Go Round",
      url: "https://i.imgur.com/WFNH9rI.jpg"
    },
    {
      name: "Polar Night",
      url: "https://i.imgur.com/1LfV9On.jpg"
    },
    {
      name: "Redshift",
      url: "https://i.imgur.com/fOC35P4.jpg"
    },
    {
      name: "Year Zero",
      url: "https://i.imgur.com/zWOdggD.jpg"
    }
  ],
  zvp: [
    {
      name: "Battle of the Boardwalk",
      url: "https://imgur.com/4zSgSZq.jpg"
    },
    {
      name: "Cactus Valley",
      url: "https://imgur.com/y5nGZr3.jpg"
    },
    {
      name: "Dusk Towers",
      url: "https://imgur.com/XxsWsTE.jpg"
    },
    {
      name: "Echo",
      url: "https://imgur.com/xCkxQxZ.jpg"
    },
    {
      name: "Emtombed Valley",
      url: "https://imgur.com/hXT8HMG.jpg"
    },
    {
      name: "Expedition Lost",
      url: "https://imgur.com/ErHVtGt.jpg"
    },
    {
      name: "Foxtrot Labs",
      url: "https://imgur.com/NCe2uLy.jpg"
    },
    {
      name: "Frozen Temple",
      url: "https://imgur.com/cVzpZ0S.jpg"
    },
    {
      name: "Interloper",
      url: "https://imgur.com/jE9DMcp.jpg"
    },
    {
      name: "Invader",
      url: "https://imgur.com/xu2jZDf.jpg"
    },
    {
      name: "King Sejong Station",
      url: "https://imgur.com/sp4TWUs.jpg"
    },
    {
      name: "Moonlight Madness",
      url: "https://imgur.com/ipNiyen.jpg"
    },
    {
      name: "Redshift",
      url: "https://imgur.com/gIw7InF.jpg"
    },
    {
      name: "Shakuras Plateau",
      url: "https://imgur.com/c5KuqXP.jpg"
    },
    {
      name: "Ulrena",
      url: "https://imgur.com/w1xJXQy.jpg"
    },
    {
      name: "Waystation",
      url: "https://imgur.com/SNRErcY.jpg"
    }
  ],
  zvz: [
    {
      name: "Blueshift",
      url: "https://i.imgur.com/TTnAonN.jpg"
    },
    {
      name: "Xel'Naga Caverns",
      url: "https://i.imgur.com/b11Lr0W.jpg"
    },
    {
      name: "Backwater Gluch",
      url: "https://i.imgur.com/hEotJcQ.jpg"
    },
    {
      name: "Scrap Station",
      url: "https://i.imgur.com/4LrATE7.jpg"
    },
    {
      name: "Typhon Peaks",
      url: "https://i.imgur.com/5yHHq0P.jpg"
    },
    {
      name: "Moonlight Madness",
      url: "https://i.imgur.com/xmhmI3x.jpg"
    },
    {
      name: "Red City",
      url: "https://i.imgur.com/FNu4fCQ.jpg"
    },
    {
      name: "Slag Pits",
      url: "https://i.imgur.com/WtsMDRB.jpg"
    },
    {
      name: "Metropolis",
      url: "https://i.imgur.com/FNzpxYc.jpg"
    },
    {
      name: "Kulas Ravine",
      url: "https://i.imgur.com/3NDrCwU.jpg"
    },
    {
      name: "Korhal Carnage Knockout",
      url: "https://i.imgur.com/4S7VNlf.jpg"
    },
    {
      name: "Ruins of Seras",
      url: "https://i.imgur.com/gYHjJ6D.jpg"
    },
    {
      name: "Korhal Floating Island",
      url: "https://i.imgur.com/OGz5Rxm.jpg"
    },
    {
      name: "Blistering Sands",
      url: "https://i.imgur.com/c0cUeAz.jpg"
    },
    {
      name: "Delta Quadrant",
      url: "https://i.imgur.com/j2nH6WL.jpg"
    },
    {
      name: "Inferno Pools",
      url: "https://i.imgur.com/IEsETsO.jpg"
    }
  ]
};

var newRoundData = {};
var selectedMapsPool = [];

var roundType,
  p1name,
  p2name,
  pRace1,
  pRace2,
  bestOutOf,
  voteTimer,
  currentMapPool;

p1VetoCount = 0;
p2VetoCount = 0;
p1VetoCountMax = 3;
p2VetoCountMax = 3;
totalSelectVotes = 0;
totalVetoVotes = 0;
currentMap = 0;

const DOM = {
  p1SelectVote: document.querySelector("#p1-select-vote"),
  p1VetoVote: document.querySelector("#p1-veto-vote"),
  p2SelectVote: document.querySelector("#p2-select-vote"),
  p2VetoVote: document.querySelector("#p2-veto-vote"),
  start: document.querySelector("#go"),
  resetVotes: document.querySelector("#reset")
};

function voteCountChecker() {
  if (totalVetoVotes > 0) {
    // run function to slice map from current map pool object
    // tossCurrentMap()
    //console.log('vote no');

    // SHOW NEXT MAP IN LIST
    hideItem("map" + currentMap);
    currentMap++;
    showItem("map" + currentMap);

    // RESET VOTES
    totalSelectVotes = 0;
    totalVetoVotes = 0;
  }

  if (totalSelectVotes == 2) {
    // run function to push map to Selected Maps Pool
    // pushCurrentMap()
    //console.log('vote yes');

    // MOVE MAP TO SELECTED MAPS
    document
      .getElementById("selected-maps")
      .insertAdjacentHTML(
        "beforeend",
        document.getElementById("map" + currentMap).innerHTML
      );

    // SHOW NEXT MAP IN LIST
    hideItem("map" + currentMap);
    currentMap++;
    showItem("map" + currentMap);

    // RESET VOTES
    totalSelectVotes = 0;
    totalVetoVotes = 0;
    document.getElementById("p1-select-vote").disabled = false;
    document.getElementById("p2-select-vote").disabled = false;
  }
}

function displayMaps(mapPool) {
  // RESET COUNTER
  var i = 0;

  // CLEAR THE LIST AND RESET VOTES
  document.getElementById("map-info").innerHTML = "";
  totalSelectVotes = 0;
  totalVetoVotes = 0;
  currentMap = 0;

  // SET FIRST OBJECT AS VISIBLE
  var itemVis = "block";

  // FOR EACH ITEM IN SELECTED MAP POOL ARRAY
  // NAR - SHUFFLE THE MAP OBJECTS IN ARRAY
  mapPool
    .sort(() => Math.random() - 0.5)
    .forEach(function() {
      // SELECT MAP FROM SHUFFLED ARRAY
      map = mapPool[i++ % mapPool.length];

      // DEFINE HTML MARKUP
      var markup = `
        <div id="map${i - 1}" style="display:${itemVis};">
          <div class="card animation fadeIn">
            <div class="card-body"
              <h2 style="text-align: center; font-size: 30px;">${map.name}</h2>
              <img src=${
                map.url
              } style="display: block; width: 300px; height: 300px; margin-left: auto; margin-right: auto;"></img>
            </div>
          </div>
        </div>
      `;

      // APPEND OBJECT TO MAP LIST
      document
        .getElementById("map-info")
        .insertAdjacentHTML("beforeend", markup);

      // SET SUBSEQUENT OBJECTS AS HIDDEN
      itemVis = "none";
    });
}

// Capture player votes
DOM.p1SelectVote.addEventListener("click", function(e) {
  e.stopPropagation();
  e.preventDefault();
  totalSelectVotes++;
  document.getElementById("p1-select-vote").disabled = true;
  console.log(totalSelectVotes, "select vote count");
  console.log(`player 1 ${p1name} chose select`);
  voteCountChecker();
});
DOM.p1VetoVote.addEventListener("click", function(e) {
  e.stopPropagation();
  e.preventDefault();
  if (p1VetoCount < p1VetoCountMax) {
    totalVetoVotes++;
    p1VetoCount++;
    // display number of vetoes used on DOM
    console.log("p1 veto count", p1VetoCount)
    document.getElementById("p1VetoVotes").innerHTML = p1VetoCount;
    if (p1VetoCount >= p1VetoCountMax) {
      document.getElementById("p1-veto-vote").disabled = true;
      // display number of vetoes used on DOM
      // document.getElementById("p1VetoVotes").innerHTML = p1VetoCount;
    }
    document.getElementById("p1-select-vote").disabled = false;
    document.getElementById("p2-select-vote").disabled = false;
    console.log(totalVetoVotes, "veto vote count");
    console.log(`player 1 ${p1name} chose veto`);
    voteCountChecker();
  } else {
    console.log("P1 Max Vetoes Reached");
  }
});
DOM.p2SelectVote.addEventListener("click", function(e) {
  e.stopPropagation();
  e.preventDefault();
  totalSelectVotes++;
  document.getElementById("p2-select-vote").disabled = true;
  console.log(totalSelectVotes, "select vote count");
  console.log(`player 2 ${p2name} chose select`);
  voteCountChecker();
});
DOM.p2VetoVote.addEventListener("click", function(e) {
  e.stopPropagation();
  e.preventDefault();
  if (p2VetoCount < p2VetoCountMax) {
    totalVetoVotes++;
    p2VetoCount++;
    document.getElementById("p2VetoVotes").innerHTML = p2VetoCount;
    if (p2VetoCount >= p2VetoCountMax) {
      document.getElementById("p2-veto-vote").disabled = true;
      // document.getElementById("p2VetoVotes").innerHTML = p2VetoCount;
    }
    document.getElementById("p1-select-vote").disabled = false;
    document.getElementById("p2-select-vote").disabled = false;
    console.log(totalVetoVotes, "veto vote count");
    console.log(`player 2 ${p2name} chose veto`);
    voteCountChecker();
  } else {
    console.log("P2 Max Vetoes Reached");
  }
});
// reset votes
DOM.resetVotes.addEventListener("click", function(e) {
  e.stopPropagation();
  e.preventDefault();
  console.log("resetting votes list");
  // RESET VOTES VARIABLES
  p1VetoCount = 0;
  p2VetoCount = 0;
  totalSelectVotes = 0;
  totalVetoVotes = 0;
  // CLEAR VOTES LIST IN DOM
  document.getElementById("selected-maps").innerHTML = "";
  // RESET VOTE BUTTONS
  document.getElementById("p1-select-vote").disabled = false;
  document.getElementById("p2-select-vote").disabled = false;
  document.getElementById("p1-veto-vote").disabled = false;
  document.getElementById("p2-veto-vote").disabled = false;
});

DOM.start.addEventListener("click", function(e) {
  e.preventDefault();

  // Form validation
  function validateForm() {
    var isValid = true;
    $(".form-control").each(function() {
      if ($(this).val() === "") {
        isValid = false;
      }
    });
    return isValid;
  }
  // If all required fields are filled
  if (validateForm()) {
    // Create an object for the player's data
    newRoundData = {
      nameP1: $("#nameP1")
        .val()
        .trim(),
      nameP2: $("#nameP2")
        .val()
        .trim(),
      raceP1: $("#raceP1")
        .val()
        .trim(),
      raceP2: $("#raceP2")
        .val()
        .trim(),
      roundType: $("#roundType")
        .val()
        .trim()
    };

    p1name = newRoundData.nameP1;
    p2name = newRoundData.nameP2;
    pRace1 = newRoundData.raceP1;
    pRace2 = newRoundData.raceP2;
    roundType = newRoundData.roundType;

    document.getElementById("p1-name").innerHTML = p1name;
    document.getElementById("p2-name").innerHTML = p2name;
    document.getElementById("p1-race").innerHTML = pRace1;
    document.getElementById("p2-race").innerHTML = pRace2;

    // round type slection - best out of 3, 5 or 7 rounds
    if (roundType == 3) {
      bestOutOf = 3;
    } else if (roundType == 5) {
      bestOutOf = 5;
    } else if (roundType == 7) {
      bestOutOf = 7;
    }

    // map pool type selection

    // SEV - UPDATED THE currentMapPool REFERENCES FROM INDIVIDUAL VARIABLES TO 1 MAIN VARIABLE

    if (pRace1 == "P" && pRace2 == "P") {
      currentMapPool = allMaps.pvp;
    } else if (
      (pRace1 == "P" && pRace2 == "T") ||
      (pRace1 == "T" && pRace2 == "P")
    ) {
      currentMapPool = allMaps.pvt;
    } else if (pRace1 == "T" && pRace2 == "T") {
      currentMapPool = allMaps.tvt;
    } else if (
      (pRace1 == "T" && pRace2 == "Z") ||
      (pRace1 == "Z" && pRace2 == "T")
    ) {
      currentMapPool = allMaps.tvz;
    } else if (
      (pRace1 == "Z" && pRace2 == "P") ||
      (pRace1 == "P" && pRace2 == "Z")
    ) {
      currentMapPool = allMaps.zvp;
    } else if (pRace1 == "Z" && pRace2 == "Z") {
      currentMapPool = allMaps.zvz;
    }

    // SEV - THIS CAN RUN ONCE AFTER currentMapPool IS SET IN THE IF STATEMENT ABOVE
    displayMaps(currentMapPool);
  }
});

// SEV - SETS SELECTED MAP IN LIST AS VISIBLE
function showItem(theItemID) {
  //console.log(theItemID);
  var theObj = document.getElementById(theItemID);
  //theObj.style.display = 'block';
  theObj.setAttribute("style", "display: block;");
}
// SEV - SETS SELECTED MAP IN LIST AS VISIBLE
function hideItem(theItemID) {
  //console.log(theItemID);
  var theObj = document.getElementById(theItemID);
  //theObj.style.display = 'none';
  theObj.setAttribute("style", "display: none;");
}

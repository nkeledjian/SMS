// var maps = require("./maps.js")

var pvpMaps = [
  {
    name: "Korhal City",
    url: "https://i.imgur.com/aYUflfW.jpg"
  },
  {
    name: "Abyssal Caverns",
    url: "https://i.imgur.com/bAhCSld.jpg"
  },
];

var pvtMaps = [
  {
    name: "Backwater Gulch",
    url: "https://i.imgur.com/X6OEBdu.jpg"
  },
  {
    name: "Central Protocol",
    url: "https://imgur.com/En33iIu.jpg"
  }
];

var tvtMaps = [
  {
    name: "Cerulean Fall",
    url: "https://imgur.com/kkZ9Kwf.jpg"
  },
  {
    name: "Daedalus Point",
    url: "https://imgur.com/ElBw4Nq.jpg"
  }
];

var tvzMaps = [
  {
    name: "Ephemeron LE",
    url: "https://imgur.com/utF5AtO.jpg"
  },
  {
    name: "Expedition Lost",
    url: "https://imgur.com/99e9mis.jpg"
  }
];

var zvpMaps = [
  {
    name: "Incineration Zone",
    url: "https://imgur.com/h3lSeaS.jpg"
  }
];

var zvzMaps = [
  {
    name: "Jungle Basin",
    url: "https://imgur.com/Ij6EXad.jpg"
  }
];

var newRoundData = {};
var selectedMapsPool = [];

var roundType, p1name, p2name, pRace1, pRace2, bestOutOf, p1TotalVetoes, p2TotalVetoes, totalSelectVotes, totalVetoVotes, voteTimer;

p1TotalVetoes = 3
p2TotalVetoes = 3
totalSelectVotes = 0
totalVetoVotes = 0

const DOM = {
  p1SelectVote: document.querySelector("#p1-select-vote"),
  p1VetoVote: document.querySelector("#p1-veto-vote"),
  p2SelectVote: document.querySelector("#p2-select-vote"),
  p2VetoVote: document.querySelector("#p2-veto-vote"),
  start: document.querySelector("#go")
}

function voteCountChecker() {
  if(totalSelectVotes == 1 || totalSelectVotes == 2) {
    // run function to push map to Selected Maps Pool
    // pushCurrentMap()
  }

  if((totalVetoVotes == 1 || totalVetoVotes == 2) || (totalSelectVotes == 1 && totalVetoVotes == 1)) {
    // run function to slice map from current map pool object
    // tossCurrentMap()
  }
}

function playerVotesChecker() {
  // Capture player votes
  DOM.p1SelectVote.addEventListener("click", function() {
    totalSelectVotes++
    console.log(totalSelectVotes, "select vote count")
    console.log(`player 1 ${p1name} chose select`)
  })
  DOM.p1VetoVote.addEventListener("click", function() {
    totalVetoVotes++
    console.log(totalVetoVotes, "veto vote count")
    console.log(`player 1 ${p1name} chose veto`)
  })
  DOM.p2SelectVote.addEventListener("click", function() {
    totalSelectVotes++
    console.log(totalSelectVotes, "select vote count")
    console.log(`player 2 ${p2name} chose select`)
  })
  DOM.p2VetoVote.addEventListener("click", function() {
    totalVetoVotes++
    console.log(totalVetoVotes, "veto vote count")
    console.log(`player 2 ${p2name} chose veto`)
  })
  voteTimer = setInterval(function() {
    voteCountChecker()
    }, 10000)

}

function displayMaps(mapPool) {
  mapPool.forEach(map => {
    var markup = 
      `
      <div class="card">
        <div class="card-body"
        <h2 style="text-align: center; font-size: 30px;">${map.name}</h2>
        <img src=${map.url} style="display: block; width: 300px; height: 300px; margin-left: auto; margin-right: auto;"></img>
        </div>
      </div>
      `;
      document
        .getElementById("map-info")
        .insertAdjacentHTML("beforeend", markup);
  });
}

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
    if (pRace1 == "P" && pRace2 == "P") {
      displayMaps(pvpMaps);
    } else if (
      (pRace1 == "P" && pRace2 == "T") ||
      (pRace1 == "T" && pRace2 == "P")
    ) {
      displayMaps(pvtMaps);
    } else if (pRace1 == "T" && pRace2 == "T") {
      displayMaps(tvtMaps);
    } else if (
      (pRace1 == "T" && pRace2 == "Z") ||
      (pRace1 == "Z" && pRace2 == "T")
    ) {
      displayMaps(tvzMaps);
    } else if (
      (pRace1 == "Z" && pRace2 == "P") ||
      (pRace1 == "P" && pRace2 == "Z")
    ) {
      displayMaps(zvpMaps);
    } else if (pRace1 == "Z" && pRace2 == "Z") {
      displayMaps(zvzMaps);
    }
    
    playerVotesChecker()
  }
});



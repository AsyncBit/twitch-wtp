let mute = false;
let auto = true;
let per = "All";
let language = "en";
let botuser = "";
let pokemon;
let pokeDex = "true";
let heightTxt = "Height";
let weightTxt = "Weight";
let foundByTxt = "Found By";
let wasRightTxt = "You Was Right";

let autoWtp = false;
let isWtpSolved = false;
let isRunning = false;
let min = 1;
let max = 151;

let resource;
let ext;
let rType = "animated";
let cry = true;
let pokemonID;
let tShow = true;

// Mine
let pokeNum = 0;
let currentName = "";
let currentPokemon = {};

function getRandomNumber(max) {
  let randNumber = Math.floor(Math.random() * max) + 1;
  var amountOfZeros = getAmoutOfZeros(randNumber);
  return amountOfZeros + randNumber;
}

function getAmoutOfZeros(number) {
  if (number < 10) {
    return "00";
  } else if (number >= 10 && number < 100) {
    return "0";
  } else {
    return "";
  }
}

function startWtp(command) {
  if (isRunning) resetWtp();

  isWtpSolved = false;
  isRunning = true;

  if (rType === "original") {
    resource = "original";
    ext = "png";
  } else {
    resource = "animated";
    ext = "gif";
  }

  if (command == "wtp") {
    pokeNum = getRandomNumber(151);
  }
  if (command == "wtp2") {
    pokeNum = getRandomNumber(252);
  }

  currentName = pokemonList[pokeNum].name.toLowerCase().replaceAll(/\s/g, "");
  currentPokemon = pokemonList[pokeNum];
  console.log(currentName);

  document.getElementById("ball").style.visibility = "visible";

  document.getElementById("ballVid").play();
  if (!mute) {
    document.getElementById("who-that-pokemon-audio").play();
  }
}

function stopVid() {
  document.getElementById("ball").style.visibility = "hidden";
  showBlurredImage();
  console.log("HIDE");
}

function showBlurredImage() {
  let dittoNumber = 0;
  if (pokeNum == 132) {
    if (command == "wtp") {
      dittoNumber = getRandomNumber(151);
    }
    if (command == "wtp2") {
      dittoNumber = getRandomNumber(251);
    }
    if (command == "wtp3") {
      dittoNumber = getRandomNumber(386);
    }
    if (command == "wtp4") {
      dittoNumber = getRandomNumber(493);
    }
  }
  let blurredImage = document.createElement("img");
  if (pokeNum == 132) {
    blurredImage.src = "./wtp/assets/pokemons/" + dittoNumber + ".gif";
  } else {
    blurredImage.src = "./wtp/assets/pokemons/" + pokeNum + ".gif";
  }
  blurredImage.className = "blurred";
  blurredImage.id = "pokemon-image";

  let parentElement = document.getElementById("video-holder");
  parentElement.appendChild(blurredImage);
}

function giveUp() {
  guess(currentName);
}

function skipWtp() {
  resetWtp();
  startGame();
}

// message, user
function guess(x, n) {
  // x = guessedName
  // n = usename of user that guessed
  https: console.log(x);
  console.log(n);
  console.log("currentName");
  console.log(currentName);
  let guessedName = x.toLowerCase().replaceAll(/\s/g, "");
  console.log("guessedName");
  console.log(guessedName);
  if (guessedName == currentName) {
    isWtpSolved = true;
    currentName = "";
    document.getElementById("pokemon-image").className = "";
    ComfyJS.Say("Good job " + n + ". You guessed that it was " + guessedName);
    if (currentPokemon.pokedex != null) {
      ComfyJS.Say("Pokédex: " + currentPokemon.pokedex);
    }
    if (wtpCorrectWebhook != null) {
      fetch(wtpCorrectWebhook, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: n,
          iswtproyale: false,
        }),
      });
    }
    setTimeout(function () {
      resetWtp();
    }, 3000);
  }
}

function resetWtp() {
  if (autoWtp) {
    document.getElementById("pokemon-image").remove();
    startWtp("wtp");
  } else {
    isWtpSolved = false;
    isRunning = false;
    gameRunning = false;
    document.getElementById("pokemon-image").remove();
  }
}

function stopGame() {
  location.reload();
}

let autoStart = false;

if (autoStart) {
  startGame();
}

function stopAuto() {
  auto = false;
  resetWtp();
}

function startAuto() {
  auto = true;
  startGame();
}

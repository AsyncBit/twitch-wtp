let currentQuote = {};
let isTbbtSolved = true;

let textColor = "black";

const queryStringTbbt = window.location.search;
const urlParamsTbbt = new URLSearchParams(queryStringTbbt);

if (urlParamsTbbt.has("color")) {
  textColor = urlParamsTbbt.get("color");
} else {
  textColor = "black";
}

function getRandomTbbtNumber() {
  let randNumber = Math.floor(Math.random() * 20) + 1;
  var amountOfZeros = getAmoutOfZeros(randNumber);
  return amountOfZeros + randNumber;
}

const playTbbt = () => {
  if (isRunning) resetTbbt();

  isTbbtSolved = false;
  isRunning = true;

  document.getElementById("text-holder").style.visibility = "visible";
  console.log("Now playing tbbt");
  currentQuote = tbbtQuotes[getRandomTbbtNumber()];

  document.getElementById("text-holder").innerHTML = currentQuote.quote;
  document.getElementById(
    "text-holder"
  ).style = `color: ${textColor}; font-family: 'Odibee Sans', cursive; font-size: 42px; max-width: 600px; word-break: break-word;`;
};

const guessTbbt = (guessedChar, name) => {
  let guessedName = guessedChar.toLowerCase().replaceAll(/\s/g, "");
  console.log(guessedName);
  console.log(currentQuote.answer);
  if (guessedName == currentQuote.answer) {
    isTbbtSolved = true;
    currentGame = null;
    isRunning = false;

    document.getElementById("text-holder").innerHTML = "";
    document.getElementById("text-holder").style.visibility = "hidden";

    if (currentQuote.hasSound) {
      document.getElementById("dynamic-audio").src =
        "./tbbt/sounds/" + currentQuote.id + ".mp3";
      document.getElementById("dynamic-audio").play();
    }

    ComfyJS.Say("Congratulations " + name + ". It was " + guessedName + "!!!");
    resetTbbt();
  }
};

const resetTbbt = () => {
  document.getElementById("text-holder").innerHTML = "";
  isTbbtSolved = true;
  currentGame = null;
  isRunning = false;
  gameRunning = false;
};

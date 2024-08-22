let channel = "";
let wtpCorrectWebhook = "";
let fullscreen = false;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (urlParams.has("channel")) {
  channel = urlParams.get("channel");
  console.log("Configured channel variable");
} else {
  channel = "";
}

if (urlParams.has("fullscreen")) {
  fullscreen = true;
  console.log("Configured fullscreen variable");
} else {
  fullscreen = false;
}

if (urlParams.has("wtpwebhook")) {
  wtpCorrectWebhook = urlParams.get("wtpwebhook");
} else {
  wtpCorrectWebhook = null;
}

if (urlParams.has("token")) {
  ComfyJS.Init(channel, urlParams.get("token"));
  console.log("Channel Send");
} else {
  ComfyJS.Init(channel);
  console.log("Channel Not Send");
}

let gameRunning = false;

const playGame = (game, callbackFunc, gameProps) => {
  console.log("Play game");
  if (gameRunning) {
    return;
  }
  gameRunning = true;
  switch (game) {
    case WTP:
      console.log("Play WTP");
      currentGame = WTP;
      callbackFunc(gameProps);
      break;
    case WTPROYAL:
      console.log("Play WTP");
      currentGame = WTPROYAL;
      callbackFunc(gameProps);
      break;
    case WTM:
      console.log("Play WTM");
      currentGame = WTM;
      callbackFunc(gameProps);
      break;
    case TBBT:
      console.log("Play TBBT");
      currentGame = TBBT;
      callbackFunc();
      break;
    case SCRAMBLE:
      console.log("Play SCARMBLE");
      currentGame = SCRAMBLE;
      callbackFunc();
      break;
    default:
      return;
  }
};

const resetGame = (game, callbackFunction) => {
  callbackFunction();
  gameRunning = false;
};

const skipGame = (game, callbackFunction) => {
  callbackFunction();
};

const WTP = Symbol("wtp");
const WTPROYAL = Symbol("wtproyal");
const WTM = Symbol("wtm");
const TBBT = Symbol("tbbt");
const SCRAMBLE = Symbol("scramble");

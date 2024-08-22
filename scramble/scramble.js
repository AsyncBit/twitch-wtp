let isScrambleSolved = false;
let currentString = "";

function playScramble() {
  isScrambleSolved = false;

  const randomString =
    wordlist[Math.floor(Math.random() * (wordlist.length - 1)) + 1];
  let shuffled = randomString;

  while (randomString == shuffled) {
    shuffled = randomString
      .split("")
      .sort(function () {
        return 0.5 - Math.random();
      })
      .join("");
  }

  currentString = randomString;
  console.log("randomString");
  console.log(randomString);
  console.log("shuffled");
  console.log(shuffled);

  ComfyJS.Say(
    `It's scramble time. QUICK!! Enter the word in chat: \"${shuffled}\"`
  );
}

function guessScramble(guess, name) {
  if (currentString == guess) {
    ComfyJS.Say(`Good job ${name}! The shuffled word was ${currentString}`);
    gameRunning = false;
    isScrambleSolved = true;
  }
}

function resetScramble() {
  currentString = "";
  gameRunning = false;
  isScrambleSolved = true;
}

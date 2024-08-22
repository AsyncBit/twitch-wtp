function playRPSLS(p1Name, p2Name) {
  let p1Win = false;
  let tie = false;
  let p1Choise = Math.floor(Math.random() * 5) + 1;
  let p2Choise = Math.floor(Math.random() * 5) + 1;

  if (p1Choise == p2Choise) {
    tie = true;
  }
  if (p1Choise == 1) {
    if (p2Choise == 3 || p2Choise == 4) {
      p1Win = true;
    } else {
      p1Win = false;
    }
  } else if (p1Choise == 2) {
    if (p2Choise == 1 || p2Choise == 5) {
      p1Win = true;
    } else {
      p1Win = false;
    }
  } else if (p1Choise == 3) {
    if (p2Choise == 2 || p2Choise == 4) {
      p1Win = true;
    } else {
      p1Win = false;
    }
  } else if (p1Choise == 4) {
    if (p2Choise == 2 || p2Choise == 5) {
      p1Win = true;
    } else {
      p1Win = false;
    }
  } else if (p1Choise == 5) {
    if (p2Choise == 1 || p2Choise == 3) {
      p1Win = true;
    } else {
      p1Win = false;
    }
  }

  if (tie) {
    ComfyJS.Say(
      p1Name +
        " throws down " +
        mapping[p1Choise - 1] +
        ". " +
        p2Name +
        " throws down " +
        mapping[p2Choise - 1] +
        ". " +
        " It's a TIE!!"
    );
  } else {
    if (p1Win) {
      ComfyJS.Say(
        p1Name +
          " throws down " +
          mapping[p1Choise - 1] +
          ". " +
          p2Name +
          " throws down " +
          mapping[p2Choise - 1] +
          ". " +
          mapping[p1Choise - 1].toUpperCase() +
          " WINS!! " +
          p1Name +
          " is the champion!"
      );
    } else {
      ComfyJS.Say(
        p1Name +
          " throws down " +
          mapping[p1Choise - 1] +
          ". " +
          p2Name +
          " throws down " +
          mapping[p2Choise - 1] +
          ". " +
          mapping[p2Choise - 1].toUpperCase() +
          " WINS!! " +
          p2Name +
          " is the champion!"
      );
    }
  }
}

let mapping = ["rock", "paper", "scissors", "lizard", "spock"];

/*
winnig situation:

ROCK      ->  SCISSORS
ROCK      ->  LIZARD
PAPER     ->  ROCK
PAPER     ->  SPOCK
SCISSORS  ->  PAPER
SCISSORS  ->  LIZARD
LIZARD    ->  PAPER
LIZARD    ->  SPOCK
SPOCK     ->  ROCK
SPOCK     ->  SCISSORS

Rock    - 1
Paper   - 2
Sissorc - 3
Lizard  - 4
Spock   - 5

1 -> 3
1 -> 4
2 -> 1
2 -> 5
3 -> 2
3 -> 4
4 -> 2
4 -> 5
5 -> 1
5 -> 3

*/

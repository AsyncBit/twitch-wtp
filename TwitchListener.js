let currentGame = null;

ComfyJS.onCommand = (user, command, message, flags, extra) => {
  console.log("Command: " + command);
  if (!fullscreen) {
    // WTP
    if (
      (flags.broadcaster && command === "wtp") ||
      (flags.mod && command === "wtp")
    ) {
      playGame(WTP, startWtp, "wtp");
    }
    if (
      (flags.broadcaster && command === "wtp2") ||
      (flags.mod && command === "wtp2")
    ) {
      playGame(WTP, startWtp, "wtp2");
    }
    if (
      (flags.broadcaster && command === "wtp3") ||
      (flags.mod && command === "wtp3")
    ) {
      playGame(WTP, startWtp, "wtp3");
    }
    if (
      (flags.broadcaster && command === "wtp4") ||
      (flags.mod && command === "wtp4")
    ) {
      playGame(WTP, startWtp, "wtp4");
    }
    if (
      (flags.broadcaster && command === "resetwtp") ||
      (flags.mod && command === "resetwtp")
    ) {
      resetGame(WTP, resetWtp);
    }
    if (
      (flags.broadcaster && command === "skipwtp") ||
      (flags.mod && command === "skipwtp")
    ) {
      skipGame(WTP, skipWtp);
    }

    // WTM
    if (
      (flags.broadcaster && command === "wtm") ||
      (flags.mod && command === "wtm")
    ) {
      playGame(WTM, startWtm, "wtm");
    }

    if (
      (flags.broadcaster && command === "resetwtm") ||
      (flags.mod && command === "resetwtm")
    ) {
      resetGame(WTM, resetWtm);
    }

    // TBBT
    if (
      (flags.broadcaster && command === "tbbt") ||
      (flags.mod && command === "tbbt")
    ) {
      playGame(TBBT, playTbbt, null);
    }
    if (
      (flags.broadcaster && command === "resettbbt") ||
      (flags.mod && command === "resettbbt")
    ) {
      resetGame(TBBT, resetTbbt);
    }
  } else if (fullscreen) {
    // WTPROYAL
    if (
      (flags.broadcaster && command === "wtproyale") ||
      (flags.mod && command === "wtproyale")
    ) {
      playGame(WTPROYAL, startWtpRoyal, "wtproyale");
    }
    if (
      (flags.broadcaster && command === "resetwtproyale") ||
      (flags.mod && command === "resetwtproyale")
    ) {
      resetGame(WTPROYAL, resetWtpRoyal, "resetwtproyale");
    }
  }

  //RPSLS
  if (command === "rpsls") {
    let p2Name;
    if (message && message.length > 0) {
      p2Name = message.split(" ")[0];
    } else {
      p2Name = user;
    }
    playRPSLS(user, p2Name);
  }

  //scramble
  if (command === "wordmix") {
    playGame(SCRAMBLE, playScramble);
  }
  if (
    (flags.broadcaster && command === "resetscramble") ||
    (flags.mod && command === "resetscramble")
  ) {
    resetScramble();
  }
};

ComfyJS.onChat = (user, message, flags, self, extra) => {
  console.log(message);
  if (!isWtpSolved && currentGame == WTP) {
    message = message.replace("?", "");
    message = message.replace("@", "");
    message = message.split(" ");

    if (per === "All") {
      guess(message[0].toLowerCase(), user);
    } else if (per === "Subs") {
      if (flags.subscriber || flags.mod || flags.broadcaster) {
        guess(message[0].toLowerCase(), user);
      }
    } else if (per === "Vips" || flags.mod || flags.broadcaster) {
      if (flags.vip) {
        guess(message[0].toLowerCase(), user);
      }
    } else if (per === "Vip/Subs") {
      if (flags.vip || flags.subscriber || flags.mod || flags.broadcaster) {
        guess(message[0].toLowerCase(), user);
      }
    }
  }

  /* if (!isWtmSolved && currentGame == WTM) {
    message = message.replace("?", "");
    message = message.replace("@", "");
    message = message.split(" ");

    if (per === "All") {
      guessWtm(message[0].toLowerCase(), user);
    } else if (per === "Subs") {
      if (flags.subscriber || flags.mod || flags.broadcaster) {
        guessWtm(message[0].toLowerCase(), user);
      }
    } else if (per === "Vips" || flags.mod || flags.broadcaster) {
      if (flags.vip) {
        guessWtm(message[0].toLowerCase(), user);
      }
    } else if (per === "Vip/Subs") {
      if (flags.vip || flags.subscriber || flags.mod || flags.broadcaster) {
        guessWtm(message[0].toLowerCase(), user);
      }
    }
  } */

  if (royalActive && currentGame == WTPROYAL) {
    message = message.replace("?", "");
    message = message.replace("@", "");
    message = message.split(" ");

    guessRoyal(message[0].toLowerCase(), user);
  }

  if (!isTbbtSolved && currentGame == TBBT) {
    // TBBT
    message = message.replace("?", "");
    message = message.replace("@", "");
    message = message.split(" ");

    guessTbbt(message[0].toLowerCase(), user);
  }

  // Scramble
  if (!isScrambleSolved && currentGame == SCRAMBLE) {
    message = message.replace("?", "");
    message = message.replace("@", "");
    message = message.split(" ");

    guessScramble(message[0].toLowerCase(), user);
  }
};

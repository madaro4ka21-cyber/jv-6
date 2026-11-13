function startCountdown(seconds) {
  console.log(seconds);

  const timerId = setInterval(() => {
    seconds--;

    if (seconds > 0) {
      console.log(seconds);
    } else {
      console.log("Время вышло!");
      clearInterval(timerId);
    }
  }, 1000);
}

startCountdown(7);



// function typeText(text) {
//   let index = 0;

//   function printNextChar() {
//     if (index < text.length) {
//       console.log(text[index]);
//       index++;
//       setTimeout(printNextChar, 200);
//     }
//   }

//   printNextChar();
// }

// typeText("Привет");


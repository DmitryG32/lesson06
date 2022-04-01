function game() {
  const num = 238;
  let count = prompt("Угадай число от 1 до 100");

  const check = function (countNum) {
    if (count !== null) {
      if (countNum > num) {
        count = prompt("Загаданное число больше, попробуй снова");
        check(count);
      } else if (countNum < num) {
        count = prompt("Загаданное число меньше, попробуй снова");
        check(count);
      } else if (countNum == num) {
        alert("Вы угадали!");
      } else {
        count = prompt("Введи число!");
        check(count);
      }
    } else {
      alert("Конец");
    }
  };

  check(count);
}

game();

console.log("Конец");

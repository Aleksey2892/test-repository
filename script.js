while (true) {
  let name = prompt("Напиши свое имя или нажми отмена, человек");
  if (name === null) {
    alert("Не сильно то и хотелось твое имя знать, будешь просто человек!");
    document.querySelector(".name").textContent = "Человек";
    break;
  } else if (name.length) {
    name = name.toLocaleUpperCase();
    document.querySelector(".name").textContent = `${name},`;
    break;
  }
}
let health = 100;

const badAnswer = function () {
  if (health > 35) {
    health -= 35;
    alert("Не угадал. -30hp!");
    return (document.querySelector(".health__num").textContent = `${health}`);
  } else {
    alert("Конец.");
    document.querySelector(".title-img").style.display = "none";
    document.querySelector(".title-img2").style.display = "block";
    document.querySelector(".main-test").style.display = "none";
    document.querySelector(".restart").style.display = "block";
  }
};

document.querySelector(".restart").onclick = function () {
  location.reload();
};

const goodAnswer = function () {
  if (health < 85) {
    health += 15;
    alert("+15hp");
    return (document.querySelector(".health__num").textContent = `${health}`);
  }
};

document.querySelector(".start1").onclick = function () {
  document.querySelector(".start1").style.display = "none";
  document.querySelector(".text").style.display = "none";
  document.querySelector(".instruction").style.display = "block";
  document.querySelector(".start2").style.display = "inline";
  document.querySelector(".health").style.display = "block";

  document.querySelector(".back").style.display = "inline";
};

document.querySelector(".start2").onclick = function () {
  document.querySelector(".start2").style.display = "none";
  document.querySelector(".back").style.display = "none";
  document.querySelector(".instruction").style.display = "none";
  document.querySelector(".quest1").style.display = "block";
  document.querySelector(".qu1").style.display = "inline";
};

document.querySelector(".back").onclick = function () {
  badAnswer();
  document.querySelector(".back").style.display = "none";
};

document.querySelector(".qu1").onclick = function () {
  while (true) {
    const qu1 = Number(prompt("Напиши цифру"));
    if (qu1 === null) {
      badAnswer();
      break;
    } else if (qu1 === 2) {
      goodAnswer();
      document.querySelector(".qu1").style.display = "none";
      document.querySelector(".quest1").style.display = "none";
      document.querySelector(".qu2").style.display = "inline";
      document.querySelector(".quest2").style.display = "block";
      break;
    } else if (qu1 !== 2) {
      badAnswer();
      break;
    }
  }
};

document.querySelector(".qu2").onclick = function () {
  while (true) {
    const qu2 = Number(prompt("Напиши цифру"));
    if (qu2 === null) {
      badAnswer();
      break;
    } else if (qu2 === 5) {
      goodAnswer();
      document.querySelector(".qu2").style.display = "none";
      document.querySelector(".quest2").style.display = "none";
      document.querySelector(".qu3").style.display = "inline";
      document.querySelector(".quest3").style.display = "block";
      document.querySelector(".img3").style.display = "block";
      break;
    } else if (qu2 !== 5) {
      badAnswer();
      break;
    }
  }
};

document.querySelector(".qu3").onclick = function () {
  while (true) {
    const qu3 = Number(prompt("Напиши цифру"));
    if (qu3 === null) {
      badAnswer();
      break;
    } else if (qu3 === 31) {
      goodAnswer();
      document.querySelector(".qu3").style.display = "none";
      document.querySelector(".quest3").style.display = "none";
      document.querySelector(".qu4").style.display = "inline";
      document.querySelector(".quest4").style.display = "block";
      document.querySelector(".img3").style.display = "none";

      break;
    } else if (qu3 !== 31) {
      badAnswer();
      break;
    }
  }
};

document.querySelector(".qu4").onclick = function () {
  while (true) {
    const qu4 = Number(prompt("Напиши цифру"));
    if (qu4 === null) {
      badAnswer();
      break;
    } else if (qu4 === 25) {
      goodAnswer();
      document.querySelector(".qu4").style.display = "none";
      document.querySelector(".quest4").style.display = "none";
      document.querySelector(".qu5").style.display = "inline";
      document.querySelector(".quest5").style.display = "block";

      break;
    } else if (qu4 !== 25) {
      badAnswer();
      break;
    }
  }
};

const quest5 = "вечно";
document.querySelector(".qu5").onclick = function () {
  while (true) {
    let qu5 = prompt("Дай ответ одним словом");
    qu5 = qu5.toLowerCase();
    if (qu5 === quest5) {
      goodAnswer();
      document.querySelector(".qu4").style.display = "none";
      document.querySelector(".quest4").style.display = "none";
      document.querySelector(".qu5").style.display = "inline";
      document.querySelector(".quest5").style.display = "block";
      document.querySelector(".title-img3").style.display = "block";
      document.querySelector(".main-test").style.display = "none";
      document.querySelector(".title-img").style.display = "none";
      document.querySelector(".restart").style.display = "block";

      break;
    } else if (qu5 !== quest5) {
      badAnswer();
      break;
    }
  }
};

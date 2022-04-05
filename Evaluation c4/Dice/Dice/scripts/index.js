//Store the generated number in LocalStorage with key "number".
document.querySelector("#throw_dice").addEventListener("click", function () {
    let x = Math.floor(Math.random() * 6 + 1);
    localStorage.setItem("number", x);
    window.location.href = "display.html";
  });
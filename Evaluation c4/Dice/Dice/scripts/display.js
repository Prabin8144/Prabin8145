//here retrieve the generated number from Localstorage.
var y = localStorage.getItem("number");
  var items = document.querySelector("#show_number");
  if (y == 1) {
    items.innerHTML = y;
    items.style.backgroundColor = "yellow";
    items.style.color = "black";
  } else if (y == 6) {
    items.innerHTML = y;
    items.style.backgroundColor = "green";
  } else {
    items.innerHTML = y;
    items.style.backgroundColor = "red";
  }
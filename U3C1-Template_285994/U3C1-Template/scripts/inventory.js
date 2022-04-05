var DataPr = JSON.parse(localStorage.getItem("products"))


var img = document.getElementById("img")
img.setAttribute("src","this.image")
var h5 = document.getElementById("h2")
h5.innerText = this.name;
 var p1 = document.getElementById("p1")
 p1.innerText = this.price;
 var p2 = document.getElementById("p2")
 p2.innerText = this.type;

document.getElementById("products_data").append(DataPr)




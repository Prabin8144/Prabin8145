//store the products array in localstorage as "products"
document.querySelector("#form").addEventListener("submit" , submitDetails)


let productArr= [];
 function submitDetails(e){
     e.preventDefault();
     var name = document.getElementById("name").value;
     var price = document.getElementById("price").value;
     var type  = document.getElementById("type").value;
     var image = document.getElementById("img").value;

     function submitDetails(name,price,type,image){
         this.name = name;
         this.price = price;
         this.type = type;
         this.image = image;
     }
     let Data = new submitDetails(name,price,type,image)

     productArr.push(Data)

     localStorage.setItem("products",JSON.stringify(productArr))
     console.log(Data)
 }


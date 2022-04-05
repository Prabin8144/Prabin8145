async function showFood(){
    try{
         let res= await fetch(`https://masai-food-api.herokuapp.com/api/meals/india `);
         let data= await res.json();
      //    console.log(data);
         appendFood(data);
    }
    catch(err){
        console.log(err);
    }
}
showFood();

//       idMeal: "52807"
// price: 299
// strMeal: "Baingan Bharta"
// strMealThumb:

let cartArr= JSON.parse(localStorage.getItem("cart"))||[];

function appendFood(data){
console.log(data);
 data[0].meals.map(function(el,index){
  //   console.log(el);
  let div= document.createElement("div");

  let image= document.createElement("img");
  image.src=el.strMealThumb;

  let name= document.createElement("h3");
  name.innerText= el.strMeal;

  let rate= document.createElement("h3");
   rate.innerText= el.price;

  let orderID= document.createElement("h3");
  orderID.innerText= el.idMeal;

  let btn= document.createElement("button");
  btn.textContent= "ADD TO CART"
  btn.addEventListener("click",function(){
      addtocart(el);
  })
   btn.setAttribute("id","addtocart");
  div.append(image,name,rate,orderID,btn)
    menu.append(div)
 })

}
function addtocart(el){
cartArr.push(el);
localStorage.setItem("cart",JSON.stringify(cartArr));
}
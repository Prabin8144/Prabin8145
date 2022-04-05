let cartArr= JSON.parse(localStorage.getItem("cart"));
     //console.log(cartArr);
      
      

     let displayTotal= document.getElementById("total-price");
       
     function appendProduct(cartArr){
         cart.innerText="";
     cartArr.map(function(el,index,array){
            
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
        btn.textContent= "REMOVE";
        btn.addEventListener("click",fun_remove);
        function fun_remove(){
            let part1= array.slice(0,index);
            let part2= array.slice(index+1,array.length);
            part1= part1.concat(part2);
            localStorage.removeItem("cart");
            localStorage.setItem("cart",JSON.stringify(part1));
            data= JSON.parse(localStorage.getItem("cart"));
            document.location.reload();
        }
       
         btn.setAttribute("id","remove");
        div.append(image,name,rate,orderID,btn)
          cart.append(div)

       });
     }
     appendProduct(cartArr);

     function findTotal(cartArr){
         let total= cartArr.reduce(function(acc,curr){
             return acc+curr.price;
         },0);
        //  console.log("Total:",total);
          displayTotal.innerText=`${total}`;
         
     }
     findTotal(cartArr);
const showdata =async  (url)=>{
    try{
      let res = await fetch(url)
      let data = await res.json()
      return data 
    }
    catch(err){
        console.log(err)
    }
  }

  showdata();
 let cartArr = JSON.parse(localStorage.getItem("purchases")) ||[];

  const appenddata = (data,main)=>{
          main.innerHTML = null;

          data[0].vouchers.map((el,index) =>{

            let div = document.createElement("div")

            let img = document.createElement("img");
            img.src = el.image;

            let t = document.createElement("h3")
            t.innerText = el.name;

            let p = document.createElement("h5")
            p.innerText = el.price;


            let btn = document.createElement("button")
            btn.innerText = "Buy";
            btn.addEventListener("click",function(){
              buyvoucher(el)
            });
            btn.setAttribute("id","buy")

            div.append(img,t,p,btn);
            main.append(div)

          });

         
  }
  const buyvoucher = (el)=>{
      cartArr.push(el)
      localStorage.setItem("purchases",JSON.stringify(cartArr));
  }

  export {showdata,appenddata,buyvoucher};
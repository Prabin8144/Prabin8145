let before_element = document.getElementById('products1').querySelector('button');
let before_div = 0;

  // ----------------Fresh Fruits Objects----------------------------------------------------------------------------------------------------------------------
  
  let Papaya = [
    {
        name: "Papaya, Pineapple, Pomegranate"
    },

    {
        name:'Pineapple',
        image:'https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1644844136632_product_5c80d9cbd8b2f755a2d44052_1.jpg',
        volume:'1 PC',
        price: 135, 
    },

    {
        name:"Papaya - Raw",
        image:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1644844136698_product_5c80d9cbd8b2f755a2d4406b_1.jpg",
        volume:"1 KG",
        price: 65, 
    },

    {
        name:"Papaya",
        image:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1644844010855_product_5caef825de0f3b0443a7d9d7_1.jpg",
        volume:"1 KG",
        price: 58 , 
    },

    {
        name:"Peeled Pomegranate",
        image:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1644844013548_product_5d40054847ddec28ec55ba98_1.jpg",
        volume:"500 GMS",
        price: 85, 
    },

    {
        name:"Big Pomegranate",
        image:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/M084Mk1iNVIyK3JRMC83bVh0ZjhWQT09-product_image.jpg",
        volume:"1 KG",
        price: 279, 
    },

    {
        name:"Pomegrante",
        image:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1644844133820_product_5c0e70078d92d07fdfc24835_1.jpg",
        volume:"1 KG",
        price: 240, 
    },

];

  let Banana = [

    {
        name:"Banana, Guava, Sapota",

    },

    {
        name:"Banana Flower",
        image:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/OTVld29wcUY3TWxLdUJsd0RGK1YxZz09-product_image.jpg",
        volume:"1 PC",
        price: 89, 
    },

    {
        name:"Thai Guava",
        image:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1615633256596_product_5c6e4c9d019ca52990ba5856_1.jpg",
        volume:"1 KG",
        price: 120, 
    },

  ];

  let Oranges = [
         
    {
        name:"Oranges, Mosambi",
       
    },

    {
        name:"Oranges",
        image:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1644844135601_product_5c6e7d63019ca52990d5b9b5_1.jpg",
        volume:"1 KG",
        price:180 , 
    },

    {
        name:"Tangerine",
        image:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1644844011026_product_5cc2f5e3d3ffea547621c48d_1.jpg",
        volume:"1 KG",
        price: 312, 
    },
    {
        name:"Sweet Lime",
        image:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1644844135293_product_5c35dbf1b1e6c12dfdc86747_1.jpg",
        volume:"6 PCS",
        price: 135, 
    },

  ];



    let Fruits = [Papaya , Banana , Oranges ];
    localStorage.setItem('PBO',JSON.stringify(Fruits));
    // console.log(Fruits)

// ___________________________________________________________________________________________________________

     // ----------------Fresh Vegetables Objects----------------------------------------------------------------------------------------------------------------------
  
     let Fresh_Vegetables = [
        {
            name: "Cut_&_Packed_Vegetables"
        },

        {
            name:"Sprouts-Mixed",
            image:'https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1644844135069_product_5c282c2ff7e98871f4f8c1f4_1.jpg',
            volume:'1 PACK',
            price: 30, 
        },

        {
            name:"Fresh_Green_Chilli_bajji",
            image:'https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/UjMyRGtDWDB3d2ZIWU9KSFd3MXY4dz09-product_image.jpg',
            volume:'1 PACK',
            price: 35, 
        },

    ];

    
    let Vegetables = [Fresh_Vegetables];
    localStorage.setItem('veg',JSON.stringify(Vegetables));
    // console.log(Vegetables)

// _______________________________________________________________________________________________________________________________________________________

   // ----------------Fresh Herbs Objects----------------------------------------------------------------------------------------------------------------------
  
   let Fresh_Herbs = [
    {
        name: "Chilli, Lemon, Garlic_And_Ginger"
    },

    {
        name:"Peeled_Garlic",
        image:'https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1644844010098_product_5c790174d661476ccea6352e_1.jpg',
        volume:'500 GMS',
        price: 105, 
    },

    {
        name:"Lemon",
        image:'https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/STBGTmtKKzROZWxtLzhqT0c5TTlnUT09-product_image.jpg',
        volume:'8 PCS',
        price: 40, 
    },

  ];

  let Herbs = [Fresh_Herbs];
  localStorage.setItem('herbs',JSON.stringify(Herbs));
//   console.log(Herbs)

 
// ________________________________________________________________________________________________________________________________________________________________________________

      // ----------------Cuts And Sprouts-------------------------------------------------------------------------------------------------------------------
  
      let  Cuts_And_Sprouts = [
        {
            name: "Sprouts"
        },

        {
            name:"Brown_Chana_Sprouts",
            image:'https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/QkE1UFQyelNZa3FlRWp1Q01oUlkxZz09-product_image.jpg',
            volume:'1 PACK',
            price: 39, 
        },

        {
            name:"White_Peas_Sprout",
            image:'https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1615633263641_product_5e6f6a51bcbb711dac2f9af0_1.jpg',
            volume:'1 PACK',
            price: 20, 
        },

    ];

    let Cuts = [ Cuts_And_Sprouts];
    localStorage.setItem('cuts',JSON.stringify(Cuts));
    // console.log(Cuts)


// _________________________________________________________________________________________________________________________________________________________________________




    function display(arr) {
    let main_div = document.getElementById("prds");

        arr.forEach(function(type) {
        type.forEach(function(products,index) {
        if(index === 0){
        let h2 = document.createElement('h2');   
        h2.setAttribute("id" , "h2")             // changes here
        h2.innerText = products.name;
        main_div.append(h2);

                    }else{
                        var div = document.createElement("div");
                        var img = document.createElement("img");
                        img.setAttribute("id","img")
                        var details = document.createElement("div");
                        var name = document.createElement("h4")
                        var quantity = document.createElement("p");
                        var price = document.createElement("h5");
                        var button = document.createElement("button");
                        
        // -------------------Adding all products dynamically.------------------------------------
                        img.src = products.image;
                        name.textContent=products.name;
                        quantity.textContent=products.volume;
                        price.textContent=`₹ ${products.price}`;
                        button.innerText="+ADD"             // changes here
                        details.append(name,quantity,price);
                        quantity.setAttribute("class","quantity");
                        name.setAttribute("class","name");
                        price.setAttribute("class","name")
                        details.setAttribute("id","details")
                        div.append(img,details,button);
                        div.setAttribute("id","divs")
                        document.getElementById("prds").append(div);
                        button.addEventListener('click',moveToCart);
                        div.addEventListener('mouseenter',function(){
                        div.querySelector('h4').style.color = 'green';
                        div.setAttribute('class','transform');
                        })
                        div.addEventListener('mouseleave',function(){
                        div.querySelector('h4').style.color = 'black';
                        div.setAttribute('class','transformBack');
                        })
                    }
                    
            })
        });
        before_div = document.getElementById('prds');
    }

    function displayitems(e,id){
        before_element.style = "none";
        console.log(before_div)
        
        while (before_div.firstChild) {
            before_div.removeChild(before_div.lastChild);
        }

        let btn = e.target;
        btn.style.fontSize = "large";
        btn.style.fontWeight = "bold";
        btn.style.color="rgb(0, 179, 122)";
        before_element = btn;

        let itemsHead = document.getElementById('heading');
        itemsHead.innerText = btn.innerText;
        let data = JSON.parse(localStorage.getItem(id));
        // console.log("Dat:" , data)


        if(data == null){
        let main_div = document.getElementById("prds");
        let h2 = document.createElement('h2');
        h2.innerText = "Not Available Sorry..";
        main_div.append(h2);
        }else{
        display(JSON.parse(localStorage.getItem(id)));
        }
       
    }
    


    display(JSON.parse(localStorage.getItem('PBO')));
    display(JSON.parse(localStorage.getItem('cuts')));
    display(JSON.parse(localStorage.getItem('herbs')));
    display(JSON.parse(localStorage.getItem('veg')));
    

    function moveToCart() {
    location.reload();
    let cart = [];
    let isThere = false;
        
    let price = event.target.parentNode.querySelector('h5').innerText;
    let arr = price.split(" ");
    price = Number(arr[1]);

    let item = {
        name:event.target.parentNode.querySelector('h4').innerText,
        img:event.target.parentNode.querySelector('img').src,
        volume:event.target.parentNode.querySelector('p').innerText,
        price:price,
        qty:1,
        };

        console.log(item);

        cart = JSON.parse(localStorage.getItem('dCart')); 

        if(cart === null){
        console.log('set the cart');
        cart = [item];
        localStorage.setItem('dCart',JSON.stringify(cart));
        }else{
        cart.forEach(function(prd){
        if(prd.name === item.name){
        prd.qty = prd.qty + 1;
        isThere = true;
        } 
            });

            if(isThere == false){
            cart[cart.length]=item;
            localStorage.setItem('dCart',JSON.stringify(cart));
            isThere = false;
            }else{
            localStorage.setItem('dCart',JSON.stringify(cart));
            }
            
        }
        if(JSON.parse(localStorage.getItem('dCart')) != null){
        displayCartItems();
        }
       
    }


    function displayCartItems() {
    let total_price = 0;
    let main_div = document.getElementById('products3')
    // main_div.style.overflow = 'scroll';              // changes here
    let cart = JSON.parse(localStorage.getItem('dCart'));
    console.log(cart);
    
        while (main_div.firstChild) {
        main_div.removeChild(main_div.lastChild);
        }

            let p = document.createElement('p');
            p.innerText = 'Your Cart';
            let ul = document.createElement('ul');
            main_div.append(p);

            cart.forEach(function(prd){
            let li = document.createElement('li');
            li.style.display = 'flex';
            li.style.marginBottom = '25px';
            // li.style.backgroundColor="red"

            let div1 = document.createElement('div');
            // div1.style.width = '40%'                //changes here
            div1.setAttribute("id" , "div1")         // changes here
            // div1.style.backgroundColor = "green"
            
            let h3 = document.createElement('h3');
            h3.innerText = prd.name;
            h3.setAttribute("id" , "H3");           // changes here
            // h3.style.backgroundColor = "blue"
            
            let h5 = document.createElement('h5');
            h5.setAttribute("id" , "H5");            // changes here
            // h5.style.backgroundColor = "green"
            h5.style.fontWeight = 'lighter';
            h5.innerText = prd.volume;

            let div2 = document.createElement('div');
            div2.id = "box";
            // div2.style.width = '15%'              //changes here

            let btn1 = document.createElement('button');
            btn1.id = 'minus';
            btn1.addEventListener('click',function(){
                    
            let name = event.target.parentNode.parentNode.firstChild.querySelector('h3').innerText;

            let cart = JSON.parse(localStorage.getItem('dCart'));

            cart.forEach(function(prd,index){
            if(prd.name == name){
            prd.qty = prd.qty-1;
            if(prd.qty == 0){
            cart.splice(index,1)
                               
            }
            total_price -= prd.price;
            }
            });
            localStorage.removeItem('dCart')
            localStorage.setItem('dCart',JSON.stringify(cart));
            location.reload();
            if(JSON.parse(localStorage.getItem('dCart')).length === 0){
            localStorage.removeItem('dCart')
            }

            })


                let span = document.createElement('span');
                span.id ='val';


                let btn2 = document.createElement('button');
                btn2.id = 'plus';
                btn2.addEventListener('click',function(){
                  
                let name = event.target.parentNode.parentNode.firstChild.querySelector('h3').innerText;

                let cart = JSON.parse(localStorage.getItem('dCart'));

                cart.forEach(function(prd){
                if(prd.name == name){
                prd.qty = prd.qty+1;
                total_price += prd.price;
                }
                });

                localStorage.removeItem('dCart')
                localStorage.setItem('dCart',JSON.stringify(cart));
                location.reload();
                })
                
                span.innerText = prd.qty;
                btn1.innerText = '-';
                btn2.innerText = '+';

                let div3 = document.createElement('div');
                div3.style.width = '20%'
                div3.setAttribute("id" , "div3");
                // div3.style.backgroundColor= "red"

                let h4 = document.createElement('h4');
                h4.innerText = '₹'+ prd.price * prd.qty;

                total_price += prd.price*prd.qty;

                div1.append(h3,h5);
                div2.append(btn1,span,btn2);
                div3.append(h4)
                li.append(div1,div2,div3);
                ul.append(li)
                
            })
                let div4 = document.createElement('div');
                div4.id = 'checkout';
                let checkout_btn = document.createElement('button');
                checkout_btn.innerText = `checkout ₹${total_price}`;
                checkout_btn.setAttribute("class","checkout")

                checkout_btn.addEventListener('click',function(){
                    window.location.href = "manage-payment.html";
                });
                div4.append(checkout_btn);

               main_div.append(ul,div4);
           
    }

    if(JSON.parse(localStorage.getItem('dCart')) != null){
    displayCartItems();
    }
    // -------------------logo redirect to home------------------------------


    document.getElementById("logo").addEventListener("click",redirect);
    function redirect(){
        window.location.href="../index.html"
    }
    //------------------------------adding location;----------------------------

    document.getElementById("location").innerText=JSON.parse(localStorage.getItem("location"));
    document.getElementById("location").addEventListener("click",getLoc);
    function getLoc(){
    var input = prompt("Please enter your location.");
    if(localStorage.getItem("location")==null){
    localStorage.setItem("location",JSON.stringify(input));
    }
    else if(localStorage.getItem("location")!=null){
    var data = localStorage.getItem("location");
    data = JSON.parse(data);
    if(data!=input){
    localStorage.setItem("location",JSON.stringify(input));
    } 
    }
    }
    document.getElementById("cart").addEventListener("click",cart);
    function cart(){
    window.location.href="../pay/pay.html"
    }
        //----------------------------------shops location----------------------------------------

        document.getElementById("head").querySelector("p").innerText=`India > ${JSON.parse(localStorage.getItem("location"))}`

        if(JSON.parse(localStorage.getItem('dCart')) != null){
        var circle = document.getElementById('circle');

        let arr = JSON.parse(localStorage.getItem('dCart'));
        let qty = 0;

        arr.forEach(function(prd){
        qty += prd.qty;
        });

        circle.innerText = qty;
        }else{
        document.getElementById('circle').style.display = "none";
        }
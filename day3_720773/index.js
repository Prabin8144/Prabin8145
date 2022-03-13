//This information should be stored in 4 different objects. All of this objects should be stored in localstorage in advance. Their localstorage key should be their respective names.  For e.g Scope data will be stored in LocalStorage with key as "scope". ( Note: no capital letter in key )

//Information should be retrieved from localstorage only, avoid hard coding data.

   
var scopepoint = {
    1:"there are two types of scope normally",
    2:"local scope and global scope",
    3:"local scope is used with in an function only",
    4:"where as global scope can ised any where in a function.",
    5:"global takes common variable ",
  }

 
  localStorage.setItem("ket",JSON.stringify(scopepoint));


  function scopebtn(){
      
    document.querySelector("#show1").innerHTML = null;

    var c = JSON.parse(localStorage.getItem("ket"));
  
    let html_const = "<ul>";
    for(let i =1; i<=Object.keys(prototype).length;i++){
      html_const += `<li>${c[i]}</li>`;
    }
    html_const+="</ul>";
    document.querySelector("#show1").innerHTML = html_const;

  }

  var hoisting = {
    1:"there are three types of hoisting normally",
    2:"function hoisting",
    3:"hoisting is used with in an function only",
    4:"Block hoisting",
    5:"local hoisting ",
  };
  
 
 localStorage.setItem("ket1",JSON.stringify(hoisting));


 function hoistingbtn(){
     
   document.querySelector("#show1").innerHTML = null;

   var c = JSON.parse(localStorage.getItem("ket1"));
 
   let html_hoisting = "<ul>";
   for(let i =1; i<=Object.keys(prototype).length;i++){
     html_hoisting += `<li>${c[i]}</li>`;
   }
   html_hoisting+="</ul>";
   document.querySelector("#show1").innerHTML = html_hoisting;

 };


 var cfunction = {
    1:"global constructor",
    2:"local constructor",
    3:"function condtructor",
    4:"it is high clean in code",
    5:"block constructor ",
  };
 
 
 localStorage.setItem("ket2",JSON.stringify(cfunction));


 function cfunctionbtn(){
     
   document.querySelector("#show1").innerHTML = null;

   var c = JSON.parse(localStorage.getItem("ket2"));
 
   let html_const = "<ul>";
   for(let i =1; i<=Object.keys(prototype).length;i++){
     html_const += `<li>${c[i]}</li>`;
   }
   html_const+="</ul>";
   document.querySelector("#show1").innerHTML = html_const;

 };


 var prototype = {
    1:"local prototype",
    2:"function prototype",
    3:"local scope is used with in an function only",
    4:"prototype is very needed",
    5:"prototype is declared in function ",
  }
 
 
 localStorage.setItem("ket3",JSON.stringify(prototype));


 function prototypebtn(){
     
   document.querySelector("#show1").innerHTML = null;

   var c = JSON.parse(localStorage.getItem("ket3"));
 
   let html_const = "<ul>";
   for(let i =1; i<=Object.keys(prototype).length;i++){
     html_const += `<li>${c[i]}</li>`;
   }
   html_const+="</ul>";
   document.querySelector("#show1").innerHTML = html_const;

 };



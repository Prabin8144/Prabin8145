    // trying ......... i am try to my way but ia will gib=ve me the idia...........
    
// var login = JSON.parse(localStorage.getItem("Detail"))

// document.querySelector("#form").addEventListener("submit",submitDetails)

// let formArr = JSON.parse(localStorage.getItem("Detail"))||[];

// function submitDetails(e){
//     e.preventDefault();

   
//      var mail1 = document.getElementById("mail").value;
//      var pass1 = document.getElementById("pass").value;
//  console.log(mail1,pass1)
//      function submitDetails(mail1,pass1){
        
//          this.mail1= mail1;
//          this.pass1 = pass1;
//      }

//      let Data = new submitDetails(mail1,pass1)

//      formArr.push(Data)

//      localStorage.setItem("Detail", JSON.stringify(formArr))
//      console.log(Data)
//  }
// ending...........................

document.getElementById("submit").addEventListener("click",function(e,mail1,pass1){
    e.preventDefault()
    var mail1 = document.getElementById("mail").value;
    var pass1 = document.getElementById("pass").value;
    console.log(mail1,pass1)
if(mail1=="prabin@gmail.com" && pass1=="1234"){

    alert("login succesfull")
   window.location.href  = "index.html"
}
else{
    alert("invalid Credentials")
}
})
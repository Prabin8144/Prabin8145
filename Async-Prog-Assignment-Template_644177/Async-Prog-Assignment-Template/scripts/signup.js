document.querySelector("#form").addEventListener("submit",submitDetails)

let formArr = JSON.parse(localStorage.getItem("Detail"))||[];

function submitDetails(e){
    e.preventDefault();

     var name = document.getElementById("name").value;
     var phone = document.getElementById("contact").value;
     var mail = document.getElementById("mail").value;
     var pass = document.getElementById("pass").value;

     function submitDetails(name,phone,mail,pass){
         this.name = name;
         this.phone = phone;
         this.mail= mail;
         this.pass = pass;
     }

     let Data = new submitDetails(name,phone,mail,pass)

     formArr.push(Data)

     localStorage.setItem("Detail", JSON.stringify(formArr))
     console.log(Data)
}
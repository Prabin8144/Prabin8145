document.querySelector("#form").addEventListener("submit",formSubmit);
// if(todoArr==null){ 
// var todoArr=[];
// }else{
var todoArr = JSON.parse(localStorage.getItem("todoLocal"))||[];
// }
function formSubmit(event){
    event.preventDefault();
    var name = document.querySelector("#name").value;
    var qty = document.querySelector("#qty").value;
    var priority = document.querySelector("#priority").value;

    var todoObj ={
        name: name,
        qty: qty,
        priority: priority,
    };

    todoArr.push(todoObj);
    localStorage.setItem("todoLocal",JSON.stringify(todoArr));

}
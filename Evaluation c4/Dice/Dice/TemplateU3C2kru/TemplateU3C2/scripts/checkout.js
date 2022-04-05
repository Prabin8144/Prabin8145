document.querySelector("form").addEventListener("submit",function(event){
    event.preventDefault();

    alert("Your Order Accepted !");
    orderCooked();
    orderReady();
    orderOut();
    orderDelivered();
})

function orderCooked(){
    setTimeout(function(){
        alert("Your order is accepted 3 seconds");
    },3000)
}

function  orderReady(){
    setTimeout(function(){
        alert("Your order is being cooked 8 seconds ");
    },8000)
}

function orderOut(){
    setTimeout(function(){
        alert("Your order is ready 10 seconds ");
    },10000)
}
function orderDelivered(){
    setTimeout(function(){
        alert("Order out for delivery 12 seconds");
    },12000)
}

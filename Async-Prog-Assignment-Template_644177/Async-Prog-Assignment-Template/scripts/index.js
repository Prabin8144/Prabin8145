

var imageArr=["https://images.unsplash.com/photo-1565717993397-09353e73e4fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1646600444737-a832d0b0854d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60","https://media.istockphoto.com/photos/dark-blue-grunge-background-picture-id170958625?k=20&m=170958625&s=612x612&w=0&h=qTd5jKfcxb9Q66dUagGcd4kVwFK5JqfeLASH9jOtb9Y=","https://media.istockphoto.com/photos/green-background-3d-render-picture-id1226478926?k=20&m=1226478926&s=612x612&w=0&h=r5NSA8Ajb6AYYT95loGNVLYcws7w8wO6KvepPrvv40U=","https://media.istockphoto.com/photos/modern-interior-with-orange-colored-leather-armchair-sconce-coffee-picture-id1296444787?k=20&m=1296444787&s=612x612&w=0&h=bKLnH5UgY5fv8PnXe4q4Fcs5vHRBMYQAcpDg70L_wew=","https://media.istockphoto.com/photos/empty-home-interior-wall-mockup-picture-id1155326285?k=20&m=1155326285&s=612x612&w=0&h=i-fMnR8c5qqCzQ2oVtKY6s4EjL9dagRxDx6khUFGZUo="]

var container = document.getElementById("slideshow")

let i =1;
// jadi 1st image jalde dekheibu bole let i =1 karibu naheele i =0 thiba
// for showing the first image quickly nottaking of timt .....start  (na kale b haba))
let img = document.createElement("img")
 img.src = imageArr[0];

 container.append(img)
// end...(atiki klae haba nehele nai hela)
var slide = setInterval(function(){


    if(i===imageArr.length){
        i = 0;
    }

 let image = imageArr[i++]

 container.innerHTML = null;
 let img = document.createElement("img")
 img.src = image;

 container.append(img)
    
},2000);



// for movies showing

var obj = [{imgae_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU4g8xUnnDU4kVOp8_-3f3aPDusw_D2AlyXw&usqp=CAU",name:"pushpa",date:"21/2/20",rating:5.4},
{imgae_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7oyeIx2E_A-Z_J-mDbetsuGhw5E2OV1ORAQ&usqp=CAU",name:"baby",date:"12/3/19",rating:6.0},
{imgae_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7oyeIx2E_A-Z_J-mDbetsuGhw5E2OV1ORAQ&usqp=CAU",name:"nature",date:"11/2/12",rating:7.2},
{imgae_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQthHVYX7uaGAQbJifvkv4GskIjvp14b9KIAQ&usqp=CAU",name:"spider",date:"4/2/15",rating:2.3},
{imgae_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5VOHBxkGqOESTyFvRzCEJDtVlEZnHTQnYLA&usqp=CAU",name:"zero",date:"12/2//20",rating:6.7},
{imgae_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjr5HRo7yLLB9iD5I5JzkRlWwoyz21Ibb_uw&usqp=CAU",name:"topper",date:"11/2/21",rating:8.8},
{imgae_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfreEDA5QyIxh8Dov3sBaaR9wW2FFxJR2eAg&usqp=CAU",name:"don2",date:"12/4/21",rating:4.5},
{imgae_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtNEMqzI4Qxo9b2IRANnL6MPBQryY_gP9XAQ&usqp=CAU",name:"no.1 khiladi",date:"4/6/20",rating:8.7},
{imgae_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt6aGRnQrCcgovmOmZKw4COJ-zICzqaNLRZA&usqp=CAU",name:"friends",date:"1/12/21",rating:9.0},]


var objData = localStorage.setItem("movies",JSON.stringify(obj));
console.log(objData)
let NewData = JSON.parse(localStorage.getItem("movies"))
DispalyData(NewData)
 function DispalyData(NewData){
     document.querySelector('#movies').innerHTML = null;
     NewData.map(function(elem){
var mainDiv = document.createElement("div");
var image = document.createElement("img");
image.src = elem.imgae_url;
var Name = document.createElement("h3");
Name.innerText = elem.name;
var Dated = document.createElement("p");
Dated.innerText = elem.date;
var Rating = document.createElement("p");
Rating.innerText = elem.rating;

mainDiv.append(image,Name,Dated,Rating)
document.querySelector("#movies").append(mainDiv);
 
})


}


// for sorting

function Sorting(){
    var sortData = document.getElementById("sorter").value;

    if(sortData=="h2l"){
        NewData.sort(function(a,b){
            return b.rating-a.rating
        });
        DispalyData(NewData)
    }
       
        else if(sortData=="l2h"){
            NewData.sort(function(a,b){
                return a.rating-b.rating
            })
            DispalyData(NewData)
    }
}




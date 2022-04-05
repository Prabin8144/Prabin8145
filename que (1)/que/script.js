let timerId;

async function getData(url,name)
 {

   let res = await fetch(url);

    let data = await res.json();

    let data1 = data.meals;

    return data1;
 }

 async function main(url,name,parent,parent1)
{
    try{

     
        let data2 = await getData(`${url}s=${name}`,parent,parent1);

        if(name=="")
        {
            parent.innerHTML = "";

        }
        else
        {
            appendData(data2,parent);
        }
       

        console.log(data2);

        console.log(name);

        if(data2=="")
  {
     
    return false;
  }
 
    }
 
    catch(err)
    {

        console.log("err:",err);
 
    }
   
  }

function debounce(func,delay,url,name,parent,parent1)
{

  name = parent1.value;


    if(timerId)
    {
        clearTimeout(timerId);
    }


    timerId = setTimeout(function()
    {
        func(url,name,parent,parent1);

    },delay);
}
function  appendData(data1,parent)
{

    parent.innerHTML = "";


  if(data1==null)
  {

    let img = document.createElement("img");
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJum5DsjjTO_JVzk-ZMQg6Vzz0qKAI4KfeIA&usqp=CAU";

    let error = document.createElement("h2");
    error.innerText = "NO YAR!!!!"

    parent.append(img,error);
  }
  else
  {
  data1.forEach(({strMeal,strInstructions,strMealThumb})=>
    {
  let div = document.createElement("div");


   let name = document.createElement("h1");
   name.innerHTML = strMeal;


   let image = document.createElement("img");
   image.src = strMealThumb;

   let receipe = document.createElement("p");
   receipe.innerText = strInstructions;

   div.append(image,name,receipe);

   parent.append(div);
   
 });
}
}
export {getData,appendData,debounce,main};

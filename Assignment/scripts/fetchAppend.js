
const getData = async (url) => {

    try {
        let res = await fetch(url);
        let dataa = await res.json();
        //console.log(data);
        let data = dataa.meals;
        return data;
    }  catch(error) {
        console.log(error);
    }
} 


const appendData = (data, parent) => {

    parent.innerHTML = null;

    data.map((el) => {

        let div = document.createElement('div');

        let name = document.createElement('p');
        name.innerText = el.strMeal;

        let categ = document.createElement('p');
        categ.innerText = el.strCategory;

        let area = document.createElement('p');
        area.innerText = el.strArea;

        let source = document.createElement('a');
        source.innerText = "Receipe Link";
        source.href = el.strSource;
        source.style.textDecoration = "none";
        source.style.display = "block";

        let ytsrc = document.createElement('a');
        ytsrc.innerText = "YouTube Video";
        ytsrc.href = el.strYoutube;
        ytsrc.style.textDecoration = "none";
        ytsrc.style.display = "block";

        let imge = document.createElement('img');
        imge.src = el.strMealThumb;

        div.append(imge, name, categ, area, source, ytsrc);

        parent.append(div);
    });
};

export { getData, appendData };
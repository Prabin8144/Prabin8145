

window.addEventListener("load",function(){

    // for signup>>>>>
    let registerform = document.getElementById("registerform")

    registerform.addEventListener("submit",(event) =>{
        event.preventDefault();
  
        const formData = new FormData(registerform);

        let name = formData.get("name_input");
        let mail = formData.get("name_mail");
        let password = formData.get("name_password");
        let username = formData.get("name_user");
        let mobile = formData.get("name_number");
        let description = formData.get("description");


        let obj = {
            name,
            mail,
            password,
            username,
            mobile,
            description
        }
        let wholedata = JSON.stringify(obj)
        // console.log(wholedata)
        // here we convert the obj to json.......
        register(wholedata)
        // it come from register function
    })

    //  login part >>>>
    let loginForm = document.getElementById("login")
    loginForm.addEventListener("submit",function(event){
        event.preventDefault();

        const loginformData = new FormData(loginForm);

        const username = loginformData.get("user_input")
        const password = loginformData.get("user_password")
    

    let obj = {
        username : username,
        password : password,
    }
    localStorage.setItem("username",username)
    let wholedata1 = JSON.stringify(obj)
    login(wholedata1)
    })
})
// its for signup>>>>
const register = (data) => {
    // - we need to send/post the data to the server
 // we need to give the ENDPOINT which is in the api documintation nhi to kam nhi karega.............>>>
    fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
       
        method : "POST",
        headers : {
            'Content-Type' : 'application/json'
        },
        body : data
      
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
}

// for login>>>>

const login = (data) => {
    fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
        method : "POST",
        headers : {
            'Content-Type' : 'application/json'
        },
        body : data
    })
    .then((res) => res.json())
    .then((data) => {
        if(data.error){
            alert(data.message)
        }
        else{
            localStorage.setItem("token", data.token)
            window.location.href = "profile.html"
        }
    })
    .catch((err) => console.log(err))
}
  

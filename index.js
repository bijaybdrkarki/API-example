let  list = document.getElementById("location");





list.addEventListener('change',function(){
    const endPoint= `http://api.weatherstack.com/current?access_key=f7ee75ccecb7504b80ffb132c7851b30&query=${list.value}`;


// we are going to send HTTP request to API based on above mentioned endpoint
// how do you send HTTP request to server in js
// 1. XHR => XMLHttpRequest object very old way
// 2. fetch new version
// 3. Axios

fetch(endPoint)//send request to API server
.then(function (response){
   response.json()
   .then(function (data){
    let div = document.getElementById("container");    
    div.innerHTML = `the current temperatute of ${list.value} is ${data.current.temperature} and it is ${data.current.weather_descriptions[0]}`;
    let image = document.createElement("img");
    image.setAttribute("src", data.current.weather_icons[0]);
    div.appendChild(image);  
   })
})

});
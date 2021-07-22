
import './style.css';

import axios from 'axios';

/*
const wallpaper = document.createElement('img');
wallpaper.id = "wallpaper";
wallpaper.src = "../images/wallpaper.jpg";
document.body.appendChild(wallpaper);
*/
/*
const hello = document.createElement('div');
hello.innerHTML = 'Hello Dev';
hello.classList.add('hello');
document.body.appendChild(hello);
*/


async function aqiChecker() {

  try{
    let city = document.getElementById("search").value;

    //const response = await fetch("/.netlify/functions/lambda");
    //const data = await response.json();
    const results = await axios.get("/.netlify/functions/lambda?city="+city);
    let aqi = results.data.data.aqi;
    console.log(aqi);

    index.innerHTML = "AQI: " + aqi ;

    if(aqi == undefined){
      index.innerHTML = "The city you entered doesn't exist!" ;
    }

} catch (err){
  console.error(err.message);
  index.innerHTML = "The city you entered doesn't exist!" ;
}

}





//const apiKey = "d3fdee6489352a6599a5e2d8557718dcd34dbce7";

let enter = document.getElementById('enter');
let search = document.getElementById('search');
let index = document.getElementById("index");

enter.addEventListener("click", aqiChecker );
search.addEventListener("keyup", function(input){
  if (event.keyCode === 13) {enter.click();}
});

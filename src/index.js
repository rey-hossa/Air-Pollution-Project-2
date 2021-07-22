
import './style.css';

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

async function aqiChecker(){
  try{



    let city = document.getElementById("search").value;
    let uri = "https://api.waqi.info/feed/" + city + "/?token=" + apiKey;

    const res = await fetch(uri);
    const resJson = await res.json();
    const aqi = resJson.data.aqi;
    //console.log(aqi);
    index.innerHTML = "AQI: " + aqi ;

  } catch (err){
    console.error(err.message);
    index.innerHTML = "The city you entered doesn't exist!" ;
  }
}

async function callLambdaFunction() {

  const response = await fetch("/.netlify/functions/lambda");
  const data = await response.json();

  console.log(response);
}

callLambdaFunction();



const apiKey = "d3fdee6489352a6599a5e2d8557718dcd34dbce7";

let enter = document.getElementById('enter');
let search = document.getElementById('search');
let index = document.getElementById("index");

enter.addEventListener("click", aqiChecker );
search.addEventListener("keyup", function(input){
  if (event.keyCode === 13) {enter.click();}
});

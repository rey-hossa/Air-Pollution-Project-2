
import './style.css';
import axios from 'axios';

/*
const wallpaper = document.createElement('img');
wallpaper.id = "wallpaper";
wallpaper.src = "../images/wallpaper.jpg";
document.body.appendChild(wallpaper);
*/


async function aqiChecker() {

  try{
    let city = document.getElementById("search").value;

    //const response = await fetch("/.netlify/functions/lambda");
    //const data = await response.json();
    const results = await axios.get("/.netlify/functions/lambda?city="+city);
    let aqi = results.data.data.aqi;
    console.log(aqi);

    if(aqi == undefined){
      index.innerHTML = "The city you entered doesn't exist!" ;
    }else{
      index.innerHTML = "AQI: " + aqi ;
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
let status = document.getElementById('status');
let info = document.getElementById('info');
let information = document.getElementById('information');
let map_section = document.getElementById('map');

let heathImplications = document.getElementById('heathImplications');
let cautionaryStatement = document.getElementById('cautionaryStatement');


enter.addEventListener("click", aqiChecker );
search.addEventListener("keyup", function(input){
  if (event.keyCode === 13) {enter.click();}
});

//Information section animation
info.addEventListener("mouseover",function(){
  map_section.style.display = "none";
  information.style.display = "flex";
});
info.addEventListener("mouseout",function(){
  map_section.style.display = "flex";
  information.style.display = "none";
});

// Map creation

// Leaflet Map Layer
let OSM_URL = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
let OSM_ATTRIB = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors';
let osmLayer = L.tileLayer(OSM_URL, {attribution: OSM_ATTRIB});
// Waqi Layer
let WAQI_URL  = "https://tiles.waqi.info/tiles/usepa-aqi/{z}/{x}/{y}.png?token=_TOKEN_ID_";
let WAQI_ATTR = 'Air Quality Tiles &copy; <a href="http://waqi.info">waqi.info</a>';
let waqiLayer = L.tileLayer(WAQI_URL, {attribution: WAQI_ATTR});

let map = L.map('map').setView([44.500017,11.328501], 11); // Map view coordinates
map.addLayer(osmLayer);
map.addLayer(waqiLayer);

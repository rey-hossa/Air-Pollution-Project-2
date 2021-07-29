
import './style.css';

// Manual search
async function aqiChecker(){
  try{

    let city = document.getElementById("search").value;
    let uri = "https://api.waqi.info/feed/" + city + "/?token=" + apiKey;

    const res = await fetch(uri);
    const resJson = await res.json();
    const aqi = resJson.data.aqi;
    //console.log(aqi);
    index.innerHTML = "AQI: " + aqi ;

    //change map view
    let latitude = resJson.data.city.geo[0];
    let longitude = resJson.data.city.geo[1];
    map.setView([latitude, longitude], 11);

    //set the status
    setIndexStatus(aqi);

  } catch (err){
    console.error(err.message);
    status.style.display = "none";
    info.style.display = "none";
    index.innerHTML = "The city you entered doesn't exist!" ;
  }
}

//Search with user position
async function setCurrentPostion(position){
  try{
    //console.log(position);
    map.setView([position.coords.latitude, position.coords.longitude], 11);

    let uri2 = "https://api.waqi.info/feed/geo:"+ position.coords.latitude + ";" + position.coords.longitude +"/?token=" + apiKey;
    const res2 = await fetch(uri2);
    const resJson2 = await res2.json();
    const aqi2 = resJson2.data.aqi;
    index.innerHTML = "AQI: " + aqi2 ;

     setIndexStatus(aqi2);

  } catch (err){
    console.error(err.message);
  }
}

//set the status
function  setIndexStatus(aqi){
  status.style.display = "flex";
  info.style.display = "flex";

  if(aqi > 300){
    status.style.backgroundColor = "#660000";
    status.innerText = "Hazardous!" ;
    heathImplications.innerText = "Health alert: everyone may experience more serious health effects";
    cautionaryStatement.innerText = "Everyone should avoid all outdoor exertion";
  } else if (aqi > 200){
    status.style.backgroundColor = "#4d007d";
    status.innerText = "Very unhealthy" ;
    heathImplications.innerText = "Health warnings of emergency conditions. The entire population is more likely to be affected.";
    cautionaryStatement.innerText = "Active children and adults, and people with respiratory disease, such as asthma, should avoid all outdoor exertion; everyone else, especially children, should limit outdoor exertion.";
  } else if (aqi > 150){
    status.style.backgroundColor = "#e30000";
    status.innerText = "Unhealthy" ;
    heathImplications.innerText = "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects";
    cautionaryStatement.innerText = "Active children and adults, and people with respiratory disease, such as asthma, should avoid prolonged outdoor exertion; everyone else, especially children, should limit prolonged outdoor exertion";
  } else if (aqi > 100){
    status.style.backgroundColor = "#e39000";
    status.innerText = "Unhealthy for sensitive groups " ;
    heathImplications.innerText = "Members of sensitive groups may experience health effects. The general public is not likely to be affected.";
    cautionaryStatement.innerText = "Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.";
  }else if (aqi > 50){
    status.style.backgroundColor = "#e3d800";
    status.innerText = "Moderate " ;
    heathImplications.innerText = "Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.";
    cautionaryStatement.innerText = "Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.";
  } else if (aqi > 0){
    status.style.backgroundColor = "#0abf00";
    status.innerText = "GOOD " ;
    heathImplications.innerText = "Air quality is considered satisfactory, and air pollution poses little or no risk";
    cautionaryStatement.innerText = "None";
  } else {
    heathImplications.innerText = "None";
    cautionaryStatement.innerText = "None";
    status.style.display = "none";
    info.style.display = "none";
  }
}


//api Key AICQN
const apiKey = process.env.API_KEY;

let enter = document.getElementById('enter');
let search = document.getElementById('search');
let index = document.getElementById("index");
let status = document.getElementById('status');
let info = document.getElementById('info');
let information = document.getElementById('information');
let map_section = document.getElementById('map');

let heathImplications = document.getElementById('heathImplications');
let cautionaryStatement = document.getElementById('cautionaryStatement');

//Search with user position
navigator.geolocation.getCurrentPosition(setCurrentPostion);

// Manual search
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

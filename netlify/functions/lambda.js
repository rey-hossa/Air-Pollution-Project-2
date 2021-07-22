exports.handler = async function (event, context) {

  const API_KEY =  process.env.API_KEY;
  const city = event.queryStringParameters.city;

  let uri = "https://api.waqi.info/feed/" + city + "/?token=" + API_KEY;

  let aqi;

  async function aqi (){
    const res = await fetch(uri);
    const resJson = await res.json();
    aqi = resJson.data.aqi;
    //console.log(aqi);
  }

  aqi();

  return {
    statusCode: 200,
    body: JSON.stringify({message: `${aqi} `})
  }

}

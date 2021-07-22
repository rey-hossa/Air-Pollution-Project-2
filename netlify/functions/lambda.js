const axios = require('axios');

exports.handler = async function (event, context) {

  const API_KEY =  process.env.API_KEY;
  const city = event.queryStringParameters.city;

  let uri = "https://api.waqi.info/feed/" + city + "/?token=" + API_KEY;

/*
  async function aqi(){
    const res = await fetch(uri);
    const resJson = await res.json();

    const aqi = resJson.data.aqi;
    return aqi;
  }
  let prova = aqi();
*/

  const { data } = await axios.get(uri);


  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }

}

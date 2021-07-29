const axios = require('axios');

exports.handler = async function (event, context) {

  const API_KEY =  process.env.API_KEY;
  const lat = event.queryStringParameters.latitude;
  const lon = event.queryStringParameters.longitude;

  let uri = "https://api.waqi.info/feed/geo:"+ lat + ";" + lon +"/?token=" + API_KEY;

  const { data } = await axios.get(uri);


  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }

}

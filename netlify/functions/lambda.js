import axios from 'axios';

exports.handler = async function (event, context) {

  const API_KEY =  process.env.API_KEY;
  const city = event.queryStringParameters.city;


  async function fetchApi (){
    let uri = "https://api.waqi.info/feed/" + city + "/?token=" + API_KEY;
    let response = await axios.get(uri);
    return response;
  }

  let data = fetchApi();

  const pass = (body) => {
    return {
      statusCode: 200,
      body: JSON.stringify(body)
    }
  }

  return pass(data);

  /*
  return {
    statusCode: 200,
    body: JSON.stringify({message: `citta: ${city} api key: ${API_KEY} `})
  }
  */

}

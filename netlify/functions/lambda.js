exports.handler = async function (event, context) {

  const API_KEY =  process.env.API_KEY;
  const city = event.queryStringParameters.city;

  let uri = "https://api.waqi.info/feed/" + city + "/?token=" + API_KEY;

  async function aqi(){
    const res = await fetch(uri);
    const resJson = await res.json();
    return reJson;
  }
  let data = aqi();

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

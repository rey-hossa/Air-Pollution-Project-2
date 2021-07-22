exports.handler = async function (event, context) {

  const API_KEY =  process.env.API_KEY;
  const city = event.queryStringParameters.city;

  let uri = "https://api.waqi.info/feed/" + city + "/?token=" + API_KEY;
  const res = await fetch(uri);
  const resJson = await res.json();


  const pass = (body) => {
    return {
      statusCode: 200,
      body: JSON.stringify(body)
    }
  }

  return pass(resJson);

  /*
  return {
    statusCode: 200,
    body: JSON.stringify({message: `citta: ${city} api key: ${API_KEY} `})
  }
  */

}

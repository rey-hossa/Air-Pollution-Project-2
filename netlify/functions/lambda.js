exports.handler = async function (event, context) {

  const API_KEY =  process.env.API_KEY;
  const city = event.queryStringParameters.city || 'World';
  return {
    statusCode: 200,
    body: JSON.stringify({message: `ciuppa ${city} api key: ${API_KEY} `})
  }

}

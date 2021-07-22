exports.handler = async function (event, context) {

  const city = event.queryStringParameters.city || 'World'
  return {
    statusCode: 200,
    body: JSON.stringify({message: `ciuppa ${city} `})
  }

}

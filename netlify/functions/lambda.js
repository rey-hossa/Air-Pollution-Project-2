exports.handler = async event => {
  const data = "ciuppa";


  const pass = (body) => {
    return {
      statusCode: 200,
      body: JSON.stringify(body)
    }
  }

  return pass(data)
}

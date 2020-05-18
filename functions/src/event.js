const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type'
}

exports.handler = async (event, context) => {
    return {
        headers,
        statusCode: 200,
        body: 'ok'
    }
}
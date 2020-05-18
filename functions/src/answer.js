const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type'
}

exports.handler = async (event, context) => {
    try {
        return { headers, statusCode: 200, body: 'ok' }
    } catch(err) {
        return { headers, statusCode: 500, body: 'Error: ' + e }
    }
}
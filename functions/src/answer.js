require('dotenv').config()
const { AIRTABLE_BASE, AIRTABLE_KEY, AIRTABLE_TABLE } = process.env

const Airtable = require('airtable-plus')
const base = new Airtable({
    baseID: AIRTABLE_BASE,
    apiKey: AIRTABLE_KEY,
    tableName: AIRTABLE_TABLE
})


const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type'
}

exports.handler = async (event, context) => {
    try {
        const thoughts = await base.read({ filterByFormula: '{Today}="Yes"' })
        const ncco = [];
        if(thoughts.length > 0) {
            ncco.push({
                action: 'stream',
                streamUrl: [thoughts[0].fields.File[0].url]
            })
        } else {
            ncco.push({
                action: 'talk',
                voiceName: 'Brian',
                text: 'Sorry I haven\'t got around to recording today\'s thoguth of the day yet. God bless.'
            })
        }
        return { headers, statusCode: 200, body: JSON.stringify(ncco) }
    } catch(err) {
        return { headers, statusCode: 500, body: 'Error: ' + err }
    }
}
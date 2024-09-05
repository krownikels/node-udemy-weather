const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.geocod.io/v1.7/geocode?q=' + encodeURIComponent(address) + '&limit=1&api_key=116e6a4d50c0d604a1556f5c55568c6d85806a4'

    request({ url, json:true }, (error, { body }) => {
        if(error) {
            callback('Unable to connect to geocode service.'. undefined)
        } else if (body.error) {
            callback(body.error, undefined)
        } else {
            callback(undefined, {
                latitude: body.results[0].location.lat,
                longitude: body.results[0].location.lng,
                location: body.results[0].formatted_address	
            })
            
        }
    })
}

module.exports = geocode
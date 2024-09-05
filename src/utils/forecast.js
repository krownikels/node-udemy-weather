const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.weatherstack.com/current?access_key=bd55aebe442f9cde3cc09d89b3931646&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Error Code ' + body.error.code + ': ' + body.error.info, undefined)
        } else {
            callback(undefined, 'Currently it is ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees.')
        }
    })
}

module.exports = forecast
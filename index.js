const request = require('request')

const apiRequest = (url, token, appName) => request({
  url,
  json: true,
  headers: {
    'Authorization': 'token ' + token,
    'User-Agent': appName,
    'Accept': 'application/vnd.github.antiope-preview+json'
  },
  method: 'POST'
})

apiRequest(process.env.APP_NAME, process.env.TOKEN, process.env.URL)
  .on('response', function (response) {
    console.log(response.statusCode)
    console.log(response.statusMessage)
  }).on('error', function (err) {
    console.log(err)
  })

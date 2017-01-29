var request = require('request');
request('https://news-at.zhihu.com/api/4/start-image/1080*1920', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage. 
  }
})


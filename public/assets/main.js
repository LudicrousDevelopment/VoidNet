const request = require('node-fetch');
var url = $_GET['url'];
request(url, function (error, response, body) {
  console.error('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
});
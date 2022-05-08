const http = require('http');
const options = {
  host: process.env.API_TODO_HOST ||'localhost',
  port: process.env.API_TODO_PORT || '8080',
  timeout: 300000,
};
const request = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  const status = res.statusCode ? res.statusCode : 500;
  if (status < 500) {
    process.exit(0);
  } else {
    process.exit(1);
  }
});
request.on('error', function (err) {
  console.log(`The following error occurred: ${err.message}`);
  process.exit(1);
});
request.end();

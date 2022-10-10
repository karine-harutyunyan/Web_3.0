// const http = require("http");

// function print_on_the_browser(request, response) {
//     var ran = Math.floor(Math.random() * 10)
//     response.end(ran.toString());
// };

// const server = http.createServer(print_on_the_browser);
// server.listen(8000, "localhost");


const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use('/', (req, res) => {
  res.send('hello world')
});

app.listen(3000, "localhost")




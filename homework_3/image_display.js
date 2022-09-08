const http = require("http");
const fs = require("fs");

function print_on_the_browser(request, response) {
    response.writeHead(200, {"Conten_Type": "text/html"})
    fs.readFile("image.html", function(error, data) {
        if (error) {
            response.writeHead(404)
        }
        else{
            response.write(data)
        }
    })
    response.end();
};

const server = http.createServer(print_on_the_browser);
server.listen(3000, "localhost");
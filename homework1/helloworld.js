const http = require("http");

function print_on_the_browser(request, response) {
    response.end("Hello World!");
};

const server = http.createServer(print_on_the_browser);
server.listen(8000, "localhost");

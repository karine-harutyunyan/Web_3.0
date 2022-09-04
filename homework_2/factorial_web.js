const http = require("http");
var url = require("url");

function print_on_the_browser(request, response) {

    var parsed_url = url.parse(request.url, true);
    var path = parsed_url.pathname;
    var path_ = path.replace(/^\/+|\/+$/g, "");
    var num = parseInt(path_);
    var factorial = 1;

    if (num < 0 || isNaN(num))
        response.end("Please enter positive number");

    else if (num == 1 || num == 0)
        response.end(factorial.toString())

    else {
        for (i = 2; i <= num; i++) {
            factorial = factorial * i
            
        }
        response.end(factorial.toString())

    }
    
};

const server = http.createServer(print_on_the_browser);
server.listen(8000, "localhost");



// function factorial(num) {

//     if (num < 0)
//         return "Please enter positive number";

//     else if (num == 1 || num == 0)
//         return 1;

//     else {
//         return (num * factorial(num - 1));
//     }

// }

// f = factorial(5)
// console.log(f);
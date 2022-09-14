const http = require("http");
const fs = require("fs");
var url = require("url");

function print_on_the_browser(request, response) {
    response.writeHead(200, {"Conten_Type": "text/html"})
    fs.readFile("index.html", function(error, data) {
        if (error) {
            response.writeHead(404)
        }
        else{
            response.write(data)
            response.end();
        }
    })
    
};

const server = http.createServer(print_on_the_browser);
server.listen(8080, "localhost");



const urlParams = new URLSearchParams(location.search);
var right_Array = []
var top_Array = []

for (const [key, value] of urlParams) {
    if (key == "right") {
        right = parseInt(value)
        right_Array.push(right)
    } 
    else if (key == "top") {
        top = parseInt(value)
        top_Array.push(top)
    }
    console.log(`${key}:${value}`);
}



var Cat = {

    len_right = right_Array.length,
    len_top = top_Array.length,

    for (i=0; i<len_right; i++) {
        
    }

}
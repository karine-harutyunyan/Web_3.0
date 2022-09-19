const http = require("http");
const fs = require("fs");
var url = require("url");


right = 0;
top = 0;
var right_Array = [];
var top_Array = [];
var sum_right = 0;
var sum_top = 0;

function print_on_the_browser(request, response) {

    var url_parts = url.parse(request.url, true);                              //**** Class
    var query = url_parts.query;
    // var urlParams = new URLSearchParams(window.location.search);
    // var keys_q = Object.keys(query)
    // keys_q.forEach((key, index) => {
    // for (const key in query) 
    for (const [key, value] of Object.entries(query)) {
        console.log(`${key}: ${value}`)

        // console.log(`${key}: ${query[key]}`)

        if (key == "right") {
            right_Array.push(parseInt(value))
            
        }
        else if (key == "top") {
            top_Array.push(parseInt(value))
            
        }


    };
    
    console.log(right, top)

    for (i=0; i < (right_Array.length); i++) {
        sum_right += right_Array[i]
    };
    for (j=0; j < top_Array.length; j++) {
        sum_top += top_Array[j]
    };
    console.log(sum_right, sum_top)                                                   //**** Class

    
    response.writeHead(200, {"Conten_Type": "text/html"})
    fs.readFile("index.html", function(error, data) {
        if (error) {
            response.writeHead(404)
        }
        else{
            response.write(data)

            function position_Cat(Cat) {

                var html = "<head>"
                html += "</head>"
                html += "<style>"
                html += "</style>"
                html += "<body>"
                html += "<table>"
                for (i=0; i<=3; i++) {
                    html += "<tr>"
                    for (j=0; j<=3; j++) {
                        html += "<td>"
                        if (i == this.sum_right && j == this.sum_top) {
                            html += "<img src='download.jpg' />"
                        } 
                        html += "</td>"
        
                    }
                    html += "</tr>"
                }
                html += "</table>"
                html += "</body>"
        
                
            };
            // response.write(position_Cat(Cat))
            response.end();
        }
    })
    
};



class Cat {

    constructor(sum_right, sum_top) {
        this.sum_right = sum_right;
        this.sum_top = sum_top;
    };

    // getArray() {
    //     return this.right_Array, this.top_Array
    // }
};


const server = http.createServer(print_on_the_browser);
server.listen(8080, "localhost");
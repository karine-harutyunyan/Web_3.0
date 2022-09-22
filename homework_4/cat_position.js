const http = require("http");
var url = require("url");


var right = 0;
var top = 0;
var sum_right = 0;
var sum_top = 0;

function print_on_the_browser(request, response) {

    var url_parts = url.parse(request.url, true);                              //**** Class
    var query = url_parts.query; 
    right = parseInt(query.right);
    top = parseInt(query.top);
    
    console.log(right, top)

    sum_right += right;
    sum_top += top;

    console.log(sum_right, sum_top)                                                   //**** Class

    
    response.writeHead(200, {"Conten_Type": "text/html"})
    function position_Cat() {

        var html = "<head>"
        html += "</head>"
        html += "<style>"
        html += "table.border:1px solid black"
        html += "table.border-collapse: collapse"
        html += "table.margin-left: auto"
        html += "table.margin-right: auto"
        html += "table.margin-top: 10%"
        html += "table.width: 1000px"
        html += "table.height: 100px"
        html += "img.width: 30%"
        html += "img.display: block"
        html += "img.margin-left: auto"
        html += "img.margin-right: auto"
        html += "</style>"
        html += "<body>"
        html += "<table>"
        for (i=0; i<=3; i++) {
            html += "<tr>"
            for (j=0; j<=3; j++) {
                html += "<td>"
                if (i == sum_right && j == sum_top) {
                    html += "<img src='https://w7.pngwing.com/pngs/174/600/png-transparent-cat-animal-lovely-cat.png' />"
                }; 
                html += "</td>"        
            };
            html += "</tr>"
        };
        html += "</table>"
        html += "</body>"
        response.end() 
        
    }; 
      
        
        
};



// class Cat {

//     constructor(sum_right, sum_top) {
//         this.sum_right = sum_right;
//         this.sum_top = sum_top;
//     };

//     // getArray() {
//     //     return this.right_Array, this.top_Array
//     // }
// };


const server = http.createServer(print_on_the_browser);
server.listen(8080, "localhost");
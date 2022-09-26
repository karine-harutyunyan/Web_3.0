const http = require("http");
var url = require("url");


function print_on_the_browser(req, res) {

    if(req.url == "/favicon.ico"){
        return;
    }

    res.writeHead(200, {"Conten_Type": "text/html"})

    main(req, res)


    function main() {

        var arr = []
        var sum_gray = 0
        var sum_blue = 0
        // var m = arr.length
        // var n = arr[0].length

        var html = `<head>
                        <style>
                            tabsle, td {
                                border:1px solid black;
                                border-collapse: collapse;
                                width: 40px;
                                height: 40px;
                                margin-left: auto;
                                margin-right: auto;
                        </style>
                    </head>`

        html += "<body>"
        html += "<table>"
        for (i = 0; i <= 15; i++) {                                        // matrix
            arr[i] = []
            for (j = 0; j <= 15; j++) {
                arr[i][j] = Math.floor(Math.random() * 3);                  // matrix
                if (arr[i][j] == 1)
                    sum_gray += 1
                else if (arr[i][j] == 2)
                    sum_blue += 1
            };
        };
        console.log(sum_gray, sum_blue)
        
        
        var count = ((sum_blue + sum_gray) / 4)
        for (m = 0; m <= 15; m++) {
            for (n = 0; n <= 15; n++) {
                if ((sum_gray != (sum_blue / 3)) && (arr[m][n] == 1)) {
                    for (x = 0; x <= (sum_gray - count); x++) {
                        arr[m][n] = 2
                        sum_blue += 1
                        sum_gray -= 1
                    }
                }

                if (arr[m][n] == 0) 
                    html += "<td tr bgcolor='MediumSeaGreen'/>"
                
                
                else if (arr[m][n] == 1)
                    html += "<td tr bgcolor='Gray'/>"
                

                else if (arr[m][n] == 2) 
                    html += "<td tr bgcolor='DodgerBlue'/>"    
        
                html += "</td>"        
            };
            html += "</tr>"
        };
        console.log(sum_gray, sum_blue)
        html += "</table>"
        html += "</body>"
        res.write(html)
        res.end()
    }
}



const server = http.createServer((req, res) =>print_on_the_browser(req, res));
server.listen(8000, "localhost")
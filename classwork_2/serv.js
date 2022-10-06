




function matrix_creation() {

    x = 16
    y = 16
    var arr = []
    var sum_gray = 0
    var sum_blue = 0
    for (i = 0; i <= x - 1; i++) {                                       
        arr[i] = []
        for (j = 0; j <= y - 1; j++) {
            arr[i][j] = Math.floor(Math.random() * 3);                  
            if (arr[i][j] == 1)
                sum_gray += 1
            else if (arr[i][j] == 2)
                sum_blue += 1

    return arr, sum_blue, sum_gray
        };
    };
}








function print_on_the_browser(req, res) {

    if(req.url == "/favicon.ico"){
        return;
    }

    res.writeHead(200, {"Conten_Type": "text/html"})

    main(req, res)


    function main() {

        x = 16
        y = 16
        var arr = []
        var sum_gray = 0
        var sum_blue = 0

        var html = `<head>
                        <style>
                            table, td {
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
        for (i = 0; i <= x - 1; i++) {                                        // matrix creation
            arr[i] = []
            for (j = 0; j <= y - 1; j++) {
                arr[i][j] = Math.floor(Math.random() * 3);                  // 
                if (arr[i][j] == 1)
                    sum_gray += 1
                else if (arr[i][j] == 2)
                    sum_blue += 1
            };
        };
        console.log(sum_gray, sum_blue)
        
        var count = ((sum_blue + sum_gray) / 4) | 0                         // sum gray = sum blue / 3
        for (m = 0; m <= x - 1; m++) {
            for (n = 0; n <= y - 1; n++) {
                while ((sum_gray != count | 0) && (arr[m][n] == 1)) {
                    arr[m][n] = 2
                    sum_blue += 1
                    sum_gray -= 1
                }; 
                
            };
        };                                                                    //
                
        console.log(sum_gray, sum_blue)
            
        for (m = 0; m <= x - 1; m++) {                                          // Shuffle
            const i = Math.floor(Math.random() * x);
            for (n = 0; n <= y - 1; n++) {
                const j = Math.floor(Math.random() * y);
                [arr[m][n], arr[i][j]] = [arr[i][j], arr[m][n]];

            };
        };                                                                      //


        for (m = 0; m <= x - 1; m++) {                                          // Color
            for (n = 0; n <= y - 1; n++) {
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
        html += "</table>"
        html += "</body>"                                                       //

        res.write(html)
        res.end()
    };
};



const server = http.createServer((req, res) =>print_on_the_browser(req, res));
server.listen(8000, "localhost")
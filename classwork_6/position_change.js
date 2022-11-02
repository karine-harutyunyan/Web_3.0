const express = require('express')
const app = express()
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.post('/', (req, res) => {

    if(req.url == "/favicon.ico"){
        return;
    }

    
    main(req.body.col, req.body.row)
    function main(x, y) {
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
            };
        };

        var count = ((sum_blue + sum_gray) / 4) | 0                        
        for (m = 0; m <= x - 1; m++) {
            for (n = 0; n <= y - 1; n++) {
                while ((sum_gray != count | 0) && (arr[m][n] == 1)) {
                    arr[m][n] = 2
                    sum_blue += 1
                    sum_gray -= 1
                };                 
            };
        };    

        for (m = 0; m <= x - 1; m++) {                                         
            const i = Math.floor(Math.random() * x);
            for (n = 0; n <= y - 1; n++) {
                const j = Math.floor(Math.random() * y);
                [arr[m][n], arr[i][j]] = [arr[i][j], arr[m][n]];
            };
        };                                                                                             
        var myJsonString = JSON.stringify(arr)
        res.send(myJsonString)
    };
});
app.listen(8080, "localhost")
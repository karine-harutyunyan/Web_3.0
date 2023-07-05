const express = require('express')
const app = express()
const cors = require('cors');
const fs = require('fs')

app.use(express.json());
app.use(cors());


app.post('/', (req, res) => {

    if(req.url == "/favicon.ico"){
        return;
    }

    main(req.body.col, req.body.row)
    function main(x, y) {
                                                                                        
        var myJsonString = JSON.stringify({x, y})
        fs.writeFile("data.txt", myJsonString, err => {
            if (err) {
                console.log('Error writing file', err)
            } else {
                console.log('Successfully wrote file')
            }
        })
    }
});
app.listen(8080, "localhost")
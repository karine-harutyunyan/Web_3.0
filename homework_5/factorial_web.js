// var url = require("url");
// const http = require("http");
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())



app.use('/:fact', (request, response) => {


    var num = parseInt(request.params.fact);
    var factorial = 1;
    console.log(num)

    if (num < 0 || isNaN(num)){
        response.send("Please enter positive number");
    }

    else if (num == 1 || num == 0){
        response.send(factorial.toString())
    }

    else {
        for (i = 2; i <= num; i++) {
            factorial = factorial * i
        
        }
        response.send(factorial.toString())
    }
    
});

app.listen(8080, "localhost")



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
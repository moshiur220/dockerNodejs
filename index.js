const express = require('express');

const app = express();

app.get('/',(req, res) => {
    res.send('<h1>Hello i am from express js </h1>');
})



app.listen(8080,() => {
    console.log(`Server runing port 8080 http://localhost:8080`);
})
const express = require('express');
const PORT = 4000;

//importing json data
const quotesData = require('./quotes.json')

const app = express();

const getRandomIndex = () => {
    return Math.floor(Math.random()*quotesData.quotes.length)
}

app.get("/", (req, res) => {
    res.send("our quotes app")
})

app.get("/quote", (req, res) =>{
    res.json(quotesData.quotes[getRandomIndex()])
})

app.listen(PORT, () =>{
    console.log(`server started at port ${PORT}`)
})
console.log("hello world")
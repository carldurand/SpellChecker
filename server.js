const express = require('express');
const app = express();
const dataResults = require('./data');

//Index Route
app.get('/', (req, res) => {
    const word = req.query.key;
    if (dataResults.hasOwnProperty(word) === true) {
        res.send(
            `<div style= width:100px  background-color:red;">
                <p>YUP!</p>
                <h3>The word <span>${word}</span> in a recognized word in the English dictionary.</h3>
            </div>`);
    } else {
        res.send(
            `<div width: 100px background-color:red;">
                <p>too bad!</p>
                <h3>There is no match to the word <span>${word}</span> in the English dictionary.</h3>
            </div>`)
    };
});

const port = 8080;



app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
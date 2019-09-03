const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const PORT = 9000; // port where the server are online
const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    return res.send('GET recebido');
});

// {"operation": "+", "firstNumber": 2, "secondNumber": 3}

app.post('/', (req, res) => {

    if(!req.body.operation){
        return res.status(400).send("No operation sended")
    }

    var firstNumber = req.body.firstNumber
    var secondNumber = req.body.secondNumber
    var operacao = req.body.operation
    var result

    if( operacao === '+' ){
        result = firstNumber + secondNumber
        //console.log(`Soma de ${firstNumber} por ${secondNumber} é ${result}`)
    } else 
    if ( operacao === '/' ) {
        result = firstNumber / secondNumber
        //console.log(`divisão de ${firstNumber} por ${secondNumber} é ${result}`)
    } else 
    if ( operacao === '*' ) {
        result = firstNumber * secondNumber
        //console.log(`multiplicação de ${firstNumber} por ${secondNumber} é ${result}`)
    } else 
    if ( operacao === '-' ) {
        result = firstNumber - secondNumber
        //console.log(`subtração de ${firstNumber} por ${secondNumber} é ${result}`)
    }

    return res.status(201).send(`{"result": ${result}}`);
});

app.listen(PORT, () =>
  console.log(`Calculator are running on port ${PORT}!`),
);
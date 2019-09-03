const express = require('express');
const bodyParser = require('body-parser');
const PORTA = 9000; // port where the server are online
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    return res.send('GET recebido');
});

// {"operation": "+", "firstNumber": 2, "secondNumber": 3}

app.post('/', (req, res) => {

    var firstNumber = req.body.firstNumber
    var secondNumber = req.body.secondNumber
    var operacao = req.body.operation
    var resultado

    if( operacao === '+' ){
        resultado = firstNumber + secondNumber
        console.log(`Soma de ${firstNumber} por ${secondNumber} é ${resultado}`)
    } else 
    if ( operacao === '/' ) {
        resultado = firstNumber / secondNumber
        console.log(`divisão de ${firstNumber} por ${secondNumber} é ${resultado}`)
    } else 
    if ( operacao === '*' ) {
        resultado = firstNumber * secondNumber
        console.log(`multiplicação de ${firstNumber} por ${secondNumber} é ${resultado}`)
    } else 
    if ( operacao === '-' ) {
        resultado = firstNumber - secondNumber
        console.log(`subtração de ${firstNumber} por ${secondNumber} é ${resultado}`)
    }

    return res.send(`{"resultado": ${resultado}}`);
});

app.listen(PORTA, () =>
  console.log(`Example app listening on port ${PORTA}!`),
);
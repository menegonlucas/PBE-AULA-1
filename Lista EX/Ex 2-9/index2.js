const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/classificar-triangulo', (req, res) => {
    const { a, b, c } = req.body;


    if (a === undefined || b === undefined || c === undefined) {
        return res.status(400).json({ error: 'Por favor, envie os valores dos lados a, b e c.' });
    }

    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
        return res.status(400).json({ error: 'Os valores dos lados devem ser numéricos.' });
    }

    if (a <= 0 || b <= 0 || c <= 0) {
        return res.status(400).json({ error: 'Os lados devem ser maiores que zero.' });
    }

    let tipo;
    if (a === b && b === c) {
        tipo = "EQUILÁTERO";
    } else if (a === b || b === c || a === c) {
        tipo = "ISÓSCELES";
    } else {
        tipo = "ESCALENO";
    }

    res.json({ tipo });
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});
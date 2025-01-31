const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/maior-numero', (req, res) => {
    const { numeros } = req.body;


    if (!Array.isArray(numeros) || numeros.length !== 6) {
        return res.status(400).json({ error: 'Por favor, envie uma lista de 6 números inteiros.' });
    }


    for (let num of numeros) {
        if (typeof num !== 'number' || !Number.isInteger(num)) {
            return res.status(400).json({ error: 'Todos os valores devem ser números inteiros.' });
        }
    }

    const maiorNumero = Math.max(...numeros);

    res.json({ maiorNumero });
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});
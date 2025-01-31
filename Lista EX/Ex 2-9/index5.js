const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/ordenar-numeros', (req, res) => {
    const { numeros } = req.body;

    // Verificando se os números foram fornecidos
    if (!Array.isArray(numeros) || numeros.length !== 5) {
        return res.status(400).json({ error: 'Por favor, envie uma lista de 5 números inteiros.' });
    }

    // Verificando se todos os elementos são números inteiros
    for (let num of numeros) {
        if (typeof num !== 'number' || !Number.isInteger(num)) {
            return res.status(400).json({ error: 'Todos os valores devem ser números inteiros.' });
        }
    }

    // Ordenando os números em ordem crescente
    const numerosOrdenados = numeros.sort((a, b) => a - b);

    // Retornando os números em ordem crescente
    res.json({ numerosOrdenados });
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});
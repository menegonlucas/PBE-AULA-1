const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/comparar-numeros', (req, res) => {
    const { numero1, numero2 } = req.body;

    if (numero1 === undefined || numero2 === undefined) {
        return res.status(400).json({ error: 'Por favor, envie dois números inteiros.' });
    }

    if (typeof numero1 !== 'number' || typeof numero2 !== 'number' || !Number.isInteger(numero1) || !Number.isInteger(numero2)) {
        return res.status(400).json({ error: 'Os valores devem ser números inteiros.' });
    }


    const maior = Math.max(numero1, numero2);
    const menor = Math.min(numero1, numero2);


    res.json({ maior, menor });
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});
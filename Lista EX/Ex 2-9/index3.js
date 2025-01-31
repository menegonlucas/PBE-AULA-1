const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/calcular-preco', (req, res) => {
    const { nome, preco } = req.body;


    if (nome === undefined || preco === undefined) {
        return res.status(400).json({ error: 'Por favor, envie o nome e o preço da mercadoria.' });
    }


    if (typeof preco !== 'number') {
        return res.status(400).json({ error: 'O preço deve ser um valor numérico.' });
    }


    let novoPreco;
    if (preco < 1000) {
        novoPreco = preco * 1.05;
    } else {
        novoPreco = preco * 1.07; 
    }
    res.json({
        nome,
        novoPreco: novoPreco.toFixed(2)
    });
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});
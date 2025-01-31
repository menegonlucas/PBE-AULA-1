const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/calcular-desconto', (req, res) => {
    const { tipo, preco } = req.body;

    // Verificando se o tipo e o preço foram fornecidos
    if (!tipo || typeof preco !== 'number') {
        return res.status(400).json({ error: 'Por favor, forneça o tipo da peça e o preço.' });
    }

    let desconto;
    switch (tipo.toLowerCase()) {
        case 'camisa':
            desconto = 0.20; // 20% de desconto
            break;
        case 'bermuda':
            desconto = 0.10; // 10% de desconto
            break;
        case 'calça':
            desconto = 0.15; // 15% de desconto
            break;
        default:
            return res.status(400).json({ error: 'Tipo de peça inválido. Use "camisa", "bermuda" ou "calça".' });
    }

    // Calculando o valor do desconto e o preço final
    const valorDesconto = preco * desconto;
    const precoFinal = preco - valorDesconto;

    // Retornando o valor do desconto e o preço final
    res.json({ valorDesconto: valorDesconto.toFixed(2), precoFinal: precoFinal.toFixed(2) });
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});
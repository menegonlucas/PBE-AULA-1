const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/calcular-salario', (req, res) => {
    const { salario, numeroDeFilhos } = req.body;


    if (salario === undefined || numeroDeFilhos === undefined) {
        return res.status(400).json({ error: 'Por favor, envie o salário e o número de filhos.' });
    }

    if (typeof salario !== 'number' || typeof numeroDeFilhos !== 'number') {
        return res.status(400).json({ error: 'Os valores de salário e número de filhos devem ser numéricos.' });
    }


    let salarioFamilia = 0;
    if (salario < 2000) {
        salarioFamilia = numeroDeFilhos * 45;
    }

    const salarioFinal = salario + salarioFamilia;


    res.json({
        salarioBase: salario,
        numeroDeFilhos,
        salarioFamilia,
        salarioFinal
    });
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});

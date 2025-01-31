const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/calcular-media', (req, res) => {
    const { notas } = req.body;

    // Verificando se as notas foram fornecidas
    if (!Array.isArray(notas) || notas.length !== 3) {
        return res.status(400).json({ error: 'Por favor, envie uma lista de 3 notas.' });
    }

    // Verificando se todas as notas são numéricas
    for (let nota of notas) {
        if (typeof nota !== 'number') {
            return res.status(400).json({ error: 'Todas as notas devem ser numéricas.' });
        }
    }

    // Calculando a média
    const media = (notas[0] + notas[1] + notas[2]) / 3;

    // Determinando a situação do aluno
    let situacao;
    if (media >= 6) {
        situacao = 'Aprovado';
    } else if (media >= 4) {
        situacao = 'Recuperação';
    } else {
        situacao = 'Reprovado';
    }

    // Retornando a média e a situação
    res.json({ media: media.toFixed(2), situacao });
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5074;

// Middleware para permitir o parse do body da requisição como JSON
app.use(bodyParser.json());

// Rota de cadastro que salva os dados em um arquivo JSON
app.post('/register', (req, res) => {
    const { nome, email, cpf, idade, password } = req.body;

    // Carregar o arquivo users.json
    fs.readFile('users.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Erro ao ler o arquivo de usuários.");
        }

        const users = data ? JSON.parse(data) : [];

        // Adicionar o novo usuário
        users.push({ nome, email, cpf, idade, password });

        // Salvar os usuários atualizados no arquivo users.json
        fs.writeFile('users.json', JSON.stringify(users, null, 2), (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Erro ao salvar os dados de usuários.");
            }

            res.send("Cadastro realizado com sucesso!");
        });
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
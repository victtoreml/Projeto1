const db = require('./bd')

//Definição da constante POST para utilização
const Post = db.sequelize.define('alunos', {
    nome: {
        type: db.Sequelize.STRING
    },
    idade: {
        type: db.Sequelize.INTEGER
    },
    nasc: {
        type: db.Sequelize.DATE
    },
    sexo: {
        type: db.Sequelize.STRING
    },
    mae:
    {
        type: db.Sequelize.STRING
    },
    pai: {
        type: db.Sequelize.STRING
    },
    rg: {
        type: db.Sequelize.INTEGER
    },
    telefone: {
        type: db.Sequelize.INTEGER
    },
    email: {
        type: db.Sequelize.STRING
    },
    endereco: {
        type: db.Sequelize.STRING
    },
    numero: {
        type: db.Sequelize.INTEGER
    },
    bairro: {
        type: db.Sequelize.STRING
    },
    cidade: {
        type: db.Sequelize.STRING
    },
    cep: {
        type: db.Sequelize.INTEGER
    },
    complemento: {
        type: db.Sequelize.STRING
    },
    classe: {
        type: db.Sequelize.STRING
    },
    turno: {
        type: db.Sequelize.STRING
    },
    atividade: {
        type: db.Sequelize.STRING
    },
});


module.exports = Post;


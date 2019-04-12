//Criação de constantes para recebimento dos módulos node.
const express = require('express')
const app = express()
const path = require('path')
const router = express.Router()
const handlebars = require('express-handlebars')
const mysql = require('mysql')
const sha1 = require('sha1')
__dirname = path.resolve();
const bodyParser = require('body-parser')
const Post = require('./models/Post')

//Utilização do Template Engine Handlebars
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//Body Paser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.use(express.static(path.join(__dirname + '/')));

//Rotas GET
app.get('/', function (request, response) {
  response.render('Home')
})

app.get('/Cadastro', function (request, response) {
  response.render('Cadastro');
});

app.get('/Editar', function (request, response) {
  response.render('Editar')
})

app.get('/deletar/:id', function (request, response) {
  Post.destroy({ where: { id: request.params.id } }).then(function () {
    response.send("Aluno Excluido Com Sucesso")
  }).catch(function (erro) {
    response.send("Essa Postagem Não Existe")
  })
})

app.get('/editar/:id', function (request, response) {
  Post.findOne({ id: request.params.id }).then((aluno) => {
    response.render('Editar', { aluno: aluno })
  }).catch(function (erro) {
    response.send("Aluno Inexistente!")
  })
});

app.get('/Home', function (request, response) {
  Post.findAll().then(function (posts) {
    response.render('home', { posts: posts })
  })
});

//Rotas POST
app.post('/Home', function (request, response) {

  Post.create({
    nome: request.body.txtnome,
    idade: request.body.txtidade,
    nasc: request.body.txtnascimento,
    sexo: request.body.optsexo,
    mae: request.body.txtmae,
    pai: request.body.txtpai,
    rg: request.body.txtrg,
    telefone: request.body.txttelefone,
    email: request.body.txtemail,
    endereco: request.body.txtendereco,
    numero: request.body.txtnumero,
    bairro: request.body.txtbairro,
    cidade: request.body.txtcidade,
    cep: request.body.txtcep,
    complemento: request.body.txtcomplemento,
    classe: request.body.classe,
    turno: request.body.optturno,
    atividade: request.body.atividade

  }).then(function () {
    response.render("Matricula Cadastrada Com Sucesso")
  }).catch(function (error) {
    response.send("Mtricula Não Cadastrado, " + error)
  })
});

app.post('/aluno/editar', (request, response) => {
  Post.findOne({ id: request.body.id }).then((aluno) => {

    aluno.nome = request.body.txtnome
    aluno.idade = request.body.txtidade
    aluno.nasc = request.body.txtnascimento
    aluno.sexo = request.body.optsexo
    aluno.mae = request.body.txtmae
    aluno.pai = request.body.txtpai
    aluno.rg = request.body.txtrg
    aluno.telefone = request.body.txttelefone
    aluno.email = request.body.txtemail
    aluno.endereco = request.body.txtendereco
    aluno.numero = request.body.txtnumero
    aluno.bairro = request.body.txtbairro
    aluno.cidade = request.body.txtcidade
    aluno.cep = request.body.txtcep
    aluno.complemento = request.body.txtcomplemento
    aluno.classe = request.body.classe
    aluno.turno = request.body.optturno
    aluno.atividade = request.body.atividade

    aluno.save().then(() => {
      response.send("Aluno Alterado Com Sucesso")
      response.redirect('/Home')
    }).catch((err) => {
      response.send("Houve um erro ao editar o aluno")
      resquest.redirect('/Home')
    })

  }).catch((err) => {
    response.send("Erro ao editar aluno")
    response.redirect('/Home')

  })
});

//Função para verificar se o servidor está rodando na porta inserida
app.listen(3000, function () {
  console.log('Servidor rodando na url http://localhost:3000');
});
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
__dirname = path.resolve();


const mysql = require('mysql');
var sha1 = require('sha1');

const connection = mysql.createConnection({
    host: "http://localhost/phpmyadmin/index.php",
    user: "root@localhost",
    password: "",
    database: 'projeto',
    port: '3306',
});

app.get('/home', (request, response) => {
    connection.query('SELECT * FROM `aluno`', function (err, rows, fields) {
        if (err) {
            console.log('error', err.message, err.stack)
        }
        else {
            response.render(__dirname + '/Home.html', { aluno: rows });
        }
    });
});
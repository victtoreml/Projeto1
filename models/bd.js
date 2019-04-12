//Conexão com banco de dados utilizando o sequelize.
const Sequelize = require('sequelize')
const sequelize = new Sequelize('projeto', 'root', '', {
  host: "localhost",
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});

//Exportação de constantes para utilização em outros arquivos.
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
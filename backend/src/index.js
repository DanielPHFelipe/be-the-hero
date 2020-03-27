const express = require('express');   // importando o modulo express pra dentro da variavel express
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/* 
*   Rota / Recurso: users
*/

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end: retorna uma iformação como uma listagem um dado de usuario
 * POST: Criar uma informação no back-end: criar um novo usuario
 * PUT: ALterar uma informação no back-end
 * DELETE: Deletar uma informão no back-end
 */

/**
 * Tipos parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
 * Route Params: Parâmetros utilizados para idendificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */



app.listen(3333);
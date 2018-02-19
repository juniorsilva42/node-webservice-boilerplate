// CREATE TABLE categories (id int NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, PRIMARY KEY(id));

import test from 'ava'

const { connection, errorHandler } = require('./setup')

const categories = require('../categories')({ connection, errorHandler });

test.beforeEach(t => connection.query('TRUNCATE TABLE categories'))
test.after.always(t => connection.query('TRUNCATE TABLE categories'))

test('Criação de uma categoria', async t => {
  const result = await categories.save('Categoria-vindo-do-teste')
  t.is(result.category.name, 'Categoria-vindo-do-teste')
})

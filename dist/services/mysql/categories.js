'use strict';

var categories = function categories(deps) {
  return {
    all: function all() {
      return new Promise(function (resolve, reject) {
        var connection = deps.connection,
            errorHandler = deps.errorHandler;

        connection.query('SELECT * FROM categories', function (error, results) {
          if (error) {
            errorHandler(error, 'Falha ao exibir as categorias', reject);
            return false;
          }
          resolve({ categories: results });
        });
      });
    },

    save: function save(name) {
      return new Promise(function (resolve, reject) {
        var connection = deps.connection,
            errorHandler = deps.errorHandler;

        connection.query('INSERT INTO categories (name) VALUES (?)', [name], function (error, results) {
          if (error) {
            errorHandler(error, 'Falha ao salvar a categoria ' + name, reject);
            return false;
          }
          resolve({ category: { name: name, id: results.insertId } });
        });
      });
    },

    update: function update(id, name) {
      return new Promise(function (resolve, reject) {
        var connection = deps.connection,
            errorHandler = deps.errorHandler;

        connection.query('UPDATE categories SET name = ? WHERE id = ?', [name, id], function (error, results) {
          if (error || !results.affectedRows) {
            errorHandler(error, 'Falha ao atualizar a categoria ' + name, reject);
            return false;
          }
          resolve({ category: { name: name, id: id }, message: 'Categoria atualizada com sucesso', affectedRows: results.affectedRows });
        });
      });
    },

    del: function del(id) {
      return new Promise(function (resolve, reject) {
        var connection = deps.connection,
            errorHandler = deps.errorHandler;

        connection.query('DELETE FROM categories WHERE id = ?', [id], function (error, results) {
          if (error || !results.affectedRows) {
            errorHandler(error, 'Falha ao remover a categoria', reject);
            return false;
          }
          resolve({ message: 'Categoria removida com sucesso', affectedRows: results.affectedRows });
        });
      });
    }
  };
};

module.exports = categories;
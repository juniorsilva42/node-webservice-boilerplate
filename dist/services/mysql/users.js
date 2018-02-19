'use strict';

var sha1 = require('sha1');

var users = function users(deps) {

  return {

    /*!
     * 
     * Método para listar todos os usuários
     *
    */
    all: function all() {

      return new Promise(function (resolve, reject) {
        var connection = deps.connection,
            errorHandler = deps.errorHandler;


        connection.query('SELECT id, email FROM users', function (error, results) {
          if (error) {
            errorHandler(error, 'Falha ao exibir', reject);
            return false;
          }
          resolve({ users: results });
        });
      });
    },

    /*!
     * 
     * Método salvar um novo usuário
     *
    */
    save: function save(email, password) {

      return new Promise(function (resolve, reject) {
        var connection = deps.connection,
            errorHandler = deps.errorHandler;


        connection.query('INSERT INTO users (email, passwd) VALUES (?,?)', [email, sha1(password)], function (error, results) {
          if (error) {
            errorHandler(error, 'Falha ao salvar o usuário', reject);
            return false;
          }
          resolve({ user: { email: email, password: password, id: results.insertId } });
        });
      });
    },

    /*!
     * 
     * Método para atualizar um usuário
     *
    */
    update: function update(id, password) {

      return new Promise(function (resolve, reject) {
        var connection = deps.connection,
            errorHandler = deps.errorHandler;


        connection.query('UPDATE users SET passwd = ? WHERE id = ?', [password, id], function (error, results) {

          if (error || !results.affectedRows) {
            errorHandler(error, 'Falha ao atualizar', reject);
            return false;
          }
          resolve({ user: { id: id }, message: 'Atualizado com sucesso', affectedRows: results.affectedRows });
        });
      });
    },

    /*!
     * 
     * Método para deletar um usuário
     *
    */
    del: function del(id) {

      return new Promise(function (resolve, reject) {
        var connection = deps.connection,
            errorHandler = deps.errorHandler;


        connection.query('DELETE FROM users WHERE id = ?', [id], function (error, results) {

          if (error || !results.affectedRows) {
            errorHandler(error, 'Falha ao remover o usu\xE1rio', reject);
            return false;
          }
          resolve({ message: 'Usuário removido', affectedRows: results.affectedRows });
        });
      });
    }

  };
};

module.exports = users;
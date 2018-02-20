
const sha1 = require('sha1');

const users = deps => ({

  /*!
     *
     * Método para listar todos os usuários
     *
    */
  all: () => new Promise((resolve, reject) => {
    const { connection, errorHandler } = deps;

    connection.query('SELECT id, email FROM users', (error, results) => {
      if (error) {
        errorHandler(error, 'Falha ao exibir', reject);
        return false;
      }
      resolve({ users: results });
    });
  }),

  /*!
     *
     * Método salvar um novo usuário
     *
    */
  save: (email, password) => new Promise((resolve, reject) => {
    const { connection, errorHandler } = deps;

    connection.query('INSERT INTO users (email, passwd) VALUES (?,?)', [email, sha1(password)], (error, results) => {
      if (error) {
        errorHandler(error, 'Falha ao salvar o usuário', reject);
        return false;
      }
      resolve({ user: { email, password, id: results.insertId } });
    });
  }),

  /*!
     *
     * Método para atualizar um usuário
     *
    */
  update: (id, password) => new Promise((resolve, reject) => {
    const { connection, errorHandler } = deps;

    connection.query('UPDATE users SET passwd = ? WHERE id = ?', [password, id], (error, results) => {
      if (error || !results.affectedRows) {
        errorHandler(error, 'Falha ao atualizar', reject);
        return false;
      }
      resolve({ user: { id }, message: 'Atualizado com sucesso', affectedRows: results.affectedRows });
    });
  }),


  /*!
     *
     * Método para deletar um usuário
     *
    */
  del: id => new Promise((resolve, reject) => {
    const { connection, errorHandler } = deps;

    connection.query('DELETE FROM users WHERE id = ?', [id], (error, results) => {
      if (error || !results.affectedRows) {
        errorHandler(error, 'Falha ao remover o usuário', reject);
        return false;
      }
      resolve({ message: 'Usuário removido', affectedRows: results.affectedRows });
    });
  }),

});

module.exports = users;

'use strict';

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } // CREATE TABLE categories (id int NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, PRIMARY KEY(id));

var _require = require('./setup'),
    connection = _require.connection,
    errorHandler = _require.errorHandler;

var categories = require('../categories')({ connection: connection, errorHandler: errorHandler });

_ava2.default.beforeEach(function (t) {
  return connection.query('TRUNCATE TABLE categories');
});
_ava2.default.after.always(function (t) {
  return connection.query('TRUNCATE TABLE categories');
});

(0, _ava2.default)('Criação de uma categoria', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(t) {
    var result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return categories.save('Categoria-vindo-do-teste');

          case 2:
            result = _context.sent;

            t.is(result.category.name, 'Categoria-vindo-do-teste');

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
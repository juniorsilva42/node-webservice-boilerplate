'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var db = require('../services/mysql');

var routes = function routes(server) {
  server.get('/', function (req, res, next) {
    res.send('Enjoy the silence in Graph of the SICIR System');
    next();
  });

  server.get('categoria', function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.t0 = res;
              _context.next = 4;
              return db.categories().all();

            case 4:
              _context.t1 = _context.sent;

              _context.t0.send.call(_context.t0, _context.t1);

              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t2 = _context['catch'](0);

              res.send(_context.t2);

            case 11:
              next();

            case 12:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 8]]);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }());

  server.post('categoria', function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
      var name;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              name = req.params.name;
              _context2.prev = 1;
              _context2.t0 = res;
              _context2.next = 5;
              return db.categories().save(name);

            case 5:
              _context2.t1 = _context2.sent;

              _context2.t0.send.call(_context2.t0, _context2.t1);

              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t2 = _context2['catch'](1);

              res.send(_context2.t2);

            case 12:
              next();

            case 13:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[1, 9]]);
    }));

    return function (_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }());

  server.post('users', function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
      var _req$params, email, password;

      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _req$params = req.params, email = _req$params.email, password = _req$params.password;
              _context3.prev = 1;
              _context3.t0 = res;
              _context3.next = 5;
              return db.users().save(email, password);

            case 5:
              _context3.t1 = _context3.sent;

              _context3.t0.send.call(_context3.t0, _context3.t1);

              _context3.next = 12;
              break;

            case 9:
              _context3.prev = 9;
              _context3.t2 = _context3['catch'](1);

              res.send(_context3.t2);

            case 12:
              next();

            case 13:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined, [[1, 9]]);
    }));

    return function (_x7, _x8, _x9) {
      return _ref3.apply(this, arguments);
    };
  }());

  server.get('users', function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.t0 = res;
              _context4.next = 4;
              return db.users().all();

            case 4:
              _context4.t1 = _context4.sent;

              _context4.t0.send.call(_context4.t0, _context4.t1);

              _context4.next = 11;
              break;

            case 8:
              _context4.prev = 8;
              _context4.t2 = _context4['catch'](0);

              res.send(_context4.t2);

            case 11:
              next();

            case 12:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined, [[0, 8]]);
    }));

    return function (_x10, _x11, _x12) {
      return _ref4.apply(this, arguments);
    };
  }());

  server.del('users', function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res, next) {
      var id;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              id = req.params.id;
              _context5.prev = 1;
              _context5.t0 = res;
              _context5.next = 5;
              return db.users().del(id);

            case 5:
              _context5.t1 = _context5.sent;

              _context5.t0.send.call(_context5.t0, _context5.t1);

              _context5.next = 12;
              break;

            case 9:
              _context5.prev = 9;
              _context5.t2 = _context5['catch'](1);

              res.send(_context5.t2);

            case 12:
              next();

            case 13:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, undefined, [[1, 9]]);
    }));

    return function (_x13, _x14, _x15) {
      return _ref5.apply(this, arguments);
    };
  }());

  server.put('categoria', function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res, next) {
      var _req$params2, id, name;

      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _req$params2 = req.params, id = _req$params2.id, name = _req$params2.name;
              _context6.prev = 1;
              _context6.t0 = res;
              _context6.next = 5;
              return db.categories().update(id, name);

            case 5:
              _context6.t1 = _context6.sent;

              _context6.t0.send.call(_context6.t0, _context6.t1);

              _context6.next = 12;
              break;

            case 9:
              _context6.prev = 9;
              _context6.t2 = _context6['catch'](1);

              res.send(_context6.t2);

            case 12:
              next();

            case 13:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, undefined, [[1, 9]]);
    }));

    return function (_x16, _x17, _x18) {
      return _ref6.apply(this, arguments);
    };
  }());

  server.del('categoria', function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res, next) {
      var id;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              id = req.params.id;
              _context7.prev = 1;
              _context7.t0 = res;
              _context7.next = 5;
              return db.categories().del(id);

            case 5:
              _context7.t1 = _context7.sent;

              _context7.t0.send.call(_context7.t0, _context7.t1);

              _context7.next = 12;
              break;

            case 9:
              _context7.prev = 9;
              _context7.t2 = _context7['catch'](1);

              res.send(_context7.t2);

            case 12:
              next();

            case 13:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, undefined, [[1, 9]]);
    }));

    return function (_x19, _x20, _x21) {
      return _ref7.apply(this, arguments);
    };
  }());
};

module.exports = routes;
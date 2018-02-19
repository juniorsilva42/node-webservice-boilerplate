'use strict';

module.exports = {
  method: 'get',
  path: '/',
  name: 'index',
  useWrap: true,
  version: 'v1.0.0',
  handler: function handler(req, res) {
    return { ok: true };
  }
};
module.exports = {
  method: 'post',
  path: '/products',
  name: 'products',
  useWrap: true,
  version: 'v1.0.0',
  handler: (req, res) => {
    return { ok: true }
  }
}

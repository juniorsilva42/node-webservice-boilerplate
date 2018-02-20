module.exports = {
    method: 'get',
    path: '/books',
    name: 'books',
    useWrap: true,
    version: 'v1.0.0',
    handler: (req, res) => {
        return { ok: true }
    }
}

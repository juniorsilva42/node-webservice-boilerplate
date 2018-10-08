import app from './../../../../server/app';

export default {
  method: 'post',
  path: '/books',
  name: 'Create a book',
  useWrap: true,
  version: 'v1.0.0',
  handler: (req, res, next) => {

    const {title, pages, isbn, editora} = req.body; 

    res.send({
      title: title,
      pages: pages, 
      codigo_isbn: isbn,
      editora: editora
    });

    next();
  },
};

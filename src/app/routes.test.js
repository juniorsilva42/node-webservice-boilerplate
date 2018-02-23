const routesTest = (app) => {

  app.route('/books').get((req, res, next) => {
    res.send('Response from a books!');
    next();
  });

};

export default routesTest;
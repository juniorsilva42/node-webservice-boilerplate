class Books {

  hello(){
    console.log('hello from BooksController!');
  }

  getAll() {
    return new Promise((resolve, reject) => {
      this.Books.findAll({})
        .map(res => res.json())
        .subscribe((data) => {
          this.data = data;
          resolve(data);
        });
    });
  }

  getById(params) {
    return new Promise((resolve, reject) => {
      this.Books.findOne({
        where: params,
      })
        .map(res => res.json())
        .subscribe((data) => {
          this.data = data;
          resolve(data);
        });
    });
  }

  create(data) {
    return new Promise((resolve, reject) => {
      this.Books.create(data)
        .map(res => res.json())
        .subscribe((data) => {
          this.data = data;
          resolve(data);
        });
    });
  }
}

module.exports = new Books();
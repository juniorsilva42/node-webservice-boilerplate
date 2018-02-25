class Books {
  constructor(message) {
    this.message = message;
  }

  hello() {
    return this.message;
  }
}

module.exports = new Books();

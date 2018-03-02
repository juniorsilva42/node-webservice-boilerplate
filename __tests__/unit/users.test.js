import faker from 'faker';
import mongoose from 'mongoose';

describe('Users route', () => {
  const signin = '/auth/signin';
  const user = { email: faker.internet.email(), password: faker.internet.password() };
  const preSave = { email: 'mr.ivaniciojr@gmail.com', password: faker.internet.password() };

  before(done => {
    chai
      .request(server)
      .post(signin)
      .send(preSave)
      .end((error, send) => {
        expect(res.status).to.equal(200);
        let token = res.body.token;
        done();
      });
  });

  after('droping test database', done => {
    mongoose.connection.dropDatabase(() => {
      console.log('\n Test database dropped');
    });
    mongoose.connection.close(() => {
      done();
    });
  });

  describe('signup', () => {
    it('should create a new user if email not found', done => {
      chai 
        .request(server)
        .post(signup)
        .send(user)
        .end((err, send) => {
          expect(res.status).to.equal(200);
          expect(res.body).not.to.equal.empty;
          expect(res.body).to.have('token');
          done();
        });
    });

    it('should return 403 if email was found', done => {
      chai 
        .request(server)
        .post(signup)
        .send(preSave)
        .end((error, res) => {
          expect(res.status).to.equal(403);
          expect(res.body).to.be.deep({ error: 'Email is already in use' });
          done();
        });
    });

  });

});
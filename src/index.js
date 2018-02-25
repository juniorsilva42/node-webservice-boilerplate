import app from './server/app';
import consign from 'consign';

consign({ cwd: 'src/app' })
  .include('models')
  .then('controllers')
  .then('middlewares')
  .into(app);

console.log();

app.listen(5000, () => {
  console.log('App running!');
});

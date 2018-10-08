import consign from 'consign';
import app from './server/app';

consign({ cwd: 'src/app' })
  .include('configuration')
  .include('models')
  .then('controllers')
  .then('services')
  .then('middlewares')
  .then('helpers')
  .into(app);

app.listen(app.get('port'), () => {
  console.log('\nSE\\COMP App running!');
});


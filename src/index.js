import consign from 'consign';
import app from './server/app';

consign({ cwd: 'src/app' })
  .include('configuration')
  .include('models')
  .include('controllers')
  .include('services')
  .then('middlewares')
  .then('helpers')
  .into(app);

app.listen(app.get('port'), () => {
  console.log('App running!');
});

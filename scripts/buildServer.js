import webpack from 'webpack';
import config from '../server.config';

webpack(config, (err, stats) => {
  if (err) { // so a fatal error occurred. Stop here.
    console.log(err.red);

    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(error.red));
  }

  if (jsonStats.hasWarnings) {
    console.log('Webpack generated the following warnings: '.yellow);
    jsonStats.warnings.map(warning => console.log(warning.yellow));
  }

  console.log(`Webpack stats: ${stats}`);

  return 0;
});

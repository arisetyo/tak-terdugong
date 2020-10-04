/**
 * Simple Node server for front-end development inside a container
 * @author: Arie M. Prasetyo (2020)
 */

import path from 'path';
import express from 'express';
import {devServer as config} from './webpack.dev';

const app = express();

const staticPath = path.join(__dirname, '/build');
app.use(express.static(staticPath));

app.listen(config.port, '0.0.0.0', function onStart(err) {
  if (err) console.log(err);
  console.info('Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', config.port, config.port);
});
